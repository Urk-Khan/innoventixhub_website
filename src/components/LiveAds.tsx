import { site } from "@/config/site";

const ads = [
  { libraryId: "1097792249616698", src: "/ads/climb-ad-1-1097792249616698.jpg", width: 840, height: 1219 },
  { libraryId: "973808649103865", src: "/ads/climb-ad-2-973808649103865.jpg", width: 840, height: 1139 },
  { libraryId: "1148602907724747", src: "/ads/climb-ad-3-1148602907724747.jpg", width: 840, height: 1363 },
  { libraryId: "1618367073313113", src: "/ads/climb-ad-4-1618367073313113.jpg", width: 840, height: 1363 },
  { libraryId: "3043136386017473", src: "/ads/climb-ad-5-3043136386017473.jpg", width: 840, height: 1363 },
];

export default function LiveAds() {
  if (!site.showLiveAds) return null;
  const excluded: readonly string[] = site.excludedAdLibraryIds;
  const visible = ads.filter((ad) => !excluded.includes(ad.libraryId));
  return (
    <section className="section" aria-labelledby="live-ads-title">
      <div className="wrap">
        <p className="eyebrow">Live on Meta</p>
        <h2 id="live-ads-title" className="mt-4 text-3xl font-black md:text-4xl">Live ads we created</h2>
        <ul className="mt-8 flex gap-4 overflow-x-auto pb-2">
          {visible.map((ad) => (
            <li key={ad.libraryId} className="w-56 shrink-0">
              <img
                src={ad.src}
                alt={`Live Meta ad creative, library ID ${ad.libraryId}`}
                width={ad.width}
                height={ad.height}
                className="h-auto w-full rounded-2xl"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
