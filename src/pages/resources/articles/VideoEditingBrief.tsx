import { Link } from 'react-router-dom'
import ArticleLayout from '../../../components/ArticleLayout'

export default function VideoEditingBrief() {
  return (
    <ArticleLayout title="Video Editing Brief Template for Brands" category="Content Creation" categoryHref="/content-creation/video-editing/">

      <p>A video editing brief is the single document that aligns your production team, your editor, and your brand guidelines before a single clip is touched. Without one, projects stall in revision loops, deliverables miss platform requirements, and editors are left guessing at creative intent. This article walks through every section a solid brief must include, explains how to fill it out accurately, and flags the most common mistakes brands make when briefing video work.</p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Why the brief matters more than you think</h2>
      <p>Most production delays trace back to a brief that was either incomplete or never written. An editor who does not know the output platform will optimize the wrong aspect ratio. An editor who has not seen your brand kit will choose the wrong font for lower-thirds. An editor who does not know your revision expectations may deliver a final file before you have seen a rough cut.</p>
      <p>A well-written brief compresses back-and-forth into a single intake document. It also creates a reusable template your team can fill out every time a new project comes in, which is particularly useful if you work with our <Link to="/content-creation/video-editing/" className="text-[\#3ECF9E] hover:underline font-medium">video editing services</Link> on a recurring basis.</p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">The eight core sections of a video editing brief</h2>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">1. Source footage details</h3>
      <p>List every file you are providing: the total number of raw clips, the recording format (MP4, MOV, ProRes), the frame rate, and the storage location (shared drive link, cloud folder, or transfer service). Note any known quality issues such as shaky handheld footage, inconsistent lighting across takes, or background noise that may need attention during edit. If you have a camera card with mixed content, specify which clips are relevant to this project.</p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">2. Desired output formats and lengths</h3>
      <p>Specify every output you need from one editing session. For example: a 10-minute YouTube cut at 16:9, a 90-second Instagram Reel at 9:16, and a 30-second square highlight for LinkedIn. Include target duration ranges rather than exact times where appropriate. The editor can then plan the project timeline and flag where the same clip may need to be reframed for vertical versus horizontal delivery.</p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">3. Brand guidelines</h3>
      <p>Attach or link to your brand kit, including your logo files, color hex codes, approved fonts, and any visual elements the editor should use or avoid. If you have a lower-third template, an intro animation, or an outro card, provide the source files. If no template exists, describe the look you want in clear terms: minimal and text-only, animated logo reveal, or branded color bars, for example.</p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">4. Reference content</h3>
      <p>Provide two or three examples of edits you admire, with a short note on what specifically appeals to you about each one. Reference videos accelerate creative alignment because they communicate style, pacing, and energy faster than written descriptions. Be explicit about which element you are referencing: the cut rhythm, the caption style, the color grade, or the transition type. Avoid sending references you expect the editor to copy exactly if those videos contain third-party music or proprietary motion graphics.</p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">5. Revision expectations</h3>
      <p>State the number of revision rounds included, what constitutes a revision (a round of consolidated notes versus individual change requests), and the preferred method for delivering feedback. Many editors use frame-accurate review tools so you can comment directly on the timeline. Clarify this at the brief stage so no one is surprised by email chains of scattered notes later.</p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">6. Delivery deadline and milestones</h3>
      <p>Provide the final delivery date and any intermediate milestone dates: rough cut review, audio mix approval, and color grade sign-off. Working backward from a publish date lets the editor allocate time correctly and flag if the timeline is tight before work begins rather than on delivery day.</p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">7. Music and audio notes</h3>
      <p>Specify whether music is provided, sourced from a licensed library, or left to the editor's judgment. If you have a blanket license for a music platform (such as Artlist or Musicbed), mention it. If the video will be published on YouTube, note whether Content ID claims are a concern. For interview-style content, specify whether you want ambient music under dialogue or a clean talking-head track.</p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">8. Caption and accessibility requirements</h3>
      <p>State whether captions are required, whether they should be burned into the video or delivered as a separate SRT file, and what styling they should follow. Captions affect post-production time meaningfully, so including this in the brief prevents scope surprises at delivery.</p>

      <div className="bg-[\#F7F9FC] rounded-xl p-6 border border-gray-200 mt-4">
        <p className="text-sm font-semibold text-[\#0B1220] mb-3">Quick brief checklist</p>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Source footage format, frame rate, and storage link</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>All required output formats and target durations</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Brand kit files attached or linked</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Two to three reference videos with specific notes</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Revision round limit and feedback method</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Milestone dates and final delivery deadline</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Music licensing status or preference</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Caption requirements and styling</li>
        </ul>
      </div>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Common mistakes that delay production</h2>
      <p>The most frequent brief mistake is listing only the final deliverable without describing the source material. An editor who receives 90 minutes of raw talking-head footage for a three-minute highlight reel needs to know whether you expect them to transcribe and select moments themselves or whether you will provide a cut list. Ambiguity here can double the editing time.</p>
      <p>Another common issue is sending reference videos without annotation. A reference for the wrong reason causes confusion: you may love the pacing of one video but need nothing else from it, while the editor spends time replicating its color treatment. Always note exactly what you want to borrow from each reference.</p>
      <p>Skipping the revision section is also costly. Without agreed-upon revision rounds, scope can expand indefinitely. Structure revision rounds as a bundled round of notes rather than drip-fed individual changes to keep production moving efficiently.</p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Briefing a series versus a one-off project</h2>
      <p>For a one-off video, the brief is self-contained. For a series, the brief should also include a series style guide: a locked-down set of decisions (intro animation, lower-third template, outro card, color grade preset, caption font) that will be applied consistently across every episode. Document these decisions after the first episode is approved rather than re-briefing each time. Connecting your series brief to a <Link to="/content-creation/youtube-automation/" className="text-[\#3ECF9E] hover:underline font-medium">YouTube production workflow</Link> that includes scheduling and metadata also reduces the handoff time between editing and publishing.</p>
      <p>Our broader <Link to="/content-creation/" className="text-[\#3ECF9E] hover:underline font-medium">content creation services</Link> can support both one-off and ongoing production needs, including brief development during the discovery phase of a project.</p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Frequently asked questions</h2>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">How many revision rounds should I include in a brief?</h3>
      <p>Most projects run smoothly with two structured revision rounds: one after the rough cut and one after the fine cut. Additional rounds can be scoped during discovery if the project has complexity that warrants them. Structuring each round as a consolidated batch of notes (rather than individual comments sent over days) keeps production timelines predictable and prevents revision fatigue on both sides.</p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">Can I use any YouTube video as a reference?</h3>
      <p>You can send any publicly available video as a style reference to illustrate the look, pacing, or feel you want. However, your editor cannot copy a third party's original music, proprietary motion graphics, or licensed footage from that reference video into your deliverable. Be clear about what you are referencing: the creative concept and structure only, not the specific assets used to achieve it.</p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">Do I need a separate brief for each platform format?</h3>
      <p>A single brief can cover multiple output formats as long as each format is listed with its own specifications: dimensions, duration, caption requirement, and platform. The editor will then plan the reformatting steps as part of the same project scope. If the formats differ enough in creative direction (for example, a polished YouTube cut and a raw-feeling TikTok version), consider adding a short creative note for each format variant.</p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">What file format should I request for delivery?</h3>
      <p>H.264 MP4 is the most widely accepted delivery format for social platforms and online use. If you need archival quality or plan to re-edit later, request ProRes or DNxHD alongside the compressed delivery file. Always specify whether you need a separate audio track, SRT file, or chapter markers included with the delivery package.</p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">What happens if my raw footage quality is poor?</h3>
      <p>Low-quality source footage can be partially improved through noise reduction, color correction, and audio cleanup, but there are practical limits to what post-production can recover. It is worth noting any quality issues in the brief so the editor can advise on what is achievable before production begins rather than flagging it only at rough cut delivery.</p>

    </ArticleLayout>
  )
}
