import { useEffect, useRef } from 'react'

interface Orb {
  x: number; y: number; r: number; vx: number; vy: number
  color: string; opacity: number; phase: number
}

interface Props {
  count?: number
  className?: string
}

export default function FloatingOrbs({ count = 6, className = '' }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const scrollRef = useRef(0)
  const orbsRef = useRef<Orb[]>([])
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const colors = ['62,207,158', '124,58,237', '62,207,158', '124,58,237', '62,207,158', '100,200,255']

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    orbsRef.current = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 80 + Math.random() * 180,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.3,
      color: colors[i % colors.length],
      opacity: 0.04 + Math.random() * 0.06,
      phase: Math.random() * Math.PI * 2,
    }))

    const onScroll = () => { scrollRef.current = window.scrollY }
    window.addEventListener('scroll', onScroll, { passive: true })

    let t = 0
    const draw = () => {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.008
      const scrollOffset = scrollRef.current * 0.02

      for (const orb of orbsRef.current) {
        // Drift + gentle scroll parallax
        orb.x += orb.vx
        orb.y += orb.vy + Math.sin(t + orb.phase) * 0.15

        // Scroll influence - each orb drifts slightly with scroll
        const yWithScroll = orb.y - scrollOffset * (orb.r / 300)

        if (orb.x < -orb.r) orb.x = canvas.width + orb.r
        if (orb.x > canvas.width + orb.r) orb.x = -orb.r
        if (orb.y < -orb.r) orb.y = canvas.height + orb.r
        if (orb.y > canvas.height + orb.r) orb.y = -orb.r

        const pulse = orb.opacity * (0.85 + 0.15 * Math.sin(t * 1.2 + orb.phase))
        const grad = ctx.createRadialGradient(orb.x, yWithScroll, 0, orb.x, yWithScroll, orb.r)
        grad.addColorStop(0, `rgba(${orb.color},${pulse})`)
        grad.addColorStop(1, `rgba(${orb.color},0)`)
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(orb.x, yWithScroll, orb.r, 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  )
}
