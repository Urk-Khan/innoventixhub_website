"use client";

import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { embedUrl, posterCandidates, ugcCategories, watchUrl, type UgcVideo } from "@/content/videos";

const ADVANCE_MS = 3200;
const DRAG_THRESHOLD = 8;
const FLICK_VELOCITY = 0.5;

/* One muted iframe at a time: the most visible slider on the page wins. */
const ratios = new Map<string, number>();
const listeners = new Set<() => void>();
function setRatio(id: string, ratio: number) {
  if (ratio < 0.35) ratios.delete(id);
  else ratios.set(id, ratio);
  listeners.forEach((listener) => listener());
}
function leadSlider() {
  let lead: string | null = null;
  let best = 0;
  ratios.forEach((ratio, id) => {
    if (ratio > best) {
      best = ratio;
      lead = id;
    }
  });
  return lead;
}
function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

const mod = (n: number, m: number) => ((n % m) + m) % m;

function Poster({ video, eager }: { video: UgcVideo; eager: boolean }) {
  const candidates = useMemo(() => posterCandidates(video), [video]);
  const [step, setStep] = useState(0);
  return (
    <img
      src={candidates[Math.min(step, candidates.length - 1)]}
      alt=""
      width={360}
      height={640}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
      onError={() => setStep((current) => Math.min(current + 1, candidates.length - 1))}
      className="h-full w-full object-cover"
    />
  );
}

function Media({ video, play, sound }: { video: UgcVideo; play: boolean; sound: boolean }) {
  if (play && video.mp4) {
    return (
      <video
        src={video.mp4}
        poster={video.poster}
        autoPlay
        muted={!sound}
        loop
        playsInline
        preload="none"
        controls={sound}
        className="h-full w-full object-cover"
      />
    );
  }
  if (play) {
    return (
      <iframe
        title={video.caption || "AI UGC ad"}
        src={embedUrl(video.id, sound)}
        className={`h-full w-full ${sound ? "" : "pointer-events-none"}`}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen={sound}
      />
    );
  }
  return <Poster video={video} eager />;
}

export function UgcSlider({
  videos,
  label,
  aspect = "9/16",
  filterable = false,
  startIndex = 0,
}: {
  videos: UgcVideo[];
  label: string;
  aspect?: string;
  filterable?: boolean;
  startIndex?: number;
}) {
  const sliderId = useRef(`ugc-${Math.random().toString(36).slice(2)}`).current;
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [category, setCategory] = useState<(typeof ugcCategories)[number]>("All");
  const [fade, setFade] = useState(false);
  const list = useMemo(
    () => (category === "All" ? videos : videos.filter((video) => video.category === category)),
    [videos, category],
  );
  const count = list.length;
  const [active, setActive] = useState(startIndex);
  const [shift, setShift] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [settled, setSettled] = useState(false);
  const [hover, setHover] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [reduce, setReduce] = useState(false);
  const [lightbox, setLightbox] = useState<UgcVideo | null>(null);
  const lead = useSyncExternalStore(subscribe, leadSlider, () => null);
  const visible = lead === sliderId;
  const drag = useRef({ pointer: -1, startX: 0, startT: 0, delta: 0, moved: false, captured: false });
  const triggerRef = useRef<HTMLElement | null>(null);

  const step = useCallback(() => {
    const style = stageRef.current ? getComputedStyle(stageRef.current) : null;
    const width = parseFloat(style?.getPropertyValue("--card-w") || "") || 200;
    const gap = parseFloat(style?.getPropertyValue("--gap") || "") || 20;
    return width + gap;
  }, []);

  const go = useCallback((delta: number) => setActive((current) => current + delta), []);

  // Visibility: report how much of the slider is on screen.
  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setRatio(sliderId, entry.isIntersecting ? entry.intersectionRatio : 0),
      { threshold: [0, 0.1, 0.2, 0.35, 0.5, 0.65, 0.8, 1] },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      setRatio(sliderId, 0);
    };
  }, [sliderId]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(media.matches);
    update();
    media.addEventListener("change", update);
    const onVisibility = () => setHidden(document.hidden);
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      media.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  // Centred card must rest for 400ms before its iframe mounts.
  useEffect(() => {
    setSettled(false);
    const timer = window.setTimeout(() => setSettled(true), 400);
    return () => window.clearTimeout(timer);
  }, [active, category]);

  const paused = hover || focused || dragging || hidden || lightbox != null || reduce || !visible;
  useEffect(() => {
    if (paused || count < 2) return;
    const timer = window.setTimeout(() => go(1), ADVANCE_MS);
    return () => window.clearTimeout(timer);
  }, [active, paused, count, go]);

  function changeCategory(next: (typeof ugcCategories)[number]) {
    if (next === category) return;
    setFade(true);
    window.setTimeout(() => {
      setCategory(next);
      setActive(0);
      setFade(false);
    }, 125);
  }

  function openLightbox(video: UgcVideo, trigger: HTMLElement | null) {
    triggerRef.current = trigger;
    setLightbox(video);
  }

  function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    drag.current = { pointer: event.pointerId, startX: event.clientX, startT: performance.now(), delta: 0, moved: false, captured: false };
  }

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const state = drag.current;
    if (state.pointer !== event.pointerId) return;
    state.delta = event.clientX - state.startX;
    if (!state.moved && Math.abs(state.delta) > DRAG_THRESHOLD) {
      state.moved = true;
      state.captured = true;
      setDragging(true);
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    if (state.moved) setShift(state.delta);
  }

  function endDrag(event: React.PointerEvent<HTMLDivElement>) {
    const state = drag.current;
    if (state.pointer !== event.pointerId) return;
    state.pointer = -1;
    if (state.moved) {
      const velocity = state.delta / Math.max(1, performance.now() - state.startT);
      let steps = -Math.round(state.delta / step());
      if (steps === 0 && Math.abs(velocity) > FLICK_VELOCITY) steps = velocity < 0 ? 1 : -1;
      setActive((current) => current + steps);
    }
    setShift(0);
    setDragging(false);
    // `moved` stays set until the click that follows the gesture has been swallowed.
    window.setTimeout(() => { state.moved = false; }, 0);
  }

  function onKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowRight") { event.preventDefault(); go(1); }
    else if (event.key === "ArrowLeft") { event.preventDefault(); go(-1); }
  }

  const current = count ? mod(active, count) : 0;
  const offsets = [-3, -2, -1, 0, 1, 2, 3];

  return (
    <div
      ref={rootRef}
      data-slider
      className="mt-8"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
    >
      {filterable ? (
        <div className="mb-6 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Sample filters">
          {ugcCategories.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={category === tab}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${category === tab ? "bg-amber text-navy" : "border border-white/15 text-pearl hover:border-white/30"}`}
              onClick={() => changeCategory(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      ) : null}

      <div
        ref={stageRef}
        className="ugc-stage relative mx-auto w-full max-w-[1100px] touch-pan-y select-none overflow-hidden py-10 [--card-w:150px] [--gap:14px] sm:[--card-w:210px] sm:[--gap:22px]"
        style={{ transition: "opacity 250ms ease", opacity: fade ? 0 : 1 }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div className="ugc-spacer" style={{ aspectRatio: aspect, width: "var(--card-w)", margin: "0 auto", visibility: "hidden" }} aria-hidden="true" />
        {count
          ? offsets.map((offset) => {
              const virtual = active + offset;
              const video = list[mod(virtual, count)];
              const centre = offset === 0;
              const abs = Math.abs(offset);
              const playInline = centre && settled && visible && !paused && !dragging && !reduce && video.available !== false;
              return (
                <div
                  key={`${category}-${virtual}`}
                  data-far={abs >= 2 ? "" : undefined}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${mod(virtual, count) + 1} of ${count}`}
                  aria-hidden={abs > 2 ? true : undefined}
                  className={`ugc-card phone-frame absolute left-1/2 top-1/2 cursor-grab overflow-hidden active:cursor-grabbing ${centre ? "border-amber" : ""}`}
                  style={{
                    width: "var(--card-w)",
                    aspectRatio: aspect,
                    ["--o" as string]: abs === 3 ? 0 : abs === 2 ? 0.55 : 1,
                    transform: `translate(calc(-50% + ${offset} * (var(--card-w) + var(--gap)) + ${shift}px), -50%) scale(${centre ? 1.05 : 0.86})`,
                    zIndex: 10 - abs,
                    boxShadow: centre ? "0 0 40px rgba(93, 240, 168,0.45), 0 24px 60px rgba(0,0,0,0.35)" : undefined,
                    transition: dragging ? "none" : "transform 500ms cubic-bezier(.22,1,.36,1), opacity 500ms ease, box-shadow 500ms ease",
                    pointerEvents: abs > 2 ? "none" : undefined,
                  }}
                  onClick={(event) => {
                    if (drag.current.moved) return;
                    if (!centre) { go(offset); return; }
                    if (video.available !== false) openLightbox(video, event.currentTarget.querySelector("button"));
                  }}
                >
                  <button
                    type="button"
                    tabIndex={centre ? 0 : -1}
                    className="relative block h-full w-full text-left"
                    aria-label={centre ? `Play ${video.caption || "AI UGC ad"} with sound` : `Show ${video.caption || "AI UGC ad"}`}
                    onClick={(event) => event.preventDefault()}
                  >
                    <span className="relative block h-full w-full bg-navy">
                      {playInline ? <Media video={video} play sound={false} /> : <Poster video={video} eager={abs <= 1} />}
                      {playInline ? null : (
                        <span className="absolute left-1/2 top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-amber text-navy">
                          <span className="ml-0.5 border-y-[7px] border-l-[11px] border-y-transparent border-l-navy" />
                        </span>
                      )}
                      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080d1e] to-transparent p-3 text-left text-xs font-bold">
                        {video.caption || "AI UGC ad"}
                      </span>
                    </span>
                  </button>
                </div>
              );
            })
          : null}
      </div>

      <div className="mx-auto mt-5 flex max-w-[360px] items-center gap-3">
        <button type="button" className="grid size-9 place-items-center rounded-full border border-white/15 text-pearl hover:border-white/30" aria-label="Previous video" onClick={() => go(-1)}>
          <span aria-hidden="true">←</span>
        </button>
        <div className="flex-1">
          <div className="h-1 overflow-hidden rounded-full bg-white/15" role="presentation">
            <div className="h-full rounded-full bg-amber transition-[width] duration-500" style={{ width: `${count ? ((current + 1) / count) * 100 : 0}%` }} />
          </div>
          <p className="mt-2 text-center text-xs text-mist" aria-live="polite">{count ? current + 1 : 0} / {count}</p>
        </div>
        <button type="button" className="grid size-9 place-items-center rounded-full border border-white/15 text-pearl hover:border-white/30" aria-label="Next video" onClick={() => go(1)}>
          <span aria-hidden="true">→</span>
        </button>
      </div>

      {lightbox ? (
        <Lightbox
          video={lightbox}
          onClose={() => {
            setLightbox(null);
            triggerRef.current?.focus();
          }}
        />
      ) : null}
    </div>
  );
}

function Lightbox({ video, onClose }: { video: UgcVideo; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>("button, a[href], video[controls]");
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  return (
    <div
      ref={dialogRef}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[rgba(15,33,56,0.85)] p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Video player"
    >
      <button type="button" className="absolute inset-0 cursor-default" aria-label="Close video" tabIndex={-1} onClick={onClose} />
      <div className="relative z-10 w-full max-w-[360px]">
        {video.available !== false ? (
          <div className="phone-frame aspect-[9/16] w-full overflow-hidden">
            <Media video={video} play sound />
          </div>
        ) : (
          <div className="glass rounded-2xl p-6 text-sm">
            <p>This sample is not available to embed right now.</p>
            <a className="mt-3 inline-block text-amber underline" href={watchUrl(video.id)}>Open the original link</a>
          </div>
        )}
        <button ref={closeRef} type="button" className="mt-3 rounded-full bg-white/10 px-4 py-2 text-sm hover:bg-white/20" aria-label="Close video" onClick={onClose}>
          <span aria-hidden="true">✕</span> Close
        </button>
      </div>
    </div>
  );
}
