import { useEffect, useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  speed?: number // 0-1, how much the content moves relative to scroll
}

export default function ParallaxHero({ children, className = '', speed = 0.3 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => {
      const rect = el.getBoundingClientRect()
      // Only apply when section is partially visible
      if (rect.bottom < 0 || rect.top > window.innerHeight) return
      const offset = rect.top * speed
      el.style.transform = `translateY(${offset}px)`
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [speed])

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  )
}
