"use client";

import { useEffect, useMemo, useState } from "react";
import { featuredShortIds, homeShortCaptions, ugcVideos, videoEmbedUrl, videoPoster, videoWatchUrl, type UgcVideo } from "@/content/videos";

export function ShortsRow() {
  const featured = featuredShortIds
    .map((id, index) => {
      const video = ugcVideos.find((item) => item.id === id);
      return video ? { ...video, caption: homeShortCaptions[index] } : null;
    })
    .filter((item): item is UgcVideo & { caption: string } => Boolean(item));

  return (
    <div className="mt-10">
      <div className="flex gap-4 overflow-x-auto pb-2 md:justify-center">
        {featured.map((video, index) => (
          <ShortCard key={video.id} video={video} caption={video.caption} featured={index === 2} />
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
  onOpen,
}: {
  video: UgcVideo;
  caption?: string;
  featured?: boolean;
  onOpen?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const show = onOpen ? false : open;
  return (
    <>
      <button
        type="button"
        onClick={() => (onOpen ? onOpen() : setOpen(true))}
        className={`group relative block overflow-hidden rounded-2xl bg-navy text-left ${featured ? "w-44 shrink-0 md:w-52" : "w-40 shrink-0 md:w-full"}`}
      >
        <span className="relative block aspect-[9/16]">
          {video.available ? (
            <img src={videoPoster(video.id)} alt="" className="h-full w-full object-cover" />
          ) : (
            <span className="flex h-full items-center justify-center p-4 text-center text-xs text-mist">Preview unavailable</span>
          )}
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
  const [active, setActive] = useState<UgcVideo | null>(null);
  const featured = featuredShortIds
    .map((id, index) => {
      const video = ugcVideos.find((item) => item.id === id);
      return video ? { video, caption: homeShortCaptions[index] } : null;
    })
    .filter((item): item is { video: UgcVideo; caption: string } => Boolean(item));

  return (
    <>
      <div className="mt-8 flex gap-4 overflow-x-auto pb-4 md:justify-center">
        {featured.map(({ video, caption }, index) => (
          <button
            key={video.id}
            type="button"
            onClick={() => setActive(video)}
            className={`relative shrink-0 overflow-hidden rounded-2xl ${index === 2 ? "w-48 md:w-56" : "w-36 md:w-44"}`}
          >
            <span className="block aspect-[9/16]">
              <img src={videoPoster(video.id)} alt="" className="h-full w-full object-cover" />
            </span>
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-3 text-left text-xs font-bold">
              UGC Short
              <span className="mt-1 block text-cream/80">{caption}</span>
            </span>
          </button>
        ))}
      </div>
      <Lightbox video={active} onClose={() => setActive(null)} />
    </>
  );
}
