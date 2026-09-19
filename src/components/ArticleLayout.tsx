import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'

interface ArticleLayoutProps {
  title: string
  category: string
  categoryHref: string
  children: ReactNode
}

export default function ArticleLayout({ title, category, categoryHref, children }: ArticleLayoutProps) {
  return (
    <Layout>
      <section className="bg-[#0B1220] pt-20 pb-12">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <nav className="text-sm text-gray-500 mb-6 flex gap-2 flex-wrap">
            <Link to="/" className="hover:text-[#3ECF9E]">Home</Link><span>/</span>
            <Link to="/resources/" className="hover:text-[#3ECF9E]">Resources</Link><span>/</span>
            <span className="text-gray-300">{title}</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block bg-[#3ECF9E]/20 text-[#3ECF9E] text-xs font-semibold px-3 py-1 rounded-full mb-4">
              <Link to={categoryHref} className="hover:underline">{category}</Link>
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">{title}</h1>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="prose prose-gray max-w-none text-gray-700 text-[15px] leading-relaxed space-y-6">
            {children}
          </div>

          <div className="mt-16 bg-[#0B1220] rounded-2xl p-8 border border-[#1D3A6E] text-center">
            <h2 className="text-white font-bold text-xl mb-3">Ready to implement this in your business?</h2>
            <p className="text-gray-400 text-sm mb-6">Book a free strategy call to discuss how these ideas apply to your specific situation and what a practical next step looks like.</p>
            <Link to="/book/" className="inline-block bg-[#3ECF9E] text-[#0B1220] font-bold px-8 py-3 rounded-full hover:bg-[#2AB584] transition-colors">Book Free Strategy Call</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
