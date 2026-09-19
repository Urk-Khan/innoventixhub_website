import Layout from '../components/Layout'

export default function Cookies() {
  return (
    <Layout>
      <section className="bg-[#0B1220] pt-20 pb-12">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-extrabold text-white">Cookie Policy</h1>
          <p className="text-gray-400 mt-3">This policy describes how cookies are used on the Innoventix Hub website.</p>
        </div>
      </section>
      <section className="bg-[#F7F9FC] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-8 text-gray-700 text-sm leading-relaxed">
            <div>
              <h2 className="text-[#0B1220] font-bold text-xl mb-3">What are cookies</h2>
              <p>Cookies are small text files placed on your device by a website. They allow the site to remember information about your visit and can be used for functionality, performance measurement, and advertising purposes.</p>
            </div>
            <div>
              <h2 className="text-[#0B1220] font-bold text-xl mb-3">Cookies this site uses</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-[#0B1220] mb-2">Strictly necessary</h3>
                  <p>These cookies are required for the website to function. They do not track you across sites. This site uses session-level technical cookies for navigation and form state where applicable.</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-[#0B1220] mb-2">Calendly</h3>
                  <p>When you access the booking widget embedded from Calendly, Calendly may set cookies on your device. These are governed by Calendly's own cookie policy. We use the nocookie embed configuration where supported.</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-[#0B1220] mb-2">YouTube</h3>
                  <p>Video embeds on this site use youtube-nocookie.com, which delays cookie placement until you click to play a video. If you interact with a video player, YouTube may set cookies for playback preferences and analytics.</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-100">
                  <h3 className="font-semibold text-[#0B1220] mb-2">Analytics</h3>
                  <p>If analytics cookies are implemented, they will be listed here with their purpose and provider. No advertising or cross-site tracking cookies are currently in use.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-[#0B1220] font-bold text-xl mb-3">Managing cookies</h2>
              <p>You can control cookies through your browser settings. Most browsers allow you to block or delete cookies. Note that blocking cookies may affect the functionality of booking and video features on this site. Instructions for managing cookies are available in your browser's help documentation.</p>
            </div>
            <div>
              <h2 className="text-[#0B1220] font-bold text-xl mb-3">Contact</h2>
              <p>Questions about cookies: <a href="mailto:ubaid@persistbrands.com" className="text-[#3ECF9E]">ubaid@persistbrands.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
