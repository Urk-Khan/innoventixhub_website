import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop
      const total = el.scrollHeight - el.clientHeight
      setProgress(total > 0 ? scrolled / total : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-0.5 pointer-events-none">
      <div
        className="h-full transition-none"
        style={{
          width: `${progress * 100}%`,
          background: 'linear-gradient(to right, #3ECF9E, #7c3aed)',
          boxShadow: '0 0 8px rgba(62,207,158,0.6)',
        }}
      />
    </div>
  )
}
