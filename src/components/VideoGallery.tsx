"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { featuredShortIds, homeShortCaptions, homeUgcSlides, ugcVideos, videoEmbedUrl, videoPoster, videoWatchUrl, type UgcSlide, type UgcVideo } from "@/content/videos";

export function ShortsRow() {
  const featured = featuredShortIds
    .map((id, index) => {
      const video = ugcVideos.find((item) => item.id === id);
      return video ? { ...video, caption: homeShortCaptions[index] } : null;
    })
    .filter((item): item is UgcVideo & { caption: string } => Boolean(item));

  return (
    <div className="mt-10">
      <div className="flex justify-center gap-4 overflow-x-auto pb-2">
        {featured.map((video, index) => (
          <ShortCard key={video.id} video={video} caption={video.caption} featured={index === 2} row />
        ))}
      </div>
    </div>
  );
}

export function WorkGallery() {
  const [filter, setFilter] = useState<"All" | UgcVideo["category"]>("All");
  const [count, setCount] = useState(12);
  const [active, setActive] = useState<UgcVideo | null>(null);
  const filtered = useMemo(
    () => (filter === "All" ? ugcVideos : ugcVideos.filter((video) => video.category === filter)),
    [filter],
  );
  const visible = filtered.slice(0, count);

  return (
    <div>
      <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Sample filters">
        {(["All", "Product demo", "Testimonial-style", "Hook variations"] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={filter === tab}
            className={`rounded-full px-4 py-2 text-sm ${filter === tab ? "bg-amber text-ink" : "border border-white/15"}`}
            onClick={() => {
              setFilter(tab);
              setCount(12);
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {visible.map((video) => (
          <li key={video.id}>
            <ShortCard video={video} caption={video.label} onOpen={() => setActive(video)} />
          </li>
        ))}
      </ul>
      {count < filtered.length ? (
        <button type="button" className="mt-6 rounded-full border border-white/20 px-5 py-2 text-sm" onClick={() => setCount((value) => value + 12)}>
          Load more
        </button>
      ) : null}
      <Lightbox video={active} onClose={() => setActive(null)} />
    </div>
  );
}

function ShortCard({
  video,
  caption,
  featured = false,
  row = false,
  onOpen,
}: {
  video: UgcVideo;
  caption?: string;
  featured?: boolean;
  row?: boolean;
  onOpen?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const show = onOpen ? false : open;
  return (
    <>
      <button
        type="button"
        onClick={() => (onOpen ? onOpen() : setOpen(true))}
        className={`phone-frame group relative block overflow-hidden bg-navy text-left ${row ? (featured ? "w-[168px] shrink-0 md:w-[200px]" : "w-[140px] shrink-0 md:w-[168px]") : "w-full"}`}
      >
        <span className="relative block aspect-[9/16]">
          {video.available ? (
            <img src={videoPoster(video.id)} alt="" className="h-full w-full object-cover" />
          ) : (
            <span className="flex h-full items-center justify-center p-4 text-center text-xs text-mist">Preview unavailable</span>
          )}
          <span className="absolute left-1/2 top-[42%] grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/20 backdrop-blur-sm">
            <span className="ml-1 border-y-[6px] border-l-[10px] border-y-transparent border-l-white" />
          </span>
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-3 text-xs font-bold">{caption}</span>
        </span>
      </button>
      {show ? <Lightbox video={video} onClose={() => setOpen(false)} /> : null}
    </>
  );
}

function Lightbox({ video, onClose }: { video: UgcVideo | null; onClose: () => void }) {
  useEffect(() => {
    if (!video) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [video, onClose]);

  if (!video) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4" role="dialog" aria-modal="true" aria-label="Video player">
      <button type="button" className="absolute inset-0" aria-label="Close video" onClick={onClose} />
      <div className="relative z-10 w-full max-w-sm">
        {video.available ? (
          <iframe
            title={video.label}
            src={`${videoEmbedUrl(video.id)}?autoplay=1`}
            className="aspect-[9/16] w-full rounded-2xl bg-black"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="glass rounded-2xl p-6 text-sm">
            <p>This sample is not available to embed right now.</p>
            <a className="mt-3 inline-block text-amber underline" href={videoWatchUrl(video.id)}>Open the original link</a>
          </div>
        )}
        <button type="button" className="mt-3 rounded-full bg-white/10 px-4 py-2 text-sm" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export function HomeShorts() {
  return <UgcSlider slides={homeUgcSlides} label="See the ads" />;
}

function circularOffset(index: number, active: number, count: number) {
  let diff = index - active;
  if (diff > count / 2) diff -= count;
  if (diff < -count / 2) diff += count;
  return diff;
}

export function UgcSlider({ slides, label }: { slides: UgcSlide[]; label: string }) {
  const [index, setIndex] = useState(0);
  const [shift, setShift] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const [open, setOpen] = useState<UgcSlide | null>(null);
  const [reduce, setReduce] = useState(false);
  const drag = useRef(0);
  const startX = useRef(0);
  const pointer = useRef<number | null>(null);
  const moved = useRef(false);
  const paused = useRef(false);
  const count = slides.length;
  const playing = hover ?? index;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(media.matches);
    if (media.matches) return;
    const timer = window.setInterval(() => {
      if (paused.current) return;
      setIndex((current) => (current + 1) % count);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [count, open]);

  useEffect(() => {
    paused.current = open != null;
  }, [open]);

  return (
    <div className="mt-8" role="region" aria-roledescription="carousel" aria-label={label}>
      <div
        className="relative mx-auto h-[340px] w-full max-w-[1100px] touch-pan-y overflow-hidden sm:h-[460px]"
        onPointerDown={(event) => {
          if (event.pointerType === "mouse" && event.button !== 0) return;
          pointer.current = event.pointerId;
          startX.current = event.clientX;
          drag.current = 0;
          moved.current = false;
          paused.current = true;
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (pointer.current !== event.pointerId) return;
          const delta = event.clientX - startX.current;
          drag.current = delta;
          if (Math.abs(delta) > 8) moved.current = true;
          setShift(delta);
        }}
        onPointerUp={(event) => {
          if (pointer.current !== event.pointerId) return;
          pointer.current = null;
          const delta = drag.current;
          setShift(0);
          if (delta < -48) setIndex((current) => (current + 1) % count);
          else if (delta > 48) setIndex((current) => (current - 1 + count) % count);
          window.setTimeout(() => { paused.current = open != null; }, 400);
        }}
        onPointerCancel={() => { pointer.current = null; setShift(0); paused.current = false; }}
      >
        {slides.map((slide, slideIndex) => {
          const offset = circularOffset(slideIndex, index, count);
          if (Math.abs(offset) > 2) return null;
          const featured = offset === 0;
          return (
            <div
              key={slide.id}
              role="button"
              tabIndex={0}
              className={`phone-frame absolute left-1/2 top-1/2 overflow-hidden ${featured ? "w-[168px] border-amber shadow-[0_0_40px_rgba(255,181,71,0.45)] sm:w-[210px]" : "w-[132px] sm:w-[168px]"}`}
              style={{
                transform: `translate(calc(-50% + ${offset * 168 + shift}px), -50%) scale(${featured ? 1.05 : 0.86})`,
                zIndex: 10 - Math.abs(offset),
                opacity: Math.abs(offset) === 2 ? 0.55 : 1,
                transition: shift ? "none" : "transform 500ms ease, opacity 500ms ease",
              }}
              onMouseEnter={() => { paused.current = true; setHover(slideIndex); }}
              onMouseLeave={() => { paused.current = open != null; setHover((current) => (current === slideIndex ? null : current)); }}
              onClick={() => { if (!moved.current) setOpen(slide); }}
              onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setOpen(slide); } }}
            >
              <span className="relative block aspect-[9/16] bg-navy">
                <SlideMedia slide={slide} play={!reduce && slideIndex === playing} sound={false} />
                {slideIndex === playing && !reduce ? null : (
                  <span className="absolute left-1/2 top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-amber text-navy">
                    <span className="ml-0.5 border-y-[7px] border-l-[11px] border-y-transparent border-l-navy" />
                  </span>
                )}
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0f2138] to-transparent p-3 text-left text-xs font-bold">
                  {slide.caption}
                </span>
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {slides.map((slide, dot) => (
          <button key={slide.id} type="button" aria-label={`Show ${slide.caption}`} className={`size-2 rounded-full ${dot === index ? "bg-amber" : "bg-white/30"}`} onClick={() => setIndex(dot)} />
        ))}
      </div>
      {open ? <SoundLightbox slide={open} onClose={() => setOpen(null)} /> : null}
    </div>
  );
}

function SlideMedia({ slide, play, sound }: { slide: UgcSlide; play: boolean; sound: boolean }) {
  if (play && slide.mp4) {
    return <video src={slide.mp4} poster={slide.poster} autoPlay muted={!sound} loop playsInline controls={sound} className="h-full w-full object-cover" />;
  }
  if (play && slide.id) {
    const query = sound ? "autoplay=1&mute=0" : `autoplay=1&mute=1&controls=0&loop=1&playlist=${slide.id}&modestbranding=1`;
    return (
      <iframe
        title={slide.caption}
        src={`${videoEmbedUrl(slide.id)}?${query}&playsinline=1`}
        className={`h-full w-full ${sound ? "" : "pointer-events-none"}`}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen={sound}
      />
    );
  }
  return <img src={slide.poster} alt="" className="h-full w-full object-cover" />;
}

function SoundLightbox({ slide, onClose }: { slide: UgcSlide; onClose: () => void }) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4" role="dialog" aria-modal="true" aria-label={slide.caption}>
      <button type="button" className="absolute inset-0" aria-label="Close video" onClick={onClose} />
      <div className="relative z-10 w-full max-w-sm">
        <SlideMedia slide={slide} play sound />
        <button type="button" className="mt-3 rounded-full bg-white/10 px-4 py-2 text-sm" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
