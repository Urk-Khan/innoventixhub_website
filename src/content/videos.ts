export type UgcVideo = {
  /** YouTube Shorts id. */
  id: string;
  category: "Product demo" | "Testimonial-style" | "Hook variations";
  /** Optional neutral label; the slider falls back to "AI UGC ad". */
  caption?: string;
  /** Optional self-hosted file, e.g. "/ugc/<id>.mp4". Takes priority over YouTube. */
  mp4?: string;
  /** Optional poster override; otherwise derived from the id. */
  poster?: string;
  /** false = never rendered (dead id). */
  available?: boolean;
};

/** The one list every UGC slider on the site uses: all 23 Shorts, in library order. */
export const ugcVideos: UgcVideo[] = [
  { id: "3-PuCBGkI_I", category: "Product demo" },
  { id: "E02ClYrTJdk", category: "Hook variations" },
  { id: "VIbDM1AbB4E", category: "Testimonial-style" },
  { id: "-2Tx14I5o1I", category: "Product demo" },
  { id: "xWf4itxXMDI", category: "Hook variations" },
  { id: "OyFjwMt-bf8", category: "Testimonial-style" },
  { id: "_Bkbsy8ncWw", category: "Product demo" },
  { id: "FH0YX9Wyrqc", category: "Hook variations" },
  { id: "f-iTa9hzn-A", category: "Testimonial-style" },
  { id: "zpKyVkxVsow", category: "Product demo" },
  { id: "NqfkH4wpMxo", category: "Hook variations" },
  { id: "UTOrBQsziPY", category: "Testimonial-style" },
  { id: "rBQX8lc8WaI", category: "Product demo" },
  { id: "_w1qyGfVQ4Q", category: "Hook variations" },
  { id: "ZMKo7548PEU", category: "Testimonial-style" },
  { id: "OvS8cCPnmIs", category: "Product demo" },
  { id: "tacQT-oEY0E", category: "Hook variations" },
  { id: "5rM5q2Gm2FM", category: "Testimonial-style" },
  { id: "Y_ndM-GtxFg", category: "Product demo" },
  { id: "cv4cZ3mrLpI", category: "Hook variations" },
  { id: "av2EYSU3Abc", category: "Testimonial-style", available: false },
  { id: "Bc3G4jGC81w", category: "Product demo" },
  { id: "lWErNm0Gr5A", category: "Hook variations" },
];

/** `av2EYSU3Abc` is dead (404 on every thumbnail and oEmbed, checked 19 Oct 2026), so 22 are playable. */
export const playableUgc = ugcVideos.filter((video) => video.available !== false);

export const ugcCategories = ["All", "Product demo", "Testimonial-style", "Hook variations"] as const;

/** Index of a Short inside `playableUgc` (0 when the id is not found). */
export const playableIndex = (id: string) => Math.max(0, playableUgc.findIndex((video) => video.id === id));

export const posterCandidates = (video: UgcVideo) => [
  ...(video.poster ? [video.poster] : []),
  `https://i.ytimg.com/vi/${video.id}/oar2.jpg`,
  `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`,
  `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
  `/ugc/${video.id}.jpg`,
];

export const embedUrl = (id: string, sound = false) =>
  sound
    ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=0&playsinline=1&rel=0`
    : `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&playsinline=1&modestbranding=1&rel=0`;

export const watchUrl = (id: string) => `https://www.youtube.com/shorts/${id}`;
