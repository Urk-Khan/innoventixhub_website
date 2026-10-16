import JsonLd from "@/components/JsonLd";
import LiveAds from "@/components/LiveAds";
import ProcessTimeline from "@/components/ProcessTimeline";
import { UgcSlider, WorkGallery } from "@/components/VideoGallery";
import { BookButton, Breadcrumbs, CardGrid, CaseRail, Comparison, CtaBand, FaqSection, LogoMarquee, OfferGrid, SectionIntro, Testimonials, ToolGrid, VoiceButton } from "@/components/Sections";
import { site } from "@/config/site";
import { contentFanSlides, ugcVideos, videoEmbedUrl, videoPoster } from "@/content/videos";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, graph, serviceSchema, videoSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "AI Content Creation Agency for D2C | Innoventix Hub",
  description: "AI UGC ads plus short- and long-form video editing that make D2C brands scroll-stopping. Fast turnaround, built for paid social.",
  path: "/services/content-creation",
});

const faqs = [
  { q: "What is AI UGC?", a: "AI UGC is creator-style video, the kind that looks like a real person filmed it on their phone, made with AI creators, voices and scenes instead of hired actors. It looks native to TikTok, Reels and Shorts, so it works well as a paid social ad. You get the feel of UGC without the cost and wait of booking creators." },
  { q: "Will AI UGC ads look fake?", a: "Not when they're done right. We script for natural speech, match the creator to your audience, and edit with real captions, pacing and sound so the ads fit the feed. You approve the creative brief and scripts before production, and our Brief-Match Guarantee covers any batch that misses that brief." },
  { q: "How long does a video take?", a: "Most videos take 5–10 business days, from approved script to final edit. On the Monthly UGC Pack, we deliver in batches across the month, so fresh creatives keep coming." },
  { q: "Which platforms and formats do you deliver?", a: "We deliver ads ready to run on TikTok, Instagram Reels, Facebook/Meta and YouTube Shorts. Every video is delivered in 9:16, 1:1, 4:5 and 16:9 as standard." },
  { q: "How many variations do I get?", a: "The Monthly UGC Pack, starting from $1,500/month, includes 8–10 videos per month with 3 hook variations each. That gives you 24–30 hooks to A/B test. For larger volumes, we'll put together a custom quote on your free consultation." },
  { q: "Do I need to send products or footage?", a: "No. AI UGC means no shipping products and no filming. We work from your product images, website and brief. If you have existing footage or product shots, we can use them to make the ads more accurate." },
  { q: "Can you use my brand voice or avatar?", a: "Yes. We build a consistent AI creator and voice that match your brand's tone, and we can reuse them across every batch so your ads stay recognizable. Your brand guidelines go into the creative brief we agree on together." },
  { q: "Do you also run the ads?", a: "Our focus is the creative: research, scripts, AI UGC production and edited ads ready to run. You or your media buyer launch them in your ad account. Ask about our wider services on the free consultation if you need more support." },
  { q: "What types of videos do you edit?", a: "We edit short-form clips (Reels, TikToks, YouTube Shorts) and long-form content like YouTube videos, podcasts, tutorials, interviews and brand films. Every edit includes captions, color grading and sound polish." },
  { q: "How long does long-form editing take?", a: "Most long-form projects take 2–3 weeks, from brief to final delivery. The process is brief, first cut, revisions and delivery, so you see the edit before it's final." },
  { q: "Can you turn my long videos into short clips?", a: "Yes. We repurpose your long-form videos into short, hook-first clips for TikTok, Reels and Shorts, so one recording feeds every channel." },
  { q: "Do you design YouTube thumbnails?", a: "Yes. We design brand-consistent thumbnails optimized for YouTube and can create variations to A/B test." },
];

const heroShorts = [
  { src: "/assets/shortytxwf4itxxmdi-061beb17.jpg", w: 176, h: 313 },
  { src: "/assets/shortytvibdm1abb4e-3a7edbb0.jpg", w: 208, h: 370 },
  { src: "/assets/shortyte02clyrtjdk-59537514.jpg", w: 240, h: 427 },
  { src: "/assets/shortfeaturedyt3pucbgkii-49965680.jpg", w: 290, h: 516, featured: true },
  { src: "/assets/shortyt2tx14i5o1i-6ca41b33.jpg", w: 240, h: 427 },
  { src: "/assets/shortytoyfjwmtbf8-17bc5666.jpg", w: 208, h: 370 },
  { src: "/assets/shortytbkbsy8ncww-180101b5.jpg", w: 176, h: 313 },
];

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Content Creation", path: "/services/content-creation" },
];

export default function ContentPage() {
  return (
    <main id="main">
      <JsonLd
        data={graph(
          breadcrumbSchema(crumbs),
          serviceSchema({
            name: "AI content creation",
            serviceType: "AI content creation agency",
            description: "AI UGC ads plus short- and long-form video editing for D2C brands.",
            path: "/services/content-creation",
            catalog: [
              { name: "AI UGC Ads", description: "AI creators, scripts and hooks built to win on paid social." },
              { name: "Short-Form Editing", description: "Reels, TikToks and Shorts edited for retention." },
              { name: "Long-Form Editing", description: "YouTube, podcast and brand video editing, repurposed into clips." },
            ],
          }),
          faqSchema(faqs),
          videoSchema(
            ugcVideos.filter((video) => video.available).map((video) => ({
              id: video.id,
              name: "AI UGC sample",
              thumbnail: videoPoster(video.id),
              embed: videoEmbedUrl(video.id),
            })),
          ),
        )}
      />
      <section className="hero-stage overflow-hidden bg-navy">
        <img src="/assets/glowcopper-959c59f0.svg" alt="" className="glow-copper" />
        <div className="relative z-10 px-5 pb-16 pt-28 text-center lg:pt-[200px]">
          <div className="mx-auto flex max-w-[1000px] flex-col items-center">
            <Breadcrumbs items={crumbs.map((item) => ({ name: item.name, href: item.path }))} />
            <p className="eyebrow mt-6">Content creation · AI UGC · Short-form · Long-form</p>
            <h1 className="mt-7 text-[34px] font-bold leading-[1.04] text-white sm:text-5xl lg:text-[64px] lg:tracking-[-0.64px]">Stop Guessing. Start Converting.<br />AI UGC Ads and Video That Sell.</h1>
            <p className="mt-7 max-w-[680px] text-[18px] text-pearl/75 sm:text-[20px]">Scroll-stopping AI UGC ads, plus short- and long-form editing for D2C brands on TikTok, Meta and YouTube. More hooks, faster output, one content team.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <BookButton />
              <VoiceButton ghost />
            </div>
            <p className="mt-5 text-[13px] text-mist">Home / Services / Content Creation · 20+ live samples below</p>
          </div>
          <UgcSlider slides={contentFanSlides} label="AI UGC sample ads" />
          <p className="mx-auto mt-6 w-fit rounded-full bg-amber px-3.5 py-2 text-[13px] font-bold text-navy">● Featured sample · tap to watch</p>
        </div>
      </section>
      <LogoMarquee label="Trusted by D2C brands across the US, UK & EU" />
      <LiveAds />
      <CardGrid
        eyebrow="What we create"
        title="One team for every video your brand needs"
        items={[
          { icon: "▶", title: "AI UGC Ads", badge: "Main focus", body: "AI creators, scripts and hooks built to win on paid social. 8–10 ads a month with 3 hooks each.", href: "#ai-ugc", link: "See AI UGC" },
          { icon: "✂", title: "Short-Form Editing", body: "Reels, TikToks and Shorts edited for retention: hooks, captions, pacing and sound.", href: "#short-form", link: "See short-form" },
          { icon: "Film", title: "Long-Form Editing", body: "YouTube videos, podcasts, tutorials and interviews with story, pacing and polish, repurposed into clips.", href: "#long-form", link: "See long-form" },
        ]}
      />
      <CardGrid
        tone="deep"
        eyebrow="The problem"
        title="Sound familiar?"
        items={[
          { icon: "$!", title: "Spending too much on video production?", body: "Studios, actors, gear and revisions add up before you've even tested what works." },
          { icon: "◎", title: "Views but no buyers?", body: "The hook, script and format decide conversions, not view counts." },
          { icon: "⏱", title: "Can't make creatives fast enough?", body: "One good ad isn't enough. Paid social needs dozens of variations every week." },
        ]}
      />
      <CardGrid
        id="ai-ugc"
        eyebrow="AI UGC ads"
        title="Everything you need to test and scale creative"
        columns={6}
        items={[
          "AI character creation & customization",
          "AI product demo videos",
          "Professional editing & post-production",
          "Multiple hook/variation sets for A/B testing",
          "Platform-ready formats (9:16, 1:1, 4:5, 16:9)",
          "Fast turnaround (5–10 business days per video)",
        ].map((title) => ({ icon: "✓", title, body: "" }))}
      />
      <section id="work" className="section scroll-mt-28 bg-navy-deep">
        <div className="wrap">
          <SectionIntro eyebrow="Our work" title="Real AI UGC ads we've made" copy="Tap any video to watch." />
          <WorkGallery />
        </div>
      </section>
      <section id="short-form" className="section scroll-mt-28">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionIntro align="left" eyebrow="Short-form editing" title="Short-form that holds attention" copy="Reels, TikToks and YouTube Shorts edited for retention, so every clip earns its next second." />
            <ul className="mt-6 space-y-2 text-sm text-pearl/85">
              {["Hook-first edits with pacing built for the feed", "Captions and subtitles (burned-in, SRT, multilingual)", "Color grading and a consistent visual style", "Sound design, music and talking-head cleanup", "Clips cut from your long-form content"].map((item) => <li key={item}>✓ {item}</li>)}
            </ul>
            <p className="mt-4 text-sm text-mist">Formats: 9:16, 1:1 and 4:5. Delivered on a weekly schedule agreed on the call.</p>
            <div className="mt-6"><BookButton /></div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
            {heroShorts.slice(0, 4).map((short) => (
              <a key={short.src} href="#work" className="phone-frame relative block aspect-[9/16] overflow-hidden">
                <img src={short.src} alt="" className="h-full w-full object-cover" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b1a2e] to-transparent p-3 text-xs font-bold">Sample edit</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section id="long-form" className="section scroll-mt-28 bg-navy-deep">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionIntro align="left" eyebrow="Long-form editing" title="Long-form with story, pacing and polish" copy="YouTube videos, podcasts, tutorials, interviews and brand films, edited so viewers stay to the end and repurposed so one video feeds every channel." />
            <ul className="mt-6 space-y-2 text-sm text-pearl/85">
              {["Podcasts, tutorials, interviews and documentary edits", "Color grading and a consistent visual treatment", "Captions and subtitles (SRT, burned-in, multilingual)", "YouTube-optimized thumbnail design", "Talking-head cleanup", "Short clips repurposed from every long video"].map((item) => <li key={item}>✓ {item}</li>)}
            </ul>
            <p className="mt-4 text-sm text-mist">16:9 for YouTube and web, plus vertical cutdowns. 2–3 weeks. Brief → First Cut → Revisions → Delivery.</p>
            <div className="mt-6"><BookButton /></div>
          </div>
          <div className="space-y-3">
            {heroShorts.slice(4, 6).map((short) => (
              <div key={short.src} className="glass relative aspect-video overflow-hidden rounded-[20px]">
                <img src={short.src} alt="" className="h-full w-full object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-amber px-2 py-1 text-[11px] font-bold text-navy">SAMPLE</span>
              </div>
            ))}
            <div className="grid grid-cols-4 gap-2">
              {heroShorts.slice(0, 4).map((short) => (
                <img key={short.src} src={short.src} alt="" className="aspect-video rounded-lg object-cover" />
              ))}
            </div>
          </div>
        </div>
      </section>
      <CaseRail eyebrow="Results" title="Results > Promises" copy="Real numbers from brands we've worked with, across UGC, short-form and long-form." tags={["AI UGC", "Short-form", "Long-form"]} />
      <Comparison
        title="See the difference"
        subtitle="How one AI-powered content team compares with building it in-house or hiring a typical agency."
        columns={["Innoventix Hub", "In-house team", "Typical agencies"]}
        rows={[
          { label: "Ads ready in days, not weeks", cells: ["yes", "no", "no"] },
          { label: "UGC ads + short- and long-form editing in one team", cells: ["yes", "no", "no"] },
          { label: "No actors, studios or shipping products", cells: ["yes", "no", "no"] },
          { label: "Cost per creative", cells: ["yes", "no", "no"] },
          { label: "Built for paid-social testing", cells: ["yes", "yes", "yes"] },
          { label: "Scales with your ad spend", cells: ["yes", "no", "yes"] },
        ]}
      />
      <ProcessTimeline
        title={<>A Simple System To Find Your <span className="text-amber">Winning Ads</span></>}
        steps={[
          { title: "Discovery Call", body: "We learn your product, audience and offer, and what's working in your ads today." },
          { title: "Strategy & Scripts", body: "We turn the research into angles, hooks and scripts built to close your funnel gaps." },
          { title: "Production", body: "For UGC we create your AI creator, voice and scenes. For editing we cut your footage into a first edit." },
          { title: "Edit & Variations", body: "Pro editing, captions and sound, plus hook versions and repurposed clips ready to test." },
          { title: "Review & Delivery", body: "You review, we polish, and you get files formatted for TikTok, Reels and YouTube." },
          { title: "Scale & Optimize", body: "We double down on winners, cut losers fast and keep fresh creatives coming." },
        ]}
      />
      <ToolGrid eyebrow="Our AI stack" title="The tools behind the ads" tools={["Higgsfield", "Kling", "Veo", "ElevenLabs", "GPT", "Claude", "Nano Banana"]} />
      <Testimonials />
      <OfferGrid
        eyebrow="Pricing"
        title="Simple starting points. Custom quotes."
        copy="Every brand is different, so we confirm scope on a free call. Here’s where most brands start."
        offers={[
          { featured: true, name: "Monthly UGC Pack", blurb: "AI UGC ads built to find winners on paid social.", price: "$1,500", unit: "/month", items: ["Full creative research", "Scripting: angles, hooks & scripts", "AI UGC generation", "8–10 videos/month, 3 hook variations", "Final edited ads, ready to run", "Brief-Match Guarantee"] },
          { name: "Short-Form Editing", blurb: "Reels, TikToks and Shorts edited for retention.", price: "$2,000", unit: "/month", items: ["Hook-first edits & pacing", "Captions & subtitles", "Color grading & sound design", "Clips cut from your long-form", "Weekly delivery schedule"] },
          { name: "Long-Form Editing", blurb: "YouTube, podcast, tutorial and brand video editing.", price: "$2,000", unit: "/project", items: ["Story-led long-form edit", "Color grading & captions", "YouTube thumbnail design", "Talking-head cleanup", "Repurposed short clips", "2–3 weeks per project"] },
        ]}
        note={(
          <div className="glass mt-6 rounded-[20px] border-dashed border-amber/40 p-6 text-left text-sm">
            <p className="font-bold text-amber">Brief-Match Guarantee · Monthly UGC Pack</p>
            <p className="mt-2 text-pearl/85">If your first batch doesn’t meet the creative brief we agree on together, we&apos;ll redo it free. Still not happy after the revision? Full refund within 30 days.</p>
            <p className="mt-2 text-mist">Refund applies to brief match, not ad performance (ROAS depends on your offer, targeting and spend). Claims within 30 days of first delivery. Refunded videos may not be used.</p>
            <p className="mt-4 text-mist">Custom quote for larger volume or bundles. Every quote is confirmed on a free consultation.</p>
          </div>
        )}
      />
      <FaqSection items={faqs} />
      <CtaBand
        title="Ready to turn views into buyers?"
        copy="Book a free 15-minute strategy call. We'll go through your funnel and show you where AI UGC and smarter editing can move the needle."
      />
    </main>
  );
}
