import { Link } from 'react-router-dom'
import ArticleLayout from '../../../components/ArticleLayout'

export default function WordpressPerformanceAudit() {
  return (
    <ArticleLayout title="WordPress Performance Audit Checklist: Lab Scores and Real-User Data" category="WordPress" categoryHref="/web-development/wordpress/">

      <p>A WordPress performance audit requires understanding two distinct types of data: lab measurements from tools like Lighthouse and PageSpeed Insights, which simulate page load in a controlled environment, and field data from real users captured in Google's Chrome User Experience Report (CrUX) and surfaced in Search Console. These two data sources tell different stories, and improving performance requires understanding what each one measures and where it falls short.</p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Lab data vs field data: understanding the difference</h2>
      <p>Lighthouse and PageSpeed Insights run in a simulated environment with a defined network speed and device profile. They produce scores and metric values that are consistent and reproducible, which makes them useful for comparing changes over time in a controlled way. However, because they simulate a single condition, they do not reflect the diversity of real users visiting your site on different devices, network connections, and geographic locations.</p>
      <p>Field data, also called real-user monitoring data, comes from actual Chrome browser sessions. Google collects this data through the Chrome User Experience Report (CrUX) and makes it available in Search Console under Core Web Vitals and in PageSpeed Insights when sufficient data exists. Field data represents the 75th percentile of real-user experience, meaning the threshold that 75 percent of your actual visitors meet or fall under. A page can score well in a lab test and still have poor field data if your real users are on slower connections or less powerful devices than the lab simulation models.</p>
      <p>Both data sources are useful. Lab data helps you isolate specific technical issues. Field data tells you whether your changes are actually improving the experience for the people using your site. For current documentation on how CrUX data is collected and surfaced, refer to web.dev and developers.google.com, as the tooling and interface may change. Our <Link to="/web-development/wordpress/" className="text-[\#3ECF9E] hover:underline font-medium">WordPress development services</Link> team can help interpret both data sources during a performance review.</p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Core Web Vitals explained</h2>
      <p>Google's Core Web Vitals are a set of metrics designed to measure the real-user experience of loading, interactivity, and visual stability. As of March 2024, the three metrics are:</p>

      <div className="bg-[\#F7F9FC] rounded-xl p-6 border border-gray-200 mt-4">
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>LCP (Largest Contentful Paint):</strong> Measures how long it takes for the largest visible content element (typically a hero image or heading) to load. A good LCP score in current Google guidance is 2.5 seconds or under at the 75th percentile.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>INP (Interaction to Next Paint):</strong> Replaced First Input Delay (FID) in March 2024. INP measures the responsiveness of the page to all user interactions throughout the page lifecycle, not just the first one. It captures the worst-case interaction delay at the 98th percentile of interactions during a session. Refer to web.dev/inp for current thresholds and guidance.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>CLS (Cumulative Layout Shift):</strong> Measures visual stability. A high CLS score means elements are moving around on the page as it loads, which can cause users to accidentally click on elements that moved under their cursor. Common causes include images without defined dimensions and late-loading font swaps.</li>
        </ul>
      </div>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">WordPress performance audit checklist</h2>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">Image optimization</h3>
      <p>Images are the single largest contributor to page weight on most WordPress sites. Check each of the following during an image audit.</p>

      <div className="bg-[\#F7F9FC] rounded-xl p-6 border border-gray-200 mt-4">
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Format:</strong> Serve images in WebP format. WebP provides smaller file sizes than JPEG or PNG at equivalent visual quality. WordPress 5.8 and later includes WebP support.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Dimensions:</strong> Images should not be larger than the maximum size at which they are displayed. A 3000px wide image displayed at 800px wide is sending unnecessary bytes to the browser.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Lazy loading:</strong> Images below the fold should have the loading="lazy" attribute. The hero or LCP image should not be lazy loaded; it should load as a priority.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Descriptive alt text:</strong> Each image should have a meaningful alt attribute both for accessibility and to communicate the image content to search engines.</li>
        </ul>
      </div>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">JavaScript audit</h3>
      <p>WordPress sites often accumulate JavaScript from themes, plugins, and third-party scripts. Each script adds to the work the browser must do before the page becomes interactive.</p>

      <div className="bg-[\#F7F9FC] rounded-xl p-6 border border-gray-200 mt-4">
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Unused JavaScript:</strong> Lighthouse identifies JavaScript that is loaded but not executed on the current page. Review and remove or conditionally load scripts that are not needed on every page.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Render-blocking scripts:</strong> Scripts loaded in the document head without async or defer attributes block rendering until they complete. Audit which scripts are render-blocking and apply appropriate loading attributes.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Third-party script load strategy:</strong> Analytics, chat widgets, marketing tags, and social sharing scripts are common third-party performance costs. Load non-critical third-party scripts after the page is interactive, not in the head.</li>
        </ul>
      </div>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">CSS audit</h3>
      <p>Unused CSS adds weight to the page and can contribute to render-blocking behaviour. Identify CSS that is loaded globally but only applies to specific pages or elements. Critical CSS for above-the-fold content can be inlined in the document head to allow the browser to render the visible page without waiting for the full stylesheet.</p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">Caching</h3>
      <p>Caching reduces the work the server must do for repeat visitors and the bandwidth consumed on each page load. Audit the following caching layers.</p>

      <div className="bg-[\#F7F9FC] rounded-xl p-6 border border-gray-200 mt-4">
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Browser caching headers:</strong> Static assets (images, CSS, JavaScript) should be served with Cache-Control headers that tell browsers how long to cache them locally. Long cache lifetimes with versioned filenames are the standard approach.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Server-side page caching:</strong> WordPress generates pages dynamically on each request by default. A caching plugin or managed hosting platform that serves pre-built static HTML significantly reduces Time to First Byte (TTFB) for repeat requests.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>CDN coverage:</strong> A content delivery network serves static assets from a location geographically closer to each visitor. If your hosting plan does not include a CDN, this is a meaningful performance improvement to evaluate.</li>
        </ul>
      </div>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">Hosting infrastructure</h3>
      <p>Hosting has a direct impact on TTFB, which affects LCP and overall page load time. Shared hosting that allocates limited server resources among many sites will produce higher and less consistent TTFB than managed WordPress hosting with dedicated resources and server-level caching. If Lighthouse scores are acceptable but field data shows consistently poor performance, hosting infrastructure is a logical next area to investigate.</p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">Database optimization</h3>

      <div className="bg-[\#F7F9FC] rounded-xl p-6 border border-gray-200 mt-4">
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Transients cleanup:</strong> WordPress uses database transients to cache temporary data. Expired transients accumulate over time and add unnecessary overhead to database queries.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Post revision limits:</strong> WordPress saves a revision every time a post is saved. On a mature site with high post volume, revision tables grow large. Setting a reasonable post revision limit in wp-config.php reduces database bloat.</li>
        </ul>
      </div>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">Plugin audit</h3>
      <p>Every active plugin has the potential to load additional JavaScript, CSS, or database queries. Audit your active plugins with performance impact in mind: deactivate and remove any that are not actively used, and evaluate whether heavy plugins can be replaced with lighter alternatives that serve the same function with less overhead.</p>

      <p>If a performance audit surfaces issues requiring development work, our <Link to="/web-development/" className="text-[\#3ECF9E] hover:underline font-medium">web development services</Link> team can scope the remediation. For sites being rebuilt rather than optimised in place, review our <Link to="/resources/website-migration-seo-checklist/" className="text-[\#3ECF9E] hover:underline font-medium">website migration SEO checklist</Link> before launch.</p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Frequently asked questions</h2>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">Why does my Lighthouse score look good but my Search Console Core Web Vitals show "poor"?</h3>
      <p>Lighthouse runs in a controlled lab environment on a defined network and device profile. Your real visitors may be on slower connections, lower-powered devices, or in regions further from your server than the lab simulation models. Core Web Vitals in Search Console reflect the 75th percentile of actual user sessions, which can be meaningfully different from lab conditions. Both data sources are useful, but field data is what Google uses for search ranking signals. When the two diverge, prioritise understanding your real-user conditions.</p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">How much does hosting affect WordPress performance?</h3>
      <p>Hosting affects Time to First Byte (TTFB) directly, which in turn affects LCP. Shared hosting with constrained server resources will produce higher and more variable TTFB than managed WordPress hosting with server-level caching and dedicated resources. If you have already optimised images, reduced plugin overhead, and implemented caching but TTFB remains high, hosting is the next area to review.</p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">Can plugins significantly slow down a WordPress site?</h3>
      <p>Yes. Each plugin can load additional JavaScript, CSS, PHP processing, and database queries. The cumulative effect of many plugins, particularly poorly coded ones, can be significant. A plugin audit comparing page load before and after deactivating specific plugins is a practical way to identify which plugins are contributing most to performance overhead. Tools like Query Monitor can help identify which plugins are generating the most database queries per page load.</p>

    </ArticleLayout>
  )
}
