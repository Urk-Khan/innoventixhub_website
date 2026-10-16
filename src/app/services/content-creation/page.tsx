import JsonLd from "@/components/JsonLd";
import LiveAds from "@/components/LiveAds";
import ProcessTimeline from "@/components/ProcessTimeline";
import { WorkGallery } from "@/components/VideoGallery";
import { BookButton, Breadcrumbs, Comparison, CtaBand, FaqList, LogoMarquee, SectionIntro, Testimonials, VoiceButton } from "@/components/Sections";
import { site } from "@/config/site";
import { ugcVideos, videoEmbedUrl, videoPoster } from "@/content/videos";
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

function ShortsFan() {
  return (
    <div className="mx-auto mt-4 flex h-[230px] items-end justify-center overflow-hidden sm:h-[360px] lg:mt-12 lg:h-[540px]" aria-label="AI UGC sample ads">
      <div className="flex origin-bottom scale-[0.42] items-end gap-5 sm:scale-[0.66] lg:scale-100">
      {heroShorts.map((short) => (
        <a key={short.src} href="#work" className={`relative shrink-0 overflow-hidden rounded-[20px] ${short.featured ? "border-[3px] border-amber shadow-[0_0_60px_rgba(255,181,71,0.5)]" : "border border-white/12"}`} style={{ width: short.w, height: short.h }}>
          <img src={short.src} alt="" className="h-full w-full object-cover" />
          <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-[#0b1a2e]/90" />
          <span className="absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/20 backdrop-blur-sm" style={{ width: short.featured ? 64 : 42, height: short.featured ? 64 : 42 }}>
            <span className="ml-1 border-y-[7px] border-l-[12px] border-y-transparent border-l-white" />
          </span>
        </a>
      ))}
      </div>
    </div>
  );
}

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
          <ShortsFan />
          <p className="mx-auto mt-6 w-fit rounded-full bg-amber px-3.5 py-2 text-[13px] font-bold text-navy">● Featured sample · tap to watch</p>
        </div>
      </section>
      <LogoMarquee label="Trusted by D2C brands across the US, UK & EU" />
      <LiveAds />
      <section className="section">
        <div className="wrap">
          <SectionIntro eyebrow="What we create" title="One team for every video your brand needs" />
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["AI UGC Ads", "Main focus", "AI creators, scripts and hooks built to win on paid social. 8–10 ads a month with 3 hooks each.", "#ai-ugc", "See AI UGC"],
              ["Short-Form Editing", "", "Reels, TikToks and Shorts edited for retention: hooks, captions, pacing and sound.", "#short-form", "See short-form"],
              ["Long-Form Editing", "", "YouTube videos, podcasts, tutorials and interviews with story, pacing and polish, repurposed into clips.", "#long-form", "See long-form"],
            ].map(([title, badge, body, href, link]) => (
              <li key={title} className="glass rounded-3xl p-6">
                {badge ? <p className="text-xs font-bold tracking-wide text-amber">{badge}</p> : null}
                <h3 className="mt-2 text-xl font-black">{title}</h3>
                <p className="mt-2 text-sm text-cream/75">{body}</p>
                <a href={href} className="mt-4 inline-block text-sm font-bold text-amber">{link} →</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section bg-navy-soft/30">
        <div className="wrap">
          <h2 className="text-3xl font-black">Sound familiar?</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Spending too much on video production?", "Studios, actors, gear and revisions add up before you've even tested what works."],
              ["Views but no buyers?", "The hook, script and format decide conversions, not view counts."],
              ["Can't make creatives fast enough?", "One good ad isn't enough. Paid social needs dozens of variations every week."],
            ].map(([title, body]) => (
              <li key={title} className="glass rounded-3xl p-6">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-cream/75">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="ai-ugc" className="section scroll-mt-28">
        <div className="wrap">
          <SectionIntro eyebrow="AI UGC ads" title="Everything you need to test and scale creative" />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "AI character creation & customization",
              "AI product demo videos",
              "Professional editing & post-production",
              "Multiple hook/variation sets for A/B testing",
              "Platform-ready formats (9:16, 1:1, 4:5, 16:9)",
              "Fast turnaround (5–10 business days per video)",
            ].map((item) => (
              <li key={item} className="glass rounded-2xl p-4 text-sm">{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <section id="work" className="section scroll-mt-28 bg-[#091018]">
        <div className="wrap">
          <h2 className="text-3xl font-black">Real AI UGC ads we've made</h2>
          <p className="mt-2 text-cream/75">Tap any video to watch.</p>
          <WorkGallery />
        </div>
      </section>
      <section id="short-form" className="section scroll-mt-28">
        <div className="wrap grid gap-8 lg:grid-cols-2">
          <div>
            <SectionIntro eyebrow="Short-form editing" title="Short-form that holds attention" copy="Reels, TikToks and YouTube Shorts edited for retention, so every clip earns its next second." />
            <ul className="mt-6 space-y-2 text-sm">
              {["Hook-first edits with pacing built for the feed", "Captions and subtitles (burned-in, SRT, multilingual)", "Color grading and a consistent visual style", "Sound design, music and talking-head cleanup (denoise, color correction)", "Clips cut from your long-form content"].map((item) => <li key={item}>✓ {item}</li>)}
            </ul>
            <p className="mt-4 text-sm text-mist/80">Formats: 9:16 for TikTok, Reels and Shorts, with 1:1 and 4:5 for feed placements. Turnaround: delivered on a weekly schedule agreed on the call.</p>
            <div className="mt-6"><BookButton /></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="glass flex aspect-[9/16] items-end rounded-2xl p-3 text-xs text-mist">Sample: replace with client short-form edit</div>
            ))}
          </div>
        </div>
      </section>
      <section id="long-form" className="section scroll-mt-28 bg-navy/30">
        <div className="wrap grid gap-8 lg:grid-cols-2">
          <div>
            <SectionIntro eyebrow="Long-form editing" title="Long-form with story, pacing and polish" copy="YouTube videos, podcasts, tutorials, interviews and brand films, edited so viewers stay to the end and repurposed so one video feeds every channel." />
            <ul className="mt-6 space-y-2 text-sm">
              {["Long-form editing for podcasts, tutorials, interviews and documentary content", "Color grading and consistent visual treatment", "Captions and subtitles (SRT, burned-in, multilingual)", "YouTube-optimized, brand-consistent thumbnail design", "Talking-head cleanup (denoise, background removal, color correction)", "Short clips repurposed from every long video"].map((item) => <li key={item}>✓ {item}</li>)}
            </ul>
            <p className="mt-4 text-sm text-mist/80">Formats: 16:9 for YouTube and web, plus vertical cutdowns. Turnaround: 2–3 weeks per project. Process: Brief → First Cut → Revisions → Delivery.</p>
            <div className="mt-6"><BookButton /></div>
          </div>
          <div className="space-y-3">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="glass flex aspect-video items-end rounded-2xl p-4 text-xs text-mist">Sample: replace with client long-form edit</div>
            ))}
            <div className="glass rounded-2xl p-4 text-xs text-mist">Thumbnail strip slot</div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="text-3xl font-black">Results &gt; Promises</h2>
          <p className="mt-2 text-cream/75">Real numbers from brands we've worked with, across UGC, short-form and long-form.</p>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {["AI UGC", "Short-form", "Long-form"].map((tag) => (
              <li key={tag} className="rounded-3xl bg-cream p-5 text-ink">
                <p className="text-xs font-bold text-navy">SAMPLE</p>
                <h3 className="mt-3 text-2xl font-black">[STAT HEADLINE from screenshot]</h3>
                <p className="mt-2 text-sm">[What we did, 1–2 lines]</p>
                <p className="mt-3 inline-block rounded-full bg-amber px-3 py-1 text-xs font-bold">{tag}</p>
                <div className="mt-4 rounded-xl bg-navy/10 p-6 text-xs text-navy/70">Ads manager screenshot</div>
                <a href={site.calendlyUrl} className="mt-4 inline-block text-sm font-bold">Book A Free Consultation</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
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
      <section className="section pt-0">
        <div className="wrap">
          <h2 className="text-2xl font-black">Our AI stack</h2>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm">
            {["Higgsfield", "Kling", "Veo", "ElevenLabs", "GPT", "Claude", "Nano Banana"].map((tool) => (
              <li key={tool} className="glass rounded-full px-4 py-2">{tool}</li>
            ))}
          </ul>
        </div>
      </section>
      <Testimonials />
      <section className="section pt-0">
        <div className="wrap">
          <h2 className="text-3xl font-black">Simple starting points. Custom quotes.</h2>
          <p className="mt-2 text-cream/75">Every brand is different, so we confirm scope on a free call. Here’s where most brands start.</p>
          <ul className="mt-8 grid gap-4 lg:grid-cols-3">
            <li className="glass-strong rounded-3xl p-6">
              <h3 className="text-xl font-black">Monthly UGC Pack</h3>
              <p className="text-sm text-cream/70">AI UGC ads built to find winners on paid social.</p>
              <p className="mt-4 text-3xl font-black">$1,500<span className="text-base font-medium">/month</span></p>
              <ul className="mt-4 space-y-1 text-sm">{["Full creative research", "Scripting: angles, hooks & scripts", "AI UGC generation", "8–10 videos/month, 3 hook variations", "Final edited ads, ready to run", "Brief-Match Guarantee"].map((item) => <li key={item}>✓ {item}</li>)}</ul>
              <div className="mt-4"><BookButton /></div>
            </li>
            <li className="glass rounded-3xl p-6">
              <h3 className="text-xl font-black">Short-Form Editing</h3>
              <p className="text-sm text-cream/70">Reels, TikToks and Shorts edited for retention.</p>
              <p className="mt-4 text-3xl font-black">$2,000<span className="text-base font-medium">/month</span></p>
              <ul className="mt-4 space-y-1 text-sm">{["Hook-first edits & pacing", "Captions & subtitles", "Color grading & sound design", "Clips cut from your long-form", "Weekly delivery schedule"].map((item) => <li key={item}>✓ {item}</li>)}</ul>
              <div className="mt-4"><BookButton /></div>
            </li>
            <li className="glass rounded-3xl p-6">
              <h3 className="text-xl font-black">Long-Form Editing</h3>
              <p className="text-sm text-cream/70">YouTube, podcast, tutorial and brand video editing.</p>
              <p className="mt-4 text-3xl font-black">$2,000<span className="text-base font-medium">/project</span></p>
              <ul className="mt-4 space-y-1 text-sm">{["Story-led long-form edit", "Color grading & captions", "YouTube thumbnail design", "Talking-head cleanup", "Repurposed short clips", "2–3 weeks per project"].map((item) => <li key={item}>✓ {item}</li>)}</ul>
              <div className="mt-4"><BookButton /></div>
            </li>
          </ul>
          <div className="glass mt-6 rounded-3xl p-6 text-sm">
            <p className="font-bold text-amber">Brief-Match Guarantee · Monthly UGC Pack</p>
            <p className="mt-2">If your first batch doesn’t meet the creative brief we agree on together, we'll redo it free. Still not happy after the revision? Full refund within 30 days.</p>
            <p className="mt-2 text-mist/70">Refund applies to brief match, not ad performance (ROAS depends on your offer, targeting and spend). Claims within 30 days of first delivery. Refunded videos may not be used.</p>
          </div>
          <p className="mt-4 text-sm text-mist/80">Custom quote for larger volume or bundles. Every quote is confirmed on a free consultation.</p>
        </div>
      </section>
      <section className="section pt-0">
        <div className="wrap">
          <h2 className="text-3xl font-black">FAQ</h2>
          <div className="mt-6"><FaqList items={faqs} /></div>
        </div>
      </section>
      <CtaBand
        title="Ready to turn views into buyers?"
        copy="Book a free 15-minute strategy call. We'll go through your funnel and show you where AI UGC and smarter editing can move the needle."
      />
    </main>
  );
}
