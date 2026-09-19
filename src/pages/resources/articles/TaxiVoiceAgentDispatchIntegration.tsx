import { Link } from 'react-router-dom'
import ArticleLayout from '../../../components/ArticleLayout'

export default function TaxiVoiceAgentDispatchIntegration() {
  return (
    <ArticleLayout
      title="Taxi Voice Agent and Dispatch API Integration: What the Build Involves"
      category="Taxi Booking"
      categoryHref="/ai-voice-agents/taxi-booking/"
    >

      <div className="bg-[\#F7F9FC] rounded-xl p-6 border border-gray-200 mt-2 mb-6">
        <p className="text-sm text-gray-700 font-semibold mb-2">Important disclosure</p>
        <p className="text-sm text-gray-600">
          The taxi booking voice agent currently in development at Innoventix Hub uses a mock dispatch API for demonstration and testing purposes. Integration with iCabbi, TBMS, or any other live taxi booking management system has not been verified or completed. Real production dispatch integration requires formal API access from the dispatch provider, agreed test environments, appropriate authentication credentials, and thorough end-to-end testing against live data. This article describes what such an integration involves in general terms, not what has been completed or confirmed by Innoventix Hub.
        </p>
      </div>

      <p>
        A voice-based taxi booking agent handles inbound calls from customers who want to book a ride. The agent collects the necessary information, confirms availability with the dispatch system, creates the booking, and provides the caller with a confirmation and an estimated time of arrival. Done well, this process is faster than waiting for a human dispatcher, works around the clock, and routes only the complex or exceptional calls to a human. Understanding what the dispatch API integration actually requires is essential before scoping this kind of project.
      </p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">What a taxi voice booking agent does</h2>
      <p>
        The agent handles the call from start to booking confirmation. A typical flow looks like this: the caller dials in, the agent greets them and asks for their pickup address, collects the destination, confirms the date and time (or establishes that they want a vehicle now), checks availability with the dispatch system, provides a fare estimate if the API supports it, creates the booking, and reads back the booking reference and estimated arrival time.
      </p>
      <p className="mt-3">
        Each of these steps involves a conversation turn where the agent must understand natural language input, extract structured data from it, and handle ambiguity gracefully. "Outside the Tesco on the high street" is a natural address a caller might give. The agent must either clarify until it has a mappable address or pass the ambiguous input to the dispatch API and handle what comes back. This natural language-to-structured-data problem is one of the defining challenges of the integration.
      </p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">What the dispatch API integration requires</h2>
      <p>
        Before any integration work can start, you need formal access to the dispatch system's API. The specific requirements depend on the provider, but in general you will need:
      </p>

      <div className="bg-[\#F7F9FC] rounded-xl p-6 border border-gray-200 mt-4">
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>API documentation from the dispatch provider covering endpoint formats, authentication requirements, and error codes</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Authentication credentials: API key, OAuth token, or other access method as specified by the provider</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>An availability or zone check endpoint: to confirm whether a vehicle is available for a given pickup location, date, and time</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>A booking creation endpoint: to submit the structured booking details (caller name, phone number, pickup address, destination, requested time) and receive a booking reference in return</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>A booking status query endpoint: to check the status of a booking and retrieve ETA information if it is not returned immediately at creation</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Error codes and their meanings: what the API returns when a pickup is outside the service area, when no vehicles are available, when an address cannot be resolved, and how to handle each case during a live call</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Rate limits and concurrency constraints: the maximum number of API calls per second or minute the integration can make</li>
        </ul>
      </div>

      <p className="mt-4">
        Without formal access to the dispatch provider's API and documentation, the integration cannot be built beyond a prototype stage. Mock APIs are useful for development and demonstration but cannot substitute for testing against the actual system. Contact iCabbi, TBMS, or your specific dispatch provider directly to establish API access before scoping an integration build.
      </p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Common integration challenges</h2>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">Address confirmation</h3>
      <p>
        Natural language addresses, the kind callers give over the phone, are often ambiguous or non-standard. "The old post office" or "next to the park" do not map directly to coordinates. The agent needs a strategy for handling these: either asking the caller to confirm a specific address from a set of options the geocoding service returns, or escalating to a human when the address cannot be resolved. Building a robust address handling flow is one of the higher-effort parts of a taxi booking agent and needs to be tested with a representative sample of the addresses your callers are likely to give.
      </p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">Fuzzy matching for location names</h3>
      <p>
        For fleets that serve known pickup points (airports, hotels, train stations), the agent can maintain a lookup list of known location names and match caller input against it. "The Premier Inn in town" can be matched to a confirmed address if the list is maintained. This reduces ambiguity for common pickups but requires keeping the location list accurate and current.
      </p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">Async booking confirmation</h3>
      <p>
        Some dispatch APIs do not return a confirmed booking reference synchronously. They accept the booking request and confirm asynchronously via webhook or polling. For a voice agent, this creates a challenge: the caller is on the line and expects a confirmation within seconds. The agent must handle the case where confirmation is pending: either keep the caller on the line with a brief hold, offer to call back with the reference, or send the reference by SMS when it arrives. This requires webhook handling infrastructure and must be tested against the dispatch system's actual response times.
      </p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">Unavailability and service area limits</h3>
      <p>
        When the dispatch system returns "no vehicles available" or "outside service area," the agent must handle this gracefully. The caller should receive a clear explanation and an appropriate alternative: a time when vehicles may be available, a different pickup option, or a transfer to a human dispatcher who can assist. The agent should never present an uncertain or confusing message at this point. Clear handling of unavailability is as important as the happy path through the booking flow.
      </p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Human fallback when the agent cannot complete a booking</h2>
      <p>
        Not every booking can be completed by the agent. Complex requests, address ambiguity that cannot be resolved, caller frustration, or dispatch API errors should trigger a transfer to a human dispatcher. The transfer must include the context the agent has already collected: caller name, phone number, pickup address as captured, destination, and requested time. A warm transfer where the agent briefly introduces the caller and the context to the dispatcher is preferable to a cold transfer where the dispatcher picks up with no information.
      </p>
      <p className="mt-3">
        Outside of business hours, if no dispatcher is available, the agent should offer to take a callback request with a confirmed time window or send an SMS with the collected details and a callback number. Callers who reach the end of an automated flow and receive nothing will not call back. For more on designing this fallback layer, see the <Link to="/resources/ai-receptionist-pilot-checklist/" className="text-[\#3ECF9E] hover:underline font-medium">pilot checklist</Link> which covers fallback design in the pre-launch phase.
      </p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Testing requirements before production</h2>
      <p>
        A taxi booking agent integration should not go live without passing through a defined testing programme. The minimum testing requirements include:
      </p>

      <div className="bg-[\#F7F9FC] rounded-xl p-6 border border-gray-200 mt-4">
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Mock environment testing: verify that the agent's function calls produce correctly structured API requests and handle all defined response types</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Live sandbox testing: test against the dispatch provider's sandbox or staging environment with real API calls, confirming that bookings are created, retrieved, and cancelled correctly</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Address resolution testing: run a set of representative caller addresses through the geocoding and confirmation flow, including ambiguous and local-name addresses</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Error scenario testing: deliberately trigger each defined error code (no vehicles, outside area, API timeout) and confirm the agent handles each one correctly</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Human fallback testing: confirm that the transfer triggers correctly and the context packet reaches the dispatcher</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span>Consent to record: confirm that call recording consent is handled per applicable legal requirements in your jurisdiction before recording any test calls</li>
        </ul>
      </div>

      <p className="mt-4">
        If you are exploring a <Link to="/ai-voice-agents/taxi-booking/" className="text-[\#3ECF9E] hover:underline font-medium">taxi booking voice agent</Link> for your fleet, the integration requirements with your specific dispatch system will need to be confirmed during discovery before a realistic build scope can be agreed. See the broader <Link to="/ai-voice-agents/" className="text-[\#3ECF9E] hover:underline font-medium">AI voice agent services</Link> section for more context on how these projects are scoped and built.
      </p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Frequently asked questions</h2>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">Which dispatch systems does this work with?</h3>
      <p>
        Any dispatch system with a documented REST API and accessible endpoints for availability, booking creation, and booking status can in principle be integrated with a voice agent. Whether iCabbi, TBMS, or another system is compatible depends on their API documentation and the access they provide to integrators. Compatibility needs to be confirmed with each specific provider. There is no universal voice agent interface that works with all dispatch systems without integration work.
      </p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">What happens to caller data during the call?</h3>
      <p>
        The caller's name, phone number, and address are collected by the agent and passed to the dispatch API to create the booking. Call recordings may also be stored, depending on your configuration and consent handling. Data handling should be reviewed against applicable data protection regulations in your jurisdiction before launch. The voice platform you use (Retell, Vapi, or other) will have its own data retention and processing policies that should also be reviewed as part of your compliance preparation.
      </p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">What does a pilot for this type of agent look like?</h3>
      <p>
        A pilot for a taxi booking agent typically involves deploying the agent on a separate inbound number, covering a defined set of booking types (immediate bookings for known pickup areas only, for example), for a defined period (two to four weeks, subject to testing). All calls during the pilot are reviewed by transcript, and the human dispatcher team monitors handoffs and completion rates. The pilot data then informs whether the agent is ready for production scope, or whether specific flows need revision first.
      </p>

    </ArticleLayout>
  )
}
