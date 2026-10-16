export type UgcVideo = {
  id: string;
  /** Neutral label. Titles are not invented when YouTube metadata is unavailable. */
  label: string;
  category: "Product demo" | "Testimonial-style" | "Hook variations";
  available: boolean;
};

/** All 23 supplied Shorts, in the original library order. */
export const ugcVideos: UgcVideo[] = [
  { id: "3-PuCBGkI_I", label: "AI UGC ad", category: "Product demo", available: true },
  { id: "E02ClYrTJdk", label: "AI UGC ad", category: "Hook variations", available: true },
  { id: "VIbDM1AbB4E", label: "AI UGC ad", category: "Testimonial-style", available: true },
  { id: "-2Tx14I5o1I", label: "AI UGC ad", category: "Product demo", available: true },
  { id: "xWf4itxXMDI", label: "AI UGC ad", category: "Hook variations", available: true },
  { id: "OyFjwMt-bf8", label: "AI UGC ad", category: "Testimonial-style", available: true },
  { id: "_Bkbsy8ncWw", label: "AI UGC ad", category: "Product demo", available: true },
  { id: "FH0YX9Wyrqc", label: "AI UGC ad", category: "Hook variations", available: true },
  { id: "f-iTa9hzn-A", label: "AI UGC ad", category: "Testimonial-style", available: true },
  { id: "zpKyVkxVsow", label: "AI UGC ad", category: "Product demo", available: true },
  { id: "NqfkH4wpMxo", label: "AI UGC ad", category: "Hook variations", available: true },
  { id: "UTOrBQsziPY", label: "AI UGC ad", category: "Testimonial-style", available: true },
  { id: "rBQX8lc8WaI", label: "AI UGC ad", category: "Product demo", available: true },
  { id: "_w1qyGfVQ4Q", label: "AI UGC ad", category: "Hook variations", available: true },
  { id: "ZMKo7548PEU", label: "AI UGC ad", category: "Testimonial-style", available: true },
  { id: "OvS8cCPnmIs", label: "AI UGC ad", category: "Product demo", available: true },
  { id: "tacQT-oEY0E", label: "AI UGC ad", category: "Hook variations", available: true },
  { id: "5rM5q2Gm2FM", label: "AI UGC ad", category: "Testimonial-style", available: true },
  { id: "Y_ndM-GtxFg", label: "AI UGC ad", category: "Product demo", available: true },
  { id: "cv4cZ3mrLpI", label: "AI UGC ad", category: "Hook variations", available: true },
  { id: "av2EYSU3Abc", label: "AI UGC ad", category: "Testimonial-style", available: false },
  { id: "Bc3G4jGC81w", label: "AI UGC ad", category: "Product demo", available: true },
  { id: "lWErNm0Gr5A", label: "AI UGC ad", category: "Hook variations", available: true },
];

export const featuredShortIds = [
  "OvS8cCPnmIs",
  "5rM5q2Gm2FM",
  "3-PuCBGkI_I",
  "VIbDM1AbB4E",
  "NqfkH4wpMxo",
];

export const homeShortCaptions = [
  "Skincare D2C",
  "Supplements",
  "Fashion drop",
  "Home & living",
  "Pet brand",
];

export function videoWatchUrl(id: string) {
  return `https://www.youtube.com/shorts/${id}`;
}

export function videoEmbedUrl(id: string) {
  return `https://www.youtube-nocookie.com/embed/${id}`;
}

export function videoPoster(id: string) {
  return `/ugc/${id}.jpg`;
}

/**
 * Playable UGC slide. `mp4` stays empty until a file is added — the repo and
 * Figma kit only include posters and YouTube ids. The slider plays the
 * YouTube Short when `mp4` is blank.
 */
export type UgcSlide = {
  id: string;
  caption: string;
  poster: string;
  mp4: string;
};

export const homeUgcSlides: UgcSlide[] = featuredShortIds.map((id, index) => ({
  id,
  caption: homeShortCaptions[index] || "AI UGC ad",
  poster: videoPoster(id),
  mp4: "",
}));

export const contentFanSlides: UgcSlide[] = [
  { id: "xWf4itxXMDI", caption: "AI UGC ad", poster: "/assets/shortytxwf4itxxmdi-061beb17.jpg", mp4: "" },
  { id: "VIbDM1AbB4E", caption: "AI UGC ad", poster: "/assets/shortytvibdm1abb4e-3a7edbb0.jpg", mp4: "" },
  { id: "E02ClYrTJdk", caption: "AI UGC ad", poster: "/assets/shortyte02clyrtjdk-59537514.jpg", mp4: "" },
  { id: "3-PuCBGkI_I", caption: "Featured sample", poster: "/assets/shortfeaturedyt3pucbgkii-49965680.jpg", mp4: "" },
  { id: "-2Tx14I5o1I", caption: "AI UGC ad", poster: "/assets/shortyt2tx14i5o1i-6ca41b33.jpg", mp4: "" },
  { id: "OyFjwMt-bf8", caption: "AI UGC ad", poster: "/assets/shortytoyfjwmtbf8-17bc5666.jpg", mp4: "" },
  { id: "_Bkbsy8ncWw", caption: "AI UGC ad", poster: "/assets/shortytbkbsy8ncww-180101b5.jpg", mp4: "" },
];
