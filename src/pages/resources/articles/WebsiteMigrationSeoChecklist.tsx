import { Link } from 'react-router-dom'
import ArticleLayout from '../../../components/ArticleLayout'

export default function WebsiteMigrationSeoChecklist() {
  return (
    <ArticleLayout title="Website Migration SEO Checklist: Protecting Search Visibility During a Rebuild" category="WordPress" categoryHref="/web-development/wordpress/">

      <p>Website migrations are one of the most common causes of sudden organic traffic loss. URL changes, missing redirects, canonical errors, and indexation problems can erase months of search visibility within days of launch if not handled carefully. This checklist, informed by Google's publicly available documentation on site migrations, covers the steps required before, during, and after a rebuild to protect your rankings.</p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Why migrations are high-risk for organic search</h2>
      <p>Search engines index pages at specific URLs. When you rebuild a website, URLs frequently change: directory structures are reorganised, URL slugs are reformatted for cleaner paths, or the entire domain changes. From a search engine's perspective, a changed URL is a new page with no history. The links, authority, and indexation signals that the old URL accumulated do not automatically transfer to the new URL. The mechanism for transferring that signal is a 301 permanent redirect, and it must be implemented correctly for every changed URL before the new site goes live.</p>
      <p>Beyond redirects, migrations introduce risk through canonical tag errors, robots.txt misconfigurations that accidentally block crawlers, broken internal links, and XML sitemap issues. Each of these problems is preventable with systematic pre-launch checks.</p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Pre-migration checklist</h2>

      <div className="bg-[\#F7F9FC] rounded-xl p-6 border border-gray-200 mt-4">
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Crawl the current site:</strong> Use a crawl tool such as Screaming Frog or Sitebulb to produce a complete URL inventory of the live site. This is your baseline. Every URL in this inventory needs to be accounted for in the new site or mapped to a redirect.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Export traffic and rankings by page:</strong> Export performance data from Google Search Console at the page level. Identify your top-performing pages by impressions and clicks. These pages require the most careful treatment during migration.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Document current canonical tags:</strong> Record the canonical tag on each page. The new site must maintain correct canonicals on every equivalent page, particularly for paginated content and filtered views.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Map every URL change:</strong> Create a spreadsheet with two columns: old URL and new URL. Every URL that changes needs a row. Every URL that is being removed needs a row with a note about where it should redirect (typically the most relevant equivalent page, or the home page as a last resort).</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Plan redirect logic for URL patterns:</strong> If your URL structure is changing systematically (for example, all blog posts moving from /blog/post-slug to /resources/post-slug), write redirect rules that handle the pattern rather than individual redirects for each URL.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Check for hreflang:</strong> If your site serves content in multiple languages or regions with hreflang tags, document all existing hreflang relationships so they can be replicated correctly on the new site.</li>
        </ul>
      </div>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Technical checklist for migration launch</h2>
      <p>The technical implementation of the migration is where most problems occur. Work through this checklist in staging before launch, and verify it again immediately after the new site goes live.</p>

      <div className="bg-[\#F7F9FC] rounded-xl p-6 border border-gray-200 mt-4">
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Implement all 301 redirects before launch:</strong> Every changed or removed URL should return a 301 status code pointing to the correct new URL. A 301 is a permanent redirect that signals to search engines that the content has moved and the new URL should receive the indexation signals of the old one.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Verify redirect implementation:</strong> Use a tool to crawl the redirect mapping and confirm each old URL returns a 301 to the correct destination. Check for redirect chains (A redirects to B redirects to C) and collapse them to single-hop redirects where possible.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Set correct canonical tags on all new URLs:</strong> Every page should have a self-referencing canonical tag pointing to its own URL. Pages with duplicate or near-duplicate content need canonicals pointing to the preferred version.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Verify robots.txt allows crawling:</strong> The robots.txt on the new site must allow Googlebot to crawl your content. A common staging site practice is to block all crawlers in robots.txt; this must be updated before launch. Confirm by fetching the robots.txt directly and reading the directives.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Update and submit the XML sitemap:</strong> Generate a new XML sitemap reflecting the new URL structure and submit it to Google Search Console immediately after launch. The sitemap helps Google discover new URLs faster.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Check for broken internal links:</strong> Crawl the new site and identify any internal links pointing to old URLs that are not being redirected, or to pages returning errors. Fix these at the source rather than relying on redirects for internal navigation.</li>
        </ul>
      </div>

      <p>Our <Link to="/web-development/wordpress/" className="text-[\#3ECF9E] hover:underline font-medium">WordPress development services</Link> include migration planning as part of rebuild projects. If your current site is built on WordPress and you are rebuilding or re-platforming, this technical checklist applies regardless of what platform you are moving to.</p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Post-migration monitoring checklist</h2>
      <p>Migration problems that were not caught in staging often surface in the days after launch. Monitor these signals closely for at least four weeks after the migration goes live.</p>

      <div className="bg-[\#F7F9FC] rounded-xl p-6 border border-gray-200 mt-4">
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Google Search Console coverage errors:</strong> Check the Coverage report in Google Search Console daily for the first two weeks. New errors related to 404 pages, soft 404s, or crawl anomalies need immediate investigation.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Indexation of new URLs:</strong> Use the URL Inspection tool in Google Search Console to verify that your most important pages are being indexed on the new URLs.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Crawl budget usage:</strong> For large sites, monitor the crawl stats report in Google Search Console to confirm Googlebot is discovering and crawling new URLs at a normal rate.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Organic traffic trends:</strong> Compare week-over-week organic traffic for four weeks post-migration. Some temporary fluctuation is normal as Google re-indexes the new URLs. A sustained significant drop in traffic to previously strong pages warrants investigation into redirect coverage and indexation for those pages.</li>
        </ul>
      </div>

      <p>Google's own documentation on site moves, available at developers.google.com, is the authoritative reference for migration best practices. Search Console help documentation covers the specific tools and reports referenced above. When planning a <Link to="/web-development/custom/" className="text-[\#3ECF9E] hover:underline font-medium">custom website development</Link> or rebuild, building the redirect mapping and SEO migration plan before development begins is strongly recommended. Our <Link to="/web-development/" className="text-[\#3ECF9E] hover:underline font-medium">web development services</Link> team can discuss migration scope during a discovery call.</p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Frequently asked questions</h2>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">What happens if there are redirect chains?</h3>
      <p>A redirect chain occurs when URL A redirects to URL B, which redirects to URL C. Search engines follow redirect chains, but each hop adds latency and may reduce the strength of the link signal passed along the chain. The practical risk is more about crawl efficiency and page load performance than a catastrophic ranking drop. Collapsing chains so that every old URL redirects directly to its final destination is the correct practice and should be part of the pre-launch technical review.</p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">How long should I allow for a migration timeline?</h3>
      <p>The timeline depends heavily on site size and complexity. A small site with under 100 pages can be mapped and migrated in a shorter window than a large e-commerce site with thousands of product URLs. The crawl inventory, redirect mapping, and testing phases should not be rushed. Launching before the redirect mapping is complete is the single most common cause of post-migration traffic loss. Building in time for a thorough pre-launch technical review is worthwhile.</p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">What should I do if traffic drops significantly after migration?</h3>
      <p>Start with Google Search Console. Check the Coverage report for new errors, check the Performance report to identify which pages have lost impressions, and use URL Inspection to confirm those pages are indexed on their new URLs. Cross-reference with your redirect mapping to confirm the old URLs for those pages are correctly redirecting to the new URLs. Missing or incorrect redirects on high-traffic pages are the most common cause of a significant post-migration traffic drop.</p>

    </ArticleLayout>
  )
}
