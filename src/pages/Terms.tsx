import Layout from '../components/Layout'

export default function Terms() {
  return (
    <Layout>
      <section className="bg-[#0B1220] pt-20 pb-12">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-extrabold text-white">Terms of Service</h1>
          <p className="text-gray-400 mt-3">This is a draft. Final terms will be completed with formal legal review once business-specific details are confirmed.</p>
        </div>
      </section>
      <section className="bg-[#F7F9FC] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-8 text-gray-700 text-sm leading-relaxed">
            <div>
              <h2 className="text-[#0B1220] font-bold text-xl mb-3">1. Acceptance</h2>
              <p>By using this website you agree to these terms. If you do not agree, please do not use the site. Using the site to enquire about or purchase services constitutes acceptance of these terms as they exist at the time of your enquiry.</p>
            </div>
            <div>
              <h2 className="text-[#0B1220] font-bold text-xl mb-3">2. Services</h2>
              <p>Innoventix Hub provides content creation, AI automation, AI voice agent development, and web development services. Specific deliverables, timelines, and payment terms are defined in individual project agreements or statements of work. This website provides information about services available; it does not constitute a service agreement.</p>
            </div>
            <div>
              <h2 className="text-[#0B1220] font-bold text-xl mb-3">3. Intellectual property</h2>
              <p>Content on this website including text, design, and code is the property of Innoventix Hub unless otherwise noted. Deliverables produced for clients are governed by the intellectual property clauses in the applicable project agreement. We do not claim ownership of materials, brand assets, or data provided by clients for use in their projects.</p>
            </div>
            <div>
              <h2 className="text-[#0B1220] font-bold text-xl mb-3">4. Accuracy of information</h2>
              <p>We aim to keep service descriptions, pricing references, and project status information accurate. Project status pages describe planned or in-development work and are clearly labeled as such. We do not guarantee that descriptions of planned features represent committed delivery timelines.</p>
            </div>
            <div>
              <h2 className="text-[#0B1220] font-bold text-xl mb-3">5. Limitation of liability</h2>
              <p>This website is provided for informational purposes. We are not liable for decisions made based on information on this site. Liability for services delivered under a project agreement is governed by that agreement. We do not guarantee specific business outcomes from services purchased.</p>
            </div>
            <div>
              <h2 className="text-[#0B1220] font-bold text-xl mb-3">6. External links</h2>
              <p>This site links to Calendly, YouTube, and other third-party services. We are not responsible for the content or practices of those services. Links are provided for convenience and do not imply endorsement.</p>
            </div>
            <div>
              <h2 className="text-[#0B1220] font-bold text-xl mb-3">7. Changes</h2>
              <p>We may update these terms. Continued use of the site after changes constitutes acceptance of the revised terms. Material changes will be noted at the top of this page.</p>
            </div>
            <div>
              <h2 className="text-[#0B1220] font-bold text-xl mb-3">8. Contact</h2>
              <p>Questions: <a href="mailto:ubaid@persistbrands.com" className="text-[#3ECF9E]">ubaid@persistbrands.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
