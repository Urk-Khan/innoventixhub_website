import { Link } from 'react-router-dom'
import ArticleLayout from '../../../components/ArticleLayout'

export default function CustomPortalDevelopmentRequirements() {
  return (
    <ArticleLayout title="Customer Portal Development Requirements: What to Document Before You Build" category="Custom Web Development" categoryHref="/web-development/custom/">

      <p>A customer portal is a secure, authenticated web application where customers can view their account, manage orders, access documents, submit requests, and communicate without contacting support by phone or email. Documenting requirements before development begins is not a formality; it is the most effective way to prevent the rework that accounts for a large portion of custom application cost overruns. This guide covers what to capture and how to structure it.</p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Why requirements documentation prevents expensive rework</h2>
      <p>Custom development teams build what is specified. When something is not specified, the team makes a reasonable assumption or asks a question. When assumptions are not surfaced and reviewed until a feature is already built, the cost of changing it is multiples of what it would have cost to clarify during discovery. A well-structured requirements document is not a constraint on creativity; it is a shared reference that reduces ambiguity and makes realistic estimates possible.</p>
      <p>The most expensive requirements to discover late are those that affect data architecture: permission models, audit trail requirements, integration schemas, and retention rules. These decisions influence how the database is designed, and changing them after data is structured and code is written is a significant refactor. They should be decided and documented before the first sprint.</p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">User roles and permissions</h2>
      <p>Every portal has multiple types of users with different access levels. Document each role explicitly before design or development begins.</p>

      <div className="bg-[\#F7F9FC] rounded-xl p-6 border border-gray-200 mt-4">
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Customer:</strong> What data can they see (their own orders, invoices, support tickets)? What actions can they take (submit a new request, download an invoice, update contact details)? What data is hidden from them?</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Admin:</strong> Can they see all customer accounts? Can they impersonate a customer for support purposes? Can they export data?</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Support agent:</strong> Can they view and respond to tickets without accessing billing data? Are there actions they can take that a customer cannot?</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Account manager:</strong> Do they see a subset of customers assigned to their portfolio? Can they take actions on a customer's behalf?</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Edge cases:</strong> What happens when a user changes roles? Can a customer account have multiple users with different permissions (for example, a billing contact and an end user from the same company)?</li>
        </ul>
      </div>

      <p>Permission edge cases are the most common requirements omission. Specifying permissions at the feature level (not just the role level) prevents ambiguity. Our <Link to="/web-development/custom/" className="text-[\#3ECF9E] hover:underline font-medium">custom web development services</Link> team works through permission matrices during discovery to make these decisions explicit before design begins.</p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Authentication requirements</h2>
      <p>Authentication is a foundational decision because it affects both the security architecture and the user experience. The options to evaluate include:</p>
      <p>Email and password authentication is familiar and straightforward to implement, but requires password reset flows, account lockout policy, and session management. Single Sign-On (SSO) via SAML or OIDC is common in enterprise contexts where users expect to log into all their tools with the same corporate identity. Magic link authentication (a one-time login link sent by email, no password required) reduces friction for users who log in infrequently. Two-factor authentication (2FA) adds a second verification step and may be a requirement for portals handling sensitive financial or personal data. Specify which method or methods the portal requires and whether 2FA is optional or mandatory.</p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Data the portal displays and actions users can take</h2>
      <p>For each data type the portal will display, document the source system, the fields required, and whether the data is read-only or editable. For each action a user can take, document what happens in the system as a result.</p>

      <div className="bg-[\#F7F9FC] rounded-xl p-6 border border-gray-200 mt-4">
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Orders:</strong> Which fields are displayed (order date, status, items, total)? Can a customer cancel an order from the portal, or is that a manual process handled by support?</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Invoices:</strong> Are invoices generated within the portal or fetched from a billing system? Can customers download them as PDF? Is there a payment action within the portal?</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Support tickets:</strong> Can customers submit new tickets? Can they see the full history and status of their open tickets? Can they add a message to an existing ticket?</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Documents:</strong> Are documents uploaded by your team or generated by the system? Can customers download but not delete them? Is there version history?</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Account settings:</strong> Can customers update their contact information? Can they manage notification preferences? Can they add or remove users from their account?</li>
        </ul>
      </div>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Integrations</h2>
      <p>Most customer portals need to read from and write to at least one external system. Each integration adds discovery time, development time, and testing complexity. Document the following for each integration: the system being integrated (CRM, ERP, billing platform, support system), the integration method (REST API, webhook, database connection, file export/import), the direction of data flow (read only, write only, bidirectional), and the expected data volume and latency requirements.</p>
      <p>Integration requirements are a significant cost driver in custom portal projects. An integration that requires reading from a well-documented REST API with sandbox access is a different scope than one that requires reverse-engineering a legacy database connection. Be explicit about what is known and what needs to be discovered during the technical scoping phase.</p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Notification requirements</h2>
      <p>Document every event that should trigger a notification, the channel (email, in-app notification, SMS), and the recipient (customer, admin, both). Common notification events include: new ticket submitted, ticket status updated, invoice generated, order status changed, and document uploaded. In-app notifications require a notification system to be built into the application. Email notifications require integration with a transactional email service.</p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Technical baseline requirements</h2>

      <div className="bg-[\#F7F9FC] rounded-xl p-6 border border-gray-200 mt-4">
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Browser and device support:</strong> Specify the minimum browsers and operating systems the portal must support. This affects which CSS and JavaScript features can be used without polyfills.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Accessibility standard:</strong> WCAG 2.1 AA is the widely adopted baseline for commercial web applications. Specify this as a requirement so accessibility is built in rather than retrofitted.</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Performance expectations:</strong> What are the acceptable load times for the most data-heavy views? Are there SLA requirements for uptime?</li>
          <li className="flex gap-2"><span className="text-[\#3ECF9E]">+</span><strong>Data security and retention:</strong> What categories of data will be stored? Are there regulatory requirements (GDPR, HIPAA, SOC 2) that affect how data is stored, accessed, and deleted? What is the data retention policy?</li>
        </ul>
      </div>

      <p>Before the first sprint, decide on the tech stack, hosting provider, and authentication approach. These decisions affect how the project is architected and should not be deferred until development is underway. For more on how these requirements connect to dashboard and application UX, see our <Link to="/resources/saas-dashboard-ux-checklist/" className="text-[\#3ECF9E] hover:underline font-medium">SaaS dashboard UX checklist</Link>. Our <Link to="/web-development/" className="text-[\#3ECF9E] hover:underline font-medium">web development services</Link> team can facilitate a structured discovery session to work through these requirements before committing to a development scope.</p>

      <h2 className="text-[\#0B1220] font-bold text-xl mt-8 mb-3">Frequently asked questions</h2>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">How detailed should a requirements document be before development starts?</h3>
      <p>Enough detail to write acceptance criteria for each feature. A user story format is a useful structure: "As a [role], I can [action] so that [outcome]." Each story should have acceptance criteria that define what "done" looks like. Features without acceptance criteria are open to interpretation, which increases the risk of building something that does not match what was expected. You do not need to specify implementation details, but you do need to specify behaviour.</p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">How long does it take to build a customer portal?</h3>
      <p>Timeline varies significantly based on the number of features, the complexity of integrations, and the completeness of requirements at the start of development. A portal with a small number of clearly specified features and straightforward integrations can be scoped and estimated during a discovery session. Complex portals with multiple integrations, custom permission models, and regulatory requirements take longer to scope accurately. A technical discovery session is the most reliable way to produce a realistic estimate for your specific requirements.</p>

      <h3 className="text-[\#0B1220] font-semibold text-lg mt-6 mb-2">What happens during handover after the portal is built?</h3>
      <p>A well-structured handover covers: access to all environments and credentials transferred to the client, documentation of the deployment process and environment configuration, a review of the codebase structure for any internal developers who will maintain it, and a summary of ongoing maintenance considerations. Agree on what handover includes before development begins, not at the end of the project.</p>

    </ArticleLayout>
  )
}
