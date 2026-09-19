import { useEffect, useRef } from 'react'

// Fluid field canvas — slow-moving ambient color blobs (no Three.js)
// Inspired by fluid-field / warp-field shader aesthetics
export default function FluidCanvas({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef    = useRef(0)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const canvas  = canvasRef.current
    if (!canvas || reduced) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    // 6 large drifting blobs — alternating mint and violet — clearly visible
    const blobs = [
      { bx: 0.22, by: 0.38, ax: 0.26, ay: 0.18, sx: 0.13, sy: 0.17, px: 0.0, py: 1.20, r: 0.52, mint: true  },
      { bx: 0.74, by: 0.48, ax: 0.20, ay: 0.24, sx: 0.11, sy: 0.13, px: 2.1, py: 0.50, r: 0.44, mint: false },
      { bx: 0.50, by: 0.62, ax: 0.28, ay: 0.16, sx: 0.09, sy: 0.11, px: 1.0, py: 3.00, r: 0.54, mint: true  },
      { bx: 0.14, by: 0.72, ax: 0.16, ay: 0.20, sx: 0.15, sy: 0.10, px: 3.5, py: 0.80, r: 0.36, mint: false },
      { bx: 0.82, by: 0.28, ax: 0.22, ay: 0.26, sx: 0.12, sy: 0.14, px: 0.7, py: 2.30, r: 0.40, mint: true  },
      { bx: 0.38, by: 0.22, ax: 0.18, ay: 0.22, sx: 0.14, sy: 0.16, px: 1.8, py: 4.10, r: 0.38, mint: false },
    ]

    const draw = (now: number) => {
      const t = now * 0.001
      const W = canvas.width
      const H = canvas.height

      ctx.clearRect(0, 0, W, H)

      for (const b of blobs) {
        const x = (b.bx + Math.sin(t * b.sx + b.px) * b.ax) * W
        const y = (b.by + Math.cos(t * b.sy + b.py) * b.ay) * H
        const r = b.r * Math.min(W, H)

        const g = ctx.createRadialGradient(x, y, 0, x, y, r)
        if (b.mint) {
          g.addColorStop(0,    'rgba(62,207,158,0.16)')
          g.addColorStop(0.45, 'rgba(62,207,158,0.06)')
          g.addColorStop(1,    'rgba(62,207,158,0)')
        } else {
          g.addColorStop(0,    'rgba(124,58,237,0.12)')
          g.addColorStop(0.45, 'rgba(124,58,237,0.04)')
          g.addColorStop(1,    'rgba(124,58,237,0)')
        }

        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{ display: 'block', width: '100%', height: '100%' }}
    />
  )
}
