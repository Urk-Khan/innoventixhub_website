import Layout from '../components/Layout'

export default function Privacy() {
  return (
    <Layout>
      <section className="bg-[#0B1220] pt-20 pb-12">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-extrabold text-white">Privacy Policy</h1>
          <p className="text-gray-400 mt-3">This is a draft policy. Specific retention periods, legal jurisdiction, and formal legal review are pending.</p>
        </div>
      </section>
      <section className="bg-[#F7F9FC] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-gray">
          <div className="space-y-8 text-gray-700 text-sm leading-relaxed">
            <div>
              <h2 className="text-[#0B1220] font-bold text-xl mb-3">1. Who we are</h2>
              <p>This website is operated by Innoventix Hub. We provide services in content creation, AI automation, AI voice agent development, and web development. You can contact us at <a href="mailto:ubaid@persistbrands.com" className="text-[#3ECF9E]">ubaid@persistbrands.com</a> or by telephone at +1 (917) 795-4404.</p>
            </div>
            <div>
              <h2 className="text-[#0B1220] font-bold text-xl mb-3">2. Information we collect</h2>
              <p>When you use the contact form on this website, we collect the name, email address, and message content you provide. When you book a strategy call through our Calendly integration, Calendly collects scheduling and contact information under their own privacy policy. We do not collect payment information through this website. We may collect anonymised usage data such as page views through analytics tools if they are implemented. We do not currently use persistent advertising tracking.</p>
            </div>
            <div>
              <h2 className="text-[#0B1220] font-bold text-xl mb-3">3. How we use your information</h2>
              <p>Information submitted through the contact form is used solely to respond to your enquiry and, where relevant, to prepare for a project conversation. We do not sell, rent, or share your personal information with third parties except as required to deliver our services (for example, using an email delivery service) or as required by law.</p>
            </div>
            <div>
              <h2 className="text-[#0B1220] font-bold text-xl mb-3">4. Third-party services</h2>
              <p>This website uses Calendly for appointment scheduling. Calendly is subject to its own privacy policy. We may use analytics services to understand website usage. Any such services and their data practices will be documented here when implemented. Embedded YouTube videos use youtube-nocookie.com, which limits cookie placement until you interact with the player.</p>
            </div>
            <div>
              <h2 className="text-[#0B1220] font-bold text-xl mb-3">5. Cookies</h2>
              <p>Please see our <a href="/cookies/" className="text-[#3ECF9E]">Cookie Policy</a> for details on the cookies this site uses and how to manage them.</p>
            </div>
            <div>
              <h2 className="text-[#0B1220] font-bold text-xl mb-3">6. Your rights</h2>
              <p>Depending on your location, you may have rights to access, correct, or delete your personal information. To exercise these rights, contact us at <a href="mailto:ubaid@persistbrands.com" className="text-[#3ECF9E]">ubaid@persistbrands.com</a>. We will respond within a reasonable timeframe.</p>
            </div>
            <div>
              <h2 className="text-[#0B1220] font-bold text-xl mb-3">7. Data retention</h2>
              <p>We retain contact form submissions for as long as required to respond to your enquiry and manage any resulting project relationship. Specific retention periods will be defined as part of our formal data management practices, which are under development.</p>
            </div>
            <div>
              <h2 className="text-[#0B1220] font-bold text-xl mb-3">8. Changes to this policy</h2>
              <p>We may update this policy as our data practices become clearer. Material changes will be noted at the top of this page with a revision date.</p>
            </div>
            <div>
              <h2 className="text-[#0B1220] font-bold text-xl mb-3">9. Contact</h2>
              <p>Questions about this policy: <a href="mailto:ubaid@persistbrands.com" className="text-[#3ECF9E]">ubaid@persistbrands.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
