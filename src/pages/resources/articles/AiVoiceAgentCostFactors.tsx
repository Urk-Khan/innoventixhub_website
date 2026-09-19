import { Link } from 'react-router-dom'
import ArticleLayout from '../../../components/ArticleLayout'

export default function AiVoiceAgentCostFactors() {
  return (
    <ArticleLayout
      title="AI Voice Agent Cost Factors Explained"
      category="AI Voice Agents"
      categoryHref="/ai-voice-agents/"
    >

      <p>
        An AI voice agent project involves several layers of cost that are easy to underestimate when planning. Build costs, per-minute platform usage fees, telephony, integrations, and ongoing maintenance all contribute. This article describes the categories of cost involved, not specific prices: platform pricing changes frequently and project scope varies too widely for published figures to remain useful for long. Understanding these factors will help you have a more grounded conversation during a discovery engagement, and avoid surprises later in a build.
      </p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Development costs</h2>
      <p>
        The development phase covers the work required to design, build, and test the agent before it handles real calls. This typically includes:
      </p>

      <div className="bg-[\#F7F9FC] rounded-xl p-6 border border-gray-200 mt-4">
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Discovery: defining the call scope, identifying use cases, mapping the call flow, agreeing on handoff triggers and fallback paths</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Prompt engineering: writing and iterating the system prompt and conversation instructions that govern the agent's behaviour</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Call flow design: mapping the paths a call can take, including escalation and error paths</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Integration work: connecting the agent to CRM, booking systems, or dispatch APIs via webhooks and function calls</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Testing: running test calls, reviewing transcripts, refining the agent, and conducting a structured pilot before go-live</li>
        </ul>
      </div>

      <p className="mt-4">
        The scope of each of these activities determines how much development time is involved. A simple FAQ agent with no integrations is much lighter than a booking agent that writes to a dispatch system and transfers calls with full context. During a discovery engagement, a more detailed project scope can be mapped so that development costs can be estimated more accurately. That scoping process is itself an important step, not something to skip in order to reach a number faster.
      </p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Platform usage costs</h2>
      <p>
        Once an agent is live, running it costs money with every call. The major usage cost categories are:
      </p>
      <p className="mt-3">
        <strong>Speech-to-text (STT):</strong> The service that converts what the caller says into text the LLM can process. Billed per minute or per second of audio transcribed.
      </p>
      <p className="mt-3">
        <strong>LLM tokens:</strong> The language model processes the transcribed input and generates a response. Costs scale with the number of tokens in the prompt, the conversation history, and the response. Longer conversations and larger system prompts use more tokens per call.
      </p>
      <p className="mt-3">
        <strong>Text-to-speech (TTS):</strong> The service that converts the LLM's text response into spoken audio for the caller. Billed per character or per minute of audio generated. Higher-quality voice providers generally cost more per character.
      </p>
      <p className="mt-3">
        <strong>Telephony per-minute fees:</strong> The voice platform (Retell, Vapi, or similar) typically charges a per-minute fee that covers the infrastructure routing the call, in addition to the individual STT, LLM, and TTS costs. If you use the platform's built-in telephony, these fees are bundled into the platform cost. If you bring your own telephony (BYOT), you pay the SIP provider separately. See the <Link to="/resources/retell-vs-vapi/" className="text-[\#3ECF9E] hover:underline font-medium">Retell vs Vapi comparison</Link> for more on these architectural choices.
      </p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Telephony infrastructure costs</h2>
      <p>
        Telephony infrastructure costs include the phone number or numbers the agent answers, any SIP trunk costs, and SMS costs if the agent sends text confirmations. Phone number rental is typically a small monthly cost per number. SIP trunk costs depend on the provider and the inbound and outbound call volumes. If you are using the platform's bundled telephony, these costs are included in the per-minute fees. If you have existing telephony infrastructure you are integrating, the provider costs remain separate from the platform costs.
      </p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">CRM and integration costs</h2>
      <p>
        If the agent writes to a CRM or booking system, additional costs may apply. These can include:
      </p>

      <div className="bg-[\#F7F9FC] rounded-xl p-6 border border-gray-200 mt-4">
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>CRM API access fees, if the platform charges per API call or at a certain tier for API access</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Middleware costs: if the integration requires an n8n workflow automation layer or a webhook relay service to translate between the agent's output and the CRM's expected format</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Third-party API fees from the systems the agent queries during calls (availability checks, booking APIs, knowledge bases)</li>
        </ul>
      </div>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Ongoing support and monitoring costs</h2>
      <p>
        A voice agent is not a one-time build. Once it is live, it requires monitoring and periodic review. Call transcripts need to be reviewed to catch errors, knowledge boundaries need to be updated as the business changes, and prompt updates are needed when callers consistently fail to complete certain flows. At low volume this is a small ongoing time investment. At high volume it may require dedicated attention. Factor this into the total cost of ownership, not just the initial build. This is often the cost category most underestimated in early planning.
      </p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">How call volume affects total cost</h2>
      <p>
        Most voice agent cost components are variable: they scale with the number and duration of calls. This means the cost per call can go down meaningfully at scale if the agent is handling a high volume of calls that would otherwise require human agents. At low call volumes, the per-call economics may be less favourable compared to simply routing calls to a human. The break-even point depends on your average call duration, your human agent cost per call, and the platform pricing you are on. This calculation is worth doing before committing to a build. During a discovery call, you can work through the rough numbers based on your actual call volume and handle time.
      </p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Factors that increase cost</h2>
      <p>
        Several scope factors increase both build cost and ongoing usage cost. Knowing these in advance helps you make informed tradeoffs during design:
      </p>

      <div className="bg-[\#F7F9FC] rounded-xl p-6 border border-gray-200 mt-4">
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Complex multi-turn dialogue: longer conversations use more LLM tokens and more TTS per call</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>High knowledge-base maintenance: agents that answer detailed or frequently changing questions require more prompt and knowledge updates over time</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Multi-language support: supporting multiple languages requires separate testing, prompts, and voice configurations</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Complex integrations: writing to multiple systems, handling async responses, or dealing with poorly documented APIs increases build and maintenance time</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Compliance requirements: call recording consent handling, data retention policies, and audit logging add scope</li>
        </ul>
      </div>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Factors that reduce cost</h2>
      <p>
        Narrowing the scope intelligently can significantly reduce build cost without sacrificing the core value the agent delivers:
      </p>

      <div className="bg-[\#F7F9FC] rounded-xl p-6 border border-gray-200 mt-4">
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Simpler, well-defined call flows: an agent that handles three clearly defined enquiry types is much faster to build and test than one handling open-ended conversation</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Well-documented existing integrations: CRMs or booking systems with clean, well-documented APIs reduce integration time significantly</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Starting with a pilot: building a narrow pilot before the full scope reduces the risk of investing in a design that does not work well in practice</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Reusing existing infrastructure: teams with existing telephony, CRM access, and webhook infrastructure already in place have a shorter path to production</li>
        </ul>
      </div>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">How to approach a budget for a voice agent project</h2>
      <p>
        The most reliable way to scope a voice agent budget is to start with discovery before committing to a build. A discovery engagement covers call flow mapping, integration requirements, and platform selection, which are the factors that determine whether the project is a narrow build or a complex one. After discovery, a prototype can be scoped and built before full production investment. This staged approach reduces the risk of committing a full budget to a design that turns out to be more complex than expected.
      </p>
      <p className="mt-3">
        If you are ready to understand the scope of a specific project, <Link to="/book/" className="text-[\#3ECF9E] hover:underline font-medium">book a discovery call</Link> to discuss your requirements before any build commitment is made. You can also review the <Link to="/ai-voice-agents/" className="text-[\#3ECF9E] hover:underline font-medium">AI voice agent services</Link> overview for context on what the build process involves.
      </p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Frequently asked questions</h2>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">Is there a cost per call or a flat monthly fee?</h3>
      <p>
        Most voice agent platforms use usage-based pricing rather than a flat monthly fee. You pay for what the agent uses: minutes of STT, LLM tokens, TTS characters, and telephony minutes. Some platforms offer monthly plans with included usage allowances that may work out less expensive at certain call volumes. Check current pricing pages directly with the platform you are evaluating, as plans change. Avoid relying on any third-party summary of current pricing, including this one.
      </p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">Is there a minimum project scope?</h3>
      <p>
        A useful voice agent requires at minimum a defined call flow, a system prompt, a voice configuration, a phone number, and testing. Below a certain scope it may be more practical to use a simple IVR or call routing tool rather than a full AI voice agent. During discovery, the scope can be assessed honestly so that you are building the right tool for your situation, not a more complex one than your use case requires.
      </p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">Should you start with a pilot?</h3>
      <p>
        Yes, in almost all cases. A pilot covers a narrow set of call types, runs for a defined period with a limited caller base, and produces transcript and completion rate data that tells you whether the agent is working before you invest in the full scope. Pilots also reveal integration challenges and edge cases that are very difficult to anticipate during design. Starting with a pilot is one of the most reliable ways to reduce total project cost, because it catches design issues before they are built into a production system.
      </p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">How much does it cost to update the agent after launch?</h3>
      <p>
        Minor prompt updates and knowledge-base additions are typically low-cost in time. Significant changes to the call flow, new integrations, or new call types represent material build work and should be scoped separately. Budget for at least some ongoing maintenance from launch: the agent will need updates as the business changes and as call transcript review reveals edge cases that the original design did not account for.
      </p>

    </ArticleLayout>
  )
}
