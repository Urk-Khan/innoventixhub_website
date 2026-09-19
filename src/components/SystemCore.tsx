import { useEffect, useRef } from 'react'

interface Module {
  label: string
  sub: string
  rx: number
  ry: number
  speed: number // radians per ms
  phase: number
}

const MODULES: Module[] = [
  { label: 'Content', sub: 'Video · YouTube · UGC',        rx: 145, ry:  94, speed:  0.00068, phase: -0.45 },
  { label: 'Automation', sub: 'n8n · GHL · CRM',           rx: 192, ry: 125, speed: -0.00046, phase:  2.25 },
  { label: 'Voice AI', sub: 'Retell · Vapi · Pipecat',     rx: 165, ry: 107, speed:  0.00086, phase:  3.85 },
  { label: 'Web Dev', sub: 'React · Next.js · WordPress',  rx: 216, ry: 140, speed: -0.00060, phase:  0.95 },
]

const CX = 260
const CY = 238

export default function SystemCore({ className = '' }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef       = useRef<SVGSVGElement>(null)
  const nodeRefs     = useRef<(SVGGElement | null)[]>([null, null, null, null])
  const lineRefs     = useRef<(SVGLineElement | null)[]>([null, null, null, null])
  const dotRefs      = useRef<(SVGCircleElement | null)[]>([null, null, null, null])
  const mouseRef     = useRef({ x: 0, y: 0 })
  const rafRef       = useRef(0)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const container = containerRef.current
    if (!container || reduced) return

    const handleMouse = (e: MouseEvent) => {
      const r = container.getBoundingClientRect()
      mouseRef.current = {
        x: ((e.clientX - r.left) / r.width  - 0.5) * 2,
        y: ((e.clientY - r.top)  / r.height - 0.5) * 2,
      }
    }
    const handleLeave = () => { mouseRef.current = { x: 0, y: 0 } }
    container.addEventListener('mousemove', handleMouse)
    container.addEventListener('mouseleave', handleLeave)

    const start = performance.now()

    const animate = (now: number) => {
      const t = now - start

      // Gentle mouse-parallax tilt on the whole SVG
      const svg = svgRef.current
      if (svg) {
        const rx = mouseRef.current.y * -7
        const ry = mouseRef.current.x *  7
        svg.style.transform = `perspective(1100px) rotateX(${rx}deg) rotateY(${ry}deg)`
      }

      MODULES.forEach((m, i) => {
        const angle = m.phase + t * m.speed
        const x = CX + Math.cos(angle) * m.rx
        const y = CY + Math.sin(angle) * m.ry

        const node = nodeRefs.current[i]
        if (node) node.setAttribute('transform', `translate(${x.toFixed(2)},${y.toFixed(2)})`)

        const line = lineRefs.current[i]
        if (line) {
          line.setAttribute('x1', x.toFixed(2))
          line.setAttribute('y1', y.toFixed(2))
        }

        // Trailing glow dot: 60° behind on the orbit
        const trailAngle = angle - 0.8 * Math.sign(m.speed)
        const tx = CX + Math.cos(trailAngle) * m.rx
        const ty = CY + Math.sin(trailAngle) * m.ry
        const dot = dotRefs.current[i]
        if (dot) {
          dot.setAttribute('cx', tx.toFixed(2))
          dot.setAttribute('cy', ty.toFixed(2))
        }
      })

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(rafRef.current)
      container.removeEventListener('mousemove', handleMouse)
      container.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <div ref={containerRef} className={`relative select-none ${className}`} style={{ userSelect: 'none' }}>
      <svg
        ref={svgRef}
        viewBox="0 0 520 476"
        className="w-full h-full"
        aria-hidden="true"
        style={{ transition: 'transform 0.14s cubic-bezier(0.16,1,0.3,1)', transformOrigin: 'center' }}
      >
        <defs>
          {/* Core glow gradient */}
          <radialGradient id="sc-core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#3ECF9E" stopOpacity="0.35" />
            <stop offset="55%"  stopColor="#3ECF9E" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#3ECF9E" stopOpacity="0" />
          </radialGradient>
          {/* Card glass fill */}
          <linearGradient id="sc-card-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#0D1F3C" stopOpacity="0.97" />
            <stop offset="100%" stopColor="#080F24" stopOpacity="0.97" />
          </linearGradient>
          {/* Soft drop shadow filter */}
          <filter id="sc-card-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.5" />
          </filter>
          {/* Node glow filter */}
          <filter id="sc-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          {/* Ambient glow behind core */}
          <filter id="sc-ambient" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="22" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* ── Ambient core glow ── */}
        <circle cx={CX} cy={CY} r="110" fill="url(#sc-core-glow)" filter="url(#sc-ambient)" />

        {/* ── Orbit rings ── */}
        {MODULES.map((m, i) => (
          <ellipse
            key={`ring-${i}`}
            cx={CX} cy={CY}
            rx={m.rx} ry={m.ry}
            fill="none"
            stroke="rgba(62,207,158,0.1)"
            strokeWidth="1"
            strokeDasharray={i % 2 === 0 ? '5 9' : '2 12'}
          />
        ))}

        {/* ── Trailing glow dots on orbits ── */}
        {MODULES.map((m, i) => {
          const tx = CX + Math.cos(m.phase - 0.8) * m.rx
          const ty = CY + Math.sin(m.phase - 0.8) * m.ry
          return (
            <circle
              key={`trail-${i}`}
              ref={el => dotRefs.current[i] = el}
              cx={tx} cy={ty} r="3"
              fill="#3ECF9E" opacity="0.35"
              filter="url(#sc-glow)"
            />
          )
        })}

        {/* ── Connection lines from core to nodes ── */}
        {MODULES.map((m, i) => {
          const sx = CX + Math.cos(m.phase) * m.rx
          const sy = CY + Math.sin(m.phase) * m.ry
          return (
            <line
              key={`line-${i}`}
              ref={el => lineRefs.current[i] = el}
              x1={sx.toFixed(1)} y1={sy.toFixed(1)}
              x2={CX} y2={CY}
              stroke="rgba(62,207,158,0.22)"
              strokeWidth="1"
              strokeDasharray="4 7"
            />
          )
        })}

        {/* ── Central core ── */}
        {/* Outer ring */}
        <circle cx={CX} cy={CY} r="54"
          fill="rgba(11,18,32,0.7)"
          stroke="rgba(62,207,158,0.12)"
          strokeWidth="1.5"
        />
        {/* Middle ring — pulsing */}
        <circle cx={CX} cy={CY} r="35"
          fill="rgba(11,18,32,0.85)"
          stroke="rgba(62,207,158,0.22)"
          strokeWidth="1">
          <animate attributeName="r" values="35;37.5;35" dur="3.2s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="0.22;0.5;0.22" dur="3.2s" repeatCount="indefinite" />
        </circle>
        {/* Inner core glow */}
        <circle cx={CX} cy={CY} r="18"
          fill="rgba(62,207,158,0.12)"
          stroke="rgba(62,207,158,0.45)"
          strokeWidth="1">
          <animate attributeName="r" values="18;20;18" dur="2.4s" repeatCount="indefinite" />
        </circle>
        {/* Core dot */}
        <circle cx={CX} cy={CY} r="7" fill="#3ECF9E" filter="url(#sc-glow)">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
        </circle>
        {/* iH logotype */}
        <text x={CX} y={CY + 5}
          textAnchor="middle" dominantBaseline="middle"
          fill="rgba(11,18,32,1)" fontSize="9" fontFamily="Outfit,sans-serif" fontWeight="900"
          letterSpacing="0.5">iH</text>

        {/* ── Module node cards (position updated by RAF) ── */}
        {MODULES.map((m, i) => {
          const startX = CX + Math.cos(m.phase) * m.rx
          const startY = CY + Math.sin(m.phase) * m.ry
          return (
            <g
              key={`node-${i}`}
              ref={el => nodeRefs.current[i] = el}
              transform={`translate(${startX.toFixed(1)},${startY.toFixed(1)})`}
              filter="url(#sc-card-shadow)"
            >
              {/* Card */}
              <rect x="-54" y="-28" width="108" height="56" rx="11"
                fill="url(#sc-card-bg)"
                stroke="rgba(62,207,158,0.28)"
                strokeWidth="1"
              />
              {/* Icon region */}
              <rect x="-48" y="-22" width="22" height="22" rx="5"
                fill="rgba(62,207,158,0.12)"
                stroke="rgba(62,207,158,0.2)"
                strokeWidth="0.75"
              />

              {/* Per-module icons */}
              {i === 0 && (
                // Content: video play frame
                <g transform="translate(-48,-22) translate(11,11)">
                  <rect x="-7" y="-5.5" width="14" height="11" rx="2"
                    fill="none" stroke="#3ECF9E" strokeWidth="0.85" />
                  <polygon points="-2,-3.5 5,0 -2,3.5" fill="#3ECF9E" opacity="0.8" />
                </g>
              )}
              {i === 1 && (
                // Automation: node graph
                <g transform="translate(-48,-22) translate(11,11)">
                  <circle cx="-4" cy="-4" r="2.5" fill="none" stroke="#3ECF9E" strokeWidth="0.85" />
                  <circle cx="4"  cy="4"  r="2.5" fill="none" stroke="#3ECF9E" strokeWidth="0.85" />
                  <circle cx="4"  cy="-4" r="1.5" fill="#3ECF9E" opacity="0.5" />
                  <line x1="-1.5" y1="-4" x2="1.5" y2="-4" stroke="#3ECF9E" strokeWidth="0.7" />
                  <line x1="-2" y1="-1.5" x2="2" y2="1.5" stroke="#3ECF9E" strokeWidth="0.7" strokeDasharray="1.5 1.5" />
                </g>
              )}
              {i === 2 && (
                // Voice: waveform bars
                <g transform="translate(-48,-22) translate(11,11)">
                  {[[-6,3],[- 3,0],[0,-3],[3,0],[6,3]].map(([bx, by], wi) => (
                    <rect key={wi}
                      x={bx - 1.2} y={by - 1}
                      width="2.4" height={10 - Math.abs(by) * 0.8}
                      rx="1.2" fill="#3ECF9E" opacity={0.9 - wi * 0.1}
                    />
                  ))}
                </g>
              )}
              {i === 3 && (
                // Web Dev: browser chrome
                <g transform="translate(-48,-22) translate(11,11)">
                  <rect x="-7" y="-6" width="14" height="12" rx="2"
                    fill="none" stroke="#3ECF9E" strokeWidth="0.85" />
                  <line x1="-7" y1="-2.5" x2="7" y2="-2.5" stroke="#3ECF9E" strokeWidth="0.6" />
                  {[-5,-3,-1].map((cx, di) => (
                    <circle key={di} cx={cx} cy="-4.3" r="0.8" fill="#3ECF9E" opacity={0.7 - di * 0.15} />
                  ))}
                  <rect x="-5" y="-0.5" width="10" height="1.2" rx="0.6" fill="rgba(62,207,158,0.3)" />
                  <rect x="-5" y="2" width="7" height="1.2" rx="0.6" fill="rgba(62,207,158,0.2)" />
                </g>
              )}

              {/* Module label */}
              <text x="-18" y="-10"
                fill="white" fontSize="9.5"
                fontFamily="Outfit,sans-serif" fontWeight="700">
                {m.label}
              </text>
              {/* Subtitle */}
              <text x="-18" y="2"
                fill="#6b7280" fontSize="7.2"
                fontFamily="Inter,sans-serif">
                {m.sub}
              </text>

              {/* Live indicator */}
              <circle cx="46" cy="-22" r="3.5" fill="#3ECF9E" opacity="0.8">
                <animate
                  attributeName="opacity"
                  values="0.8;0.25;0.8"
                  dur={`${1.6 + i * 0.35}s`}
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="46" cy="-22" r="6" fill="none" stroke="#3ECF9E" strokeWidth="0.6">
                <animate
                  attributeName="r"
                  values="3.5;7;3.5"
                  dur={`${1.6 + i * 0.35}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.5;0;0.5"
                  dur={`${1.6 + i * 0.35}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          )
        })}

        {/* ── Outer decorative orbit dots ── */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const angle = (deg * Math.PI) / 180
          const ox = CX + Math.cos(angle) * 245
          const oy = CY + Math.sin(angle) * 160
          return (
            <circle key={`outer-${i}`} cx={ox} cy={oy} r="1.5"
              fill="rgba(62,207,158,0.25)">
              <animate
                attributeName="opacity"
                values="0.25;0.6;0.25"
                dur={`${2.5 + i * 0.5}s`}
                begin={`${i * 0.4}s`}
                repeatCount="indefinite"
              />
            </circle>
          )
        })}
      </svg>
    </div>
  )
}
