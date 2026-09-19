import { Link } from 'react-router-dom'
import ArticleLayout from '../../../components/ArticleLayout'

export default function AiReceptionistPilotChecklist() {
  return (
    <ArticleLayout
      title="AI Receptionist Pilot Checklist: What to Test Before Going Live"
      category="AI Voice Agents"
      categoryHref="/ai-voice-agents/"
    >

      <p>
        An AI receptionist pilot is a limited, controlled deployment that tests the agent against real or representative call scenarios before the agent is made available to all callers. It is the single most important step between building an agent and putting it into production. Voice agent failures are visible to real callers the moment they happen, and they damage trust in a way that is difficult to recover from quickly. A structured pilot catches most issues while the consequence is a test call reviewed by your team, not a real customer who hangs up frustrated.
      </p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">What a pilot is and why it matters</h2>
      <p>
        A pilot is not a final testing phase that happens after the build is complete. It is a controlled production deployment: real calls (or carefully scripted representative calls), on a live phone number, using the actual platform and integrations. The difference between a pilot and an internal test is that a pilot is designed to surface the things that internal testing does not catch: unexpected caller phrasings, edge cases in your knowledge base, integration behaviour under realistic call timing, and human team readiness to receive AI-transferred calls.
      </p>
      <p className="mt-3">
        The goal is not to demonstrate that the agent works perfectly. The goal is to identify what needs to be adjusted before the agent is exposed to your full caller base. Almost every pilot reveals at least a few issues. That is the point. Running a pilot is not a sign of a poorly built agent; it is a sign of a responsibly deployed one. See our <Link to="/ai-voice-agents/" className="text-[\#3ECF9E] hover:underline font-medium">AI voice agent services</Link> overview for context on how pilots fit into the broader deployment process.
      </p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Pilot preparation checklist</h2>
      <p>
        Before the pilot begins, the following items should be confirmed. Running the pilot without these in place produces unreliable data and may create caller-facing issues that undermine confidence in the agent.
      </p>

      <div className="bg-[\#F7F9FC] rounded-xl p-6 border border-gray-200 mt-4">
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Define which inbound call types the agent will handle during the pilot. Start with the two or three most common call types, not the full range.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Write and approve all call scripts and system prompts. All prompt language should have been reviewed and signed off before the pilot begins.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Test knowledge base coverage against a representative sample of questions the agent is expected to answer.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Confirm and test all handoff triggers: the conditions that cause the agent to transfer the call to a human.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Set up call recording with caller consent handling appropriate to your jurisdiction. Do not record pilot calls without confirming the legal requirements in your country or region.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Brief the human team on receiving AI-transferred calls: what the context packet looks like, what the agent can and cannot do, and how to flag issues they notice during the pilot.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Confirm the fallback path works: what happens when no human is available for a transfer, or when the transfer fails.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Set up a method to collect and review pilot data: transcripts, call completion rates, transfer rates, and any errors or anomalies the platform logs.</li>
        </ul>
      </div>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Test scenarios to run during the pilot</h2>
      <p>
        A structured pilot should include the following scenario types. Run each scenario at least twice, from different testers if possible, to catch phrasing variation.
      </p>

      <div className="bg-[\#F7F9FC] rounded-xl p-6 border border-gray-200 mt-4">
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Standard enquiry: a caller asks the most common type of question the agent is designed to handle. Does the agent answer correctly and completely?</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Booking or appointment request: a caller requests the core action the agent is built to facilitate. Does it complete the transaction end to end?</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Caller with an accent or non-standard phrasing: does the speech-to-text layer transcribe accurately across the range of accents your callers actually have?</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Out-of-scope question: a caller asks something the agent was not designed to answer. Does the agent acknowledge it gracefully and offer to help in another way, rather than making something up?</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Caller expressing frustration: a caller speaks in a frustrated or impatient tone. Does the sentiment trigger or the agent's behaviour respond appropriately?</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Direct request for a human: the caller says "let me speak to someone." Does the transfer trigger immediately and complete correctly?</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Call drop scenario: the caller hangs up mid-conversation. Does the platform handle this cleanly, without leaving a partial integration action in progress?</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Transfer failure scenario: the human destination is unavailable. Does the agent return to the call and offer the fallback path?</li>
        </ul>
      </div>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Scoring the pilot</h2>
      <p>
        Review all pilot calls against the following metrics. These do not need to be perfect on the first pilot run, but the baseline they establish tells you what needs to be addressed before production. Review the <Link to="/resources/ai-voice-agent-human-handoff/" className="text-[\#3ECF9E] hover:underline font-medium">human handoff guide</Link> for specific metrics relevant to the transfer flow.
      </p>

      <div className="bg-[\#F7F9FC] rounded-xl p-6 border border-gray-200 mt-4">
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Completion rate: the percentage of calls the agent completed without requiring a human transfer (for the call types it was designed to handle)</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Transcript quality: review transcripts for speech-to-text errors that affected the agent's ability to respond correctly</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Response accuracy: did the agent provide correct information in each call?</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Handoff success rate: what percentage of triggered transfers completed successfully, with context reaching the human agent?</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Average handle time: how long did calls take? Very long calls may indicate the agent is not recognising intent efficiently.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Fallback path usage: how often did callers reach the fallback (voicemail, callback request) and did it work correctly?</li>
        </ul>
      </div>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Common pilot failures and how to address them</h2>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">Agent not recognising caller intent</h3>
      <p>
        This shows up as the agent asking a clarifying question when the caller's intent was clear, or going off-track into an unrelated response. The fix is usually in the system prompt: adding examples of how callers typically phrase the relevant requests, and tightening the intent classification logic. Review transcripts from these calls to identify the specific phrasings that were misread.
      </p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">Incorrect information provided</h3>
      <p>
        When the agent states something factually wrong, the first step is to identify where the incorrect information came from. Is it in the system prompt? In a knowledge base document? Is the LLM making an inference beyond what it was told? Each source has a different fix. Incorrect information in a live production agent is serious: document every instance during the pilot and address each one before expanding the deployment.
      </p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">Transfer not triggering correctly</h3>
      <p>
        If the handoff trigger does not fire when it should, review the trigger condition in the system prompt and in any sentiment detection configuration. If it fires when it should not (false positive), tighten the condition. Both types of error should be captured in the pilot review and addressed before production. A transfer that does not fire when a frustrated caller requests a human is one of the worst outcomes in a voice agent deployment.
      </p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Criteria for moving to full production</h2>
      <p>
        Consider the agent ready for full production when: the completion rate for the designed call types meets an agreed threshold, no instances of incorrect information have been found in the most recent round of pilot calls, the handoff trigger fires correctly in all tested scenarios, the fallback path works under all tested conditions, and the human team has been through the briefing and is comfortable receiving transferred calls. If any of these criteria are not met, run an additional pilot cycle addressing the specific issues found. Expanding to full production before these criteria are met is more likely to create problems than to save time.
      </p>
      <p className="mt-3">
        View <Link to="/ai-voice-agents/demos/" className="text-[\#3ECF9E] hover:underline font-medium">voice agent demos</Link> to see examples of agents that have gone through this kind of structured pilot before deployment.
      </p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Frequently asked questions</h2>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">How long should a pilot run?</h3>
      <p>
        The appropriate pilot duration depends on your call volume. The goal is to accumulate enough calls across each defined scenario type to produce reliable data: at a minimum, enough calls to run each test scenario several times and have a statistically meaningful completion rate. For businesses with moderate call volume, two to four weeks is typically enough. For lower-volume businesses, a longer pilot with scripted test calls from the team may be necessary to generate enough data.
      </p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">Who should review the pilot recordings?</h3>
      <p>
        At a minimum, the person responsible for the agent's content (usually the person who approved the scripts and prompts) should review a sample of recordings or transcripts from each call type. Someone from the human team who receives transferred calls should also review calls involving a handoff. For higher-stakes deployments, a broader review panel may be appropriate. The review should be structured: use the same scoring criteria for each call, and document findings rather than relying on general impressions.
      </p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">What are the consent requirements for call recording during a pilot?</h3>
      <p>
        Call recording consent requirements vary by jurisdiction. In many regions, at least one party to the call must be informed that the call is being recorded, and in some regions all parties must consent. This is a legal requirement, not a best practice. Before recording any call during the pilot, confirm the applicable legal requirements with appropriate advice for your jurisdiction and configure the agent's opening message accordingly. Your voice platform provider may have guidance, but ultimate compliance responsibility rests with you as the deploying business.
      </p>

    </ArticleLayout>
  )
}
