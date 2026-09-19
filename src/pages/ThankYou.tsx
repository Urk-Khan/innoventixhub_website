import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

export default function ThankYou() {
  return (
    <Layout>
      <section className="bg-[#0B1220] min-h-[60vh] flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 bg-[#3ECF9E]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[#3ECF9E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-4">Thank you for getting in touch</h1>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">We will review your message and follow up within one business day. If you have not booked a strategy call yet, you can do that below to speak with us sooner.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book/" className="bg-[#3ECF9E] text-[#0B1220] font-bold px-8 py-4 rounded-full hover:bg-[#2AB584] transition-colors">Book Free Strategy Call</Link>
            <Link to="/" className="border border-[#1D3A6E] text-gray-300 font-semibold px-8 py-4 rounded-full hover:border-[#3ECF9E] hover:text-[#3ECF9E] transition-colors">Back to Home</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold text-[#0B1220] mb-8 text-center">Next steps you can take now</h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { title: 'Explore services', desc: 'Browse the full service catalog to clarify what you need before the call.', href: '/content-creation/', label: 'View services' },
              { title: 'Read the guides', desc: 'Practical resources on automation, voice AI, video production, and web development.', href: '/resources/', label: 'Browse resources' },
              { title: 'About the team', desc: 'Learn who will be working on your project and how we collaborate.', href: '/about/', label: 'Meet the team' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                <h3 className="text-[#0B1220] font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{item.desc}</p>
                <Link to={item.href} className="text-[#3ECF9E] text-sm font-semibold hover:underline">{item.label} &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
