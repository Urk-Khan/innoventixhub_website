import { Link } from 'react-router-dom'
import { useRef, useState, useEffect, useCallback } from 'react'

const unsplash = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

// ─── Premium SVG Illustrations ────────────────────────────────────────────────

const CameraIllustration = () => (
  <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <defs>
      <radialGradient id="cam-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#3ECF9E" stopOpacity="0.35" />
        <stop offset="60%" stopColor="#3ECF9E" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#3ECF9E" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="cam-lens" cx="38%" cy="35%" r="70%">
        <stop offset="0%" stopColor="#a7f3d0" stopOpacity="0.25" />
        <stop offset="50%" stopColor="#3ECF9E" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#052e1c" stopOpacity="0.6" />
      </radialGradient>
      <filter id="cam-blur">
        <feGaussianBlur stdDeviation="6" result="b" />
        <feComposite in="SourceGraphic" in2="b" operator="over" />
      </filter>
    </defs>

    {/* Ambient glow */}
    <circle cx="110" cy="110" r="85" fill="url(#cam-glow)" />

    {/* Tick marks ring */}
    {Array.from({ length: 36 }).map((_, i) => {
      const a = (i * 10 - 90) * Math.PI / 180
      const r1 = 78, r2 = i % 9 === 0 ? 68 : i % 3 === 0 ? 71 : 74
      return (
        <line key={i}
          x1={110 + r1 * Math.cos(a)} y1={110 + r1 * Math.sin(a)}
          x2={110 + r2 * Math.cos(a)} y2={110 + r2 * Math.sin(a)}
          stroke="rgba(62,207,158,0.35)" strokeWidth={i % 9 === 0 ? 1.8 : i % 3 === 0 ? 1.2 : 0.7}
        />
      )
    })}
    {/* Outer ring */}
    <circle cx="110" cy="110" r="80" fill="none" stroke="rgba(62,207,158,0.2)" strokeWidth="1" />

    {/* Aperture ring */}
    <circle cx="110" cy="110" r="58" fill="rgba(0,0,0,0.55)" stroke="rgba(62,207,158,0.55)" strokeWidth="1.8" />

    {/* 8 aperture blades */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
      const a = (deg - 90) * Math.PI / 180
      const outer = 54
      const pivot = 22
      const bx = 110 + pivot * Math.cos(a)
      const by = 110 + pivot * Math.sin(a)
      const p1x = bx + outer * Math.cos(a - 0.55)
      const p1y = by + outer * Math.sin(a - 0.55)
      const p2x = bx + outer * Math.cos(a + 0.55)
      const p2y = by + outer * Math.sin(a + 0.55)
      return (
        <path key={deg}
          d={`M ${110 + 10 * Math.cos(a + Math.PI - 0.4)} ${110 + 10 * Math.sin(a + Math.PI - 0.4)} L ${p1x} ${p1y} Q ${110 + 56 * Math.cos(a)} ${110 + 56 * Math.sin(a)} ${p2x} ${p2y} L ${110 + 10 * Math.cos(a + Math.PI + 0.4)} ${110 + 10 * Math.sin(a + Math.PI + 0.4)} Z`}
          fill="rgba(62,207,158,0.11)" stroke="rgba(62,207,158,0.28)" strokeWidth="0.7"
        />
      )
    })}

    {/* Lens glass */}
    <circle cx="110" cy="110" r="24" fill="url(#cam-lens)" stroke="rgba(62,207,158,0.7)" strokeWidth="1.8" />
    <circle cx="110" cy="110" r="18" fill="rgba(62,207,158,0.07)" />

    {/* Lens shine */}
    <ellipse cx="103" cy="103" rx="5" ry="3.5" fill="rgba(255,255,255,0.18)" transform="rotate(-30 103 103)" />
    <ellipse cx="105" cy="105" rx="2" ry="1.2" fill="rgba(255,255,255,0.28)" transform="rotate(-30 105 105)" />

    {/* Play icon */}
    <polygon points="105,103 105,117 119,110" fill="rgba(62,207,158,0.9)" />

    {/* Record LED */}
    <circle cx="110" cy="110" r="6" fill="rgba(62,207,158,0.15)" filter="url(#cam-blur)" />

    {/* Film strip */}
    <rect x="18" y="186" width="184" height="22" rx="3" fill="rgba(62,207,158,0.05)" stroke="rgba(62,207,158,0.18)" strokeWidth="0.8" />
    {[0, 1, 2, 3, 4, 5, 6].map(i => (
      <rect key={i} x={24 + i * 25} y="191" width="14" height="12" rx="2"
        fill="rgba(62,207,158,0.12)" stroke="rgba(62,207,158,0.2)" strokeWidth="0.5" />
    ))}

    {/* Timeline bar */}
    <rect x="18" y="168" width="184" height="3" rx="1.5" fill="rgba(62,207,158,0.1)" />
    <rect x="18" y="168" width="110" height="3" rx="1.5" fill="rgba(62,207,158,0.55)" />
    <circle cx="128" cy="169.5" r="5.5" fill="#3ECF9E" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
  </svg>
)

const NetworkIllustration = () => (
  <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <defs>
      <radialGradient id="net-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#818cf8" stopOpacity="0.35" />
        <stop offset="60%" stopColor="#818cf8" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="net-center" cx="40%" cy="38%" r="60%">
        <stop offset="0%" stopColor="#c7d2fe" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#818cf8" stopOpacity="0.05" />
      </radialGradient>
    </defs>

    <circle cx="110" cy="110" r="88" fill="url(#net-glow)" />

    {/* Background hexagonal dots */}
    {[-1, 0, 1].flatMap(row => [-1, 0, 1].map(col => {
      const x = 110 + col * 38 + (row % 2) * 19
      const y = 110 + row * 33
      return <circle key={`${row}${col}`} cx={x} cy={y} r="1.2" fill="rgba(129,140,248,0.2)" />
    }))}

    {/* Connection lines to satellites */}
    {[0, 60, 120, 180, 240, 300].map(deg => {
      const a = (deg - 90) * Math.PI / 180
      const sx = 110 + 52 * Math.cos(a), sy = 110 + 52 * Math.sin(a)
      return (
        <line key={deg} x1="110" y1="110" x2={sx} y2={sy}
          stroke="rgba(129,140,248,0.35)" strokeWidth="1.2" strokeDasharray="4 3" />
      )
    })}

    {/* Outer orbit ring */}
    <circle cx="110" cy="110" r="66" fill="none" stroke="rgba(129,140,248,0.12)" strokeWidth="1" strokeDasharray="5 4" />

    {/* Satellite nodes */}
    {[0, 60, 120, 180, 240, 300].map((deg, i) => {
      const a = (deg - 90) * Math.PI / 180
      const x = 110 + 52 * Math.cos(a), y = 110 + 52 * Math.sin(a)
      const big = i % 2 === 0
      return (
        <g key={deg}>
          <circle cx={x} cy={y} r={big ? 10 : 8} fill="rgba(129,140,248,0.12)" stroke="rgba(129,140,248,0.45)" strokeWidth="1.3" />
          <circle cx={x} cy={y} r={big ? 5 : 3.5} fill={big ? 'rgba(129,140,248,0.7)' : 'rgba(129,140,248,0.45)'} />
          <circle cx={x} cy={y} r={big ? 2 : 1.5} fill="white" opacity="0.6" />
        </g>
      )
    })}

    {/* Inner ring */}
    <circle cx="110" cy="110" r="30" fill="rgba(129,140,248,0.07)" stroke="rgba(129,140,248,0.35)" strokeWidth="1.2" />
    <circle cx="110" cy="110" r="22" fill="rgba(129,140,248,0.12)" stroke="rgba(129,140,248,0.5)" strokeWidth="1.5" />

    {/* Center hex polygon */}
    <polygon
      points={[0, 60, 120, 180, 240, 300].map(deg => {
        const a = (deg - 90) * Math.PI / 180
        return `${110 + 13 * Math.cos(a)},${110 + 13 * Math.sin(a)}`
      }).join(' ')}
      fill="none" stroke="rgba(129,140,248,0.5)" strokeWidth="1"
    />
    <circle cx="110" cy="110" r="14" fill="url(#net-center)" />

    {/* Center glow dot */}
    <circle cx="110" cy="110" r="7" fill="rgba(129,140,248,0.85)" />
    <circle cx="110" cy="110" r="3.5" fill="white" opacity="0.7" />

    {/* Data flow bars */}
    <rect x="22" y="188" width="176" height="3" rx="1.5" fill="rgba(129,140,248,0.1)" />
    {[0, 1, 2, 3].map(i => (
      <rect key={i} x={22 + i * 46} y="188" width={[36, 28, 40, 20][i]} height="3" rx="1.5"
        fill="rgba(129,140,248,0.5)" opacity={0.5 + i * 0.1} />
    ))}
    <rect x="22" y="196" width="80" height="2" rx="1" fill="rgba(129,140,248,0.25)" />
    <rect x="22" y="202" width="120" height="2" rx="1" fill="rgba(129,140,248,0.18)" />
    <rect x="22" y="208" width="60" height="2" rx="1" fill="rgba(129,140,248,0.12)" />
  </svg>
)

const MicIllustration = () => (
  <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <defs>
      <radialGradient id="mic-glow" cx="50%" cy="40%" r="55%">
        <stop offset="0%" stopColor="#34d399" stopOpacity="0.35" />
        <stop offset="70%" stopColor="#34d399" stopOpacity="0.07" />
        <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="mic-body" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a7f3d0" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#34d399" stopOpacity="0.07" />
      </linearGradient>
    </defs>

    <ellipse cx="110" cy="100" rx="78" ry="88" fill="url(#mic-glow)" />

    {/* Sound arcs — outer */}
    {[60, 50, 40].map((r, i) => (
      <path key={i}
        d={`M ${110 - r} ${100} A ${r} ${r} 0 0 0 ${110 + r} ${100}`}
        stroke="rgba(52,211,153,0.2)" strokeWidth={1 - i * 0.2} fill="none"
        transform="translate(0,0)"
      />
    ))}
    {[60, 50, 40].map((r, i) => (
      <path key={i}
        d={`M ${110 - r} ${100} A ${r} ${r} 0 0 1 ${110 + r} ${100}`}
        stroke="rgba(52,211,153,0.2)" strokeWidth={1 - i * 0.2} fill="none"
      />
    ))}

    {/* Outer arc rings */}
    <path d="M 58 100 A 52 52 0 0 1 162 100" stroke="rgba(52,211,153,0.22)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M 44 100 A 66 66 0 0 1 176 100" stroke="rgba(52,211,153,0.14)" strokeWidth="1" fill="none" strokeLinecap="round" />
    <path d="M 58 100 A 52 52 0 0 0 162 100" stroke="rgba(52,211,153,0.22)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M 44 100 A 66 66 0 0 0 176 100" stroke="rgba(52,211,153,0.14)" strokeWidth="1" fill="none" strokeLinecap="round" />

    {/* Mic body */}
    <rect x="93" y="36" width="34" height="70" rx="17" fill="url(#mic-body)" stroke="rgba(52,211,153,0.6)" strokeWidth="1.8" />

    {/* Mic grill lines */}
    {[52, 60, 68, 76, 84, 92].map(y => (
      <line key={y} x1="97" y1={y} x2="123" y2={y} stroke="rgba(52,211,153,0.3)" strokeWidth="0.8" />
    ))}

    {/* Mic capsule highlight */}
    <rect x="97" y="40" width="26" height="24" rx="13" fill="rgba(52,211,153,0.12)" />

    {/* Stand arm */}
    <path d="M 77 106 Q 77 126 110 130 Q 143 126 143 106"
      stroke="rgba(52,211,153,0.5)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <line x1="110" y1="130" x2="110" y2="152" stroke="rgba(52,211,153,0.5)" strokeWidth="2" strokeLinecap="round" />
    <rect x="84" y="151" width="52" height="4" rx="2" fill="rgba(52,211,153,0.4)" />

    {/* Waveform bars at bottom */}
    {[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((i) => {
      const heights = [8, 14, 22, 18, 30, 38, 30, 18, 22, 14, 8]
      const h = heights[i + 5]
      const x = 110 + i * 13
      return (
        <rect key={i} x={x - 4} y={183 - h} width="8" height={h} rx="4"
          fill={i === 0 ? '#34d399' : 'rgba(52,211,153,0.45)'}
          opacity={i === 0 ? 1 : 0.7}
        />
      )
    })}

    {/* Active LED */}
    <circle cx="110" cy="62" r="4.5" fill="rgba(52,211,153,0.2)" />
    <circle cx="110" cy="62" r="2.5" fill="#34d399" opacity="0.9" />
  </svg>
)

const CodeIllustration = () => (
  <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <defs>
      <radialGradient id="code-glow" cx="50%" cy="45%" r="55%">
        <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
        <stop offset="70%" stopColor="#60a5fa" stopOpacity="0.07" />
        <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="code-screen" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#0a1929" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#060f1e" stopOpacity="0.95" />
      </linearGradient>
    </defs>

    <ellipse cx="110" cy="110" rx="82" ry="80" fill="url(#code-glow)" />

    {/* Browser chrome outer */}
    <rect x="22" y="42" width="176" height="136" rx="8" fill="url(#code-screen)" stroke="rgba(96,165,250,0.35)" strokeWidth="1.5" />

    {/* Title bar */}
    <rect x="22" y="42" width="176" height="28" rx="8" fill="rgba(96,165,250,0.1)" />
    <rect x="22" y="58" width="176" height="12" fill="rgba(96,165,250,0.06)" />

    {/* Traffic dots */}
    <circle cx="38" cy="56" r="5" fill="rgba(239,68,68,0.75)" />
    <circle cx="53" cy="56" r="5" fill="rgba(251,191,36,0.75)" />
    <circle cx="68" cy="56" r="5" fill="rgba(52,211,153,0.75)" />

    {/* URL bar */}
    <rect x="82" y="51" width="96" height="10" rx="5" fill="rgba(96,165,250,0.1)" stroke="rgba(96,165,250,0.25)" strokeWidth="0.6" />
    <rect x="86" y="54" width="28" height="4" rx="2" fill="rgba(96,165,250,0.3)" />

    {/* Code lines inside editor */}
    {/* Line numbers */}
    {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
      <rect key={`ln${i}`} x="28" y={78 + i * 10} width="10" height="3" rx="1.5"
        fill="rgba(96,165,250,0.18)" />
    ))}

    {/* Code content — syntax colored */}
    <rect x="44" y="78" width="32" height="3" rx="1.5" fill="rgba(167,139,250,0.7)" />
    <rect x="80" y="78" width="48" height="3" rx="1.5" fill="rgba(96,165,250,0.6)" />
    <rect x="132" y="78" width="20" height="3" rx="1.5" fill="rgba(167,139,250,0.5)" />

    <rect x="52" y="88" width="22" height="3" rx="1.5" fill="rgba(52,211,153,0.7)" />
    <rect x="78" y="88" width="14" height="3" rx="1.5" fill="rgba(251,191,36,0.6)" />
    <rect x="96" y="88" width="38" height="3" rx="1.5" fill="rgba(255,255,255,0.25)" />

    <rect x="52" y="98" width="16" height="3" rx="1.5" fill="rgba(52,211,153,0.7)" />
    <rect x="72" y="98" width="28" height="3" rx="1.5" fill="rgba(255,165,100,0.6)" />
    <rect x="104" y="98" width="22" height="3" rx="1.5" fill="rgba(255,255,255,0.2)" />

    <rect x="52" y="108" width="44" height="3" rx="1.5" fill="rgba(167,139,250,0.5)" />
    <rect x="100" y="108" width="30" height="3" rx="1.5" fill="rgba(96,165,250,0.5)" />

    <rect x="52" y="118" width="20" height="3" rx="1.5" fill="rgba(52,211,153,0.7)" />
    <rect x="76" y="118" width="42" height="3" rx="1.5" fill="rgba(255,255,255,0.2)" />

    {/* Highlighted line */}
    <rect x="22" y="125" width="176" height="12" rx="0" fill="rgba(96,165,250,0.07)" />
    <rect x="44" y="128" width="18" height="3" rx="1.5" fill="rgba(52,211,153,0.8)" />
    <rect x="66" y="128" width="52" height="3" rx="1.5" fill="rgba(255,165,100,0.7)" />
    <rect x="122" y="128" width="24" height="3" rx="1.5" fill="rgba(255,255,255,0.35)" />
    {/* Active cursor */}
    <rect x="150" y="126" width="2" height="7" rx="1" fill="rgba(96,165,250,0.9)" />

    <rect x="44" y="138" width="30" height="3" rx="1.5" fill="rgba(167,139,250,0.5)" />
    <rect x="78" y="138" width="50" height="3" rx="1.5" fill="rgba(255,255,255,0.18)" />

    <rect x="44" y="148" width="56" height="3" rx="1.5" fill="rgba(96,165,250,0.45)" />

    {/* Bottom bar */}
    <rect x="22" y="168" width="176" height="10" rx="0" fill="rgba(96,165,250,0.08)" stroke="rgba(96,165,250,0.15)" strokeWidth="0.5" />
    <rect x="26" y="171" width="6" height="4" rx="1" fill="rgba(52,211,153,0.6)" />
    <rect x="36" y="171" width="28" height="4" rx="1.5" fill="rgba(255,255,255,0.12)" />
    <rect x="68" y="171" width="20" height="4" rx="1.5" fill="rgba(255,255,255,0.08)" />
    <rect x="178" y="171" width="14" height="4" rx="1.5" fill="rgba(96,165,250,0.4)" />

    {/* React atom symbol overlay — subtle */}
    <ellipse cx="110" cy="110" rx="36" ry="14" fill="none" stroke="rgba(96,165,250,0.08)" strokeWidth="1" transform="rotate(0 110 110)" />
    <ellipse cx="110" cy="110" rx="36" ry="14" fill="none" stroke="rgba(96,165,250,0.08)" strokeWidth="1" transform="rotate(60 110 110)" />
    <ellipse cx="110" cy="110" rx="36" ry="14" fill="none" stroke="rgba(96,165,250,0.08)" strokeWidth="1" transform="rotate(120 110 110)" />

    {/* Status dots */}
    <circle cx="152" cy="174.5" r="2.5" fill="rgba(52,211,153,0.7)" />
    <circle cx="160" cy="174.5" r="2.5" fill="rgba(251,191,36,0.5)" />
    <circle cx="168" cy="174.5" r="2.5" fill="rgba(239,68,68,0.5)" />

    {/* Progress bar at very bottom */}
    <rect x="22" y="181" width="176" height="3" rx="1.5" fill="rgba(96,165,250,0.08)" />
    <rect x="22" y="181" width="132" height="3" rx="1.5" fill="rgba(96,165,250,0.45)" />
    <rect x="22" y="187" width="80" height="2" rx="1" fill="rgba(96,165,250,0.2)" />
    <rect x="22" y="193" width="110" height="2" rx="1" fill="rgba(96,165,250,0.15)" />
    <rect x="22" y="199" width="60" height="2" rx="1" fill="rgba(96,165,250,0.1)" />
  </svg>
)

// ─── Cover corner ornament ─────────────────────────────────────────────────────
function CornerOrnament({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" style={{ width: 16, height: 16 }}>
      <line x1="0" y1="8" x2="8" y2="0" stroke={color} strokeWidth="0.8" opacity="0.6" />
      <line x1="0" y1="16" x2="16" y2="0" stroke={color} strokeWidth="0.6" opacity="0.3" />
      <rect x="0" y="0" width="4" height="4" rx="0.5" fill={color} opacity="0.5" />
    </svg>
  )
}

const MANUALS = [
  {
    vol: 'I', num: '01', title: 'Content Creation',
    tagline: 'Video, YouTube & AI UGC',
    href: '/content-creation/',
    accent: '#3ECF9E',
    coverBg: 'linear-gradient(165deg, #071812 0%, #040e0a 60%, #030a07 100%)',
    borderColor: 'rgba(62,207,158,0.3)',
    spineGrad: ['#3ECF9E80', '#3ECF9E25', '#3ECF9E80'],
    headline: 'Stories that stop the scroll.',
    sub: 'Video editing, YouTube automation, and AI UGC that publish consistently and look professional at every format.',
    img: 'photo-1618329027137-a520b57c6606',
    imgAlt: 'Dark video editing workstation with multiple monitors',
    tags: ['Video Editing', 'YouTube Automation', 'AI UGC'],
    badge: 'Video, UGC & YouTube ops',
    Illustration: CameraIllustration,
  },
  {
    vol: 'II', num: '02', title: 'AI Automation',
    tagline: 'n8n, GHL & CRM Workflows',
    href: '/ai-automation/',
    accent: '#818cf8',
    coverBg: 'linear-gradient(165deg, #0b0b1c 0%, #060611 60%, #040410 100%)',
    borderColor: 'rgba(129,140,248,0.3)',
    spineGrad: ['#818cf880', '#818cf825', '#818cf880'],
    headline: 'Work that runs without you.',
    sub: 'Lead capture, invoicing, CRM pipelines, and multi-step workflows built on n8n and GoHighLevel so your team focuses on what matters.',
    img: 'photo-1551288049-bebda4e38f71',
    imgAlt: 'Analytics dashboard showing performance metrics',
    tags: ['n8n', 'GoHighLevel', 'Custom CRM'],
    badge: 'n8n, GHL & custom workflows',
    Illustration: NetworkIllustration,
  },
  {
    vol: 'III', num: '03', title: 'AI Voice Agents',
    tagline: 'Retell, Vapi & Pipecat',
    href: '/ai-voice-agents/',
    accent: '#34d399',
    coverBg: 'linear-gradient(165deg, #061410 0%, #040d0a 60%, #020907 100%)',
    borderColor: 'rgba(52,211,153,0.3)',
    spineGrad: ['#34d39980', '#34d39925', '#34d39980'],
    headline: 'Every call answered, every time.',
    sub: 'Inbound call handling, lead qualification, and appointment booking deployed on Retell AI, Vapi, and Pipecat.',
    img: 'photo-1724185773486-0b39642e607e',
    imgAlt: 'Sound wave visualization on dark background',
    tags: ['Retell AI', 'Vapi', 'Pipecat'],
    badge: 'Retell, Vapi & Pipecat agents',
    Illustration: MicIllustration,
  },
  {
    vol: 'IV', num: '04', title: 'Web Development',
    tagline: 'React, Next.js & WordPress',
    href: '/web-development/',
    accent: '#60a5fa',
    coverBg: 'linear-gradient(165deg, #060f1e 0%, #040a17 60%, #020712 100%)',
    borderColor: 'rgba(96,165,250,0.3)',
    spineGrad: ['#60a5fa80', '#60a5fa25', '#60a5fa80'],
    headline: 'Sites built for performance.',
    sub: 'React, Next.js, HTML/CSS, and WordPress projects engineered to load fast, integrate deeply, and scale cleanly.',
    img: 'photo-1498050108023-c5249f4df085',
    imgAlt: 'MacBook showing code in a modern workspace',
    tags: ['React', 'Next.js', 'WordPress'],
    badge: 'React, Next.js & custom builds',
    Illustration: CodeIllustration,
  },
]

const TILTS = [
  { ry: -20, rx: 5, tz: -18, scale: 0.94 },
  { ry: -7,  rx: 2, tz:   0, scale: 0.98 },
  { ry:  7,  rx: 2, tz:   0, scale: 0.98 },
  { ry:  20, rx: 5, tz: -18, scale: 0.94 },
]

type Manual = typeof MANUALS[number]

function ServiceModal({ manual, onClose }: { manual: Manual; onClose: () => void }) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', h)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', h); document.body.style.overflow = '' }
  }, [onClose])

  return (
    <div className="fixed inset-0 flex items-center justify-center" style={{ zIndex: 9999 }} onClick={onClose}>
      <div className="absolute inset-0" style={{ background: 'rgba(3,7,18,0.92)', backdropFilter: 'blur(14px)' }} />
      <div
        className="relative w-full max-w-[1080px] mx-4 sm:mx-8 rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #070e1c, #050912)',
          border: `1px solid ${manual.accent}22`,
          boxShadow: `0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px ${manual.accent}18, inset 0 1px 0 rgba(255,255,255,0.04)`,
          maxHeight: '90vh',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Accent glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `radial-gradient(ellipse 50% 50% at ${MANUALS.indexOf(manual) < 2 ? '20%' : '80%'} 50%, ${manual.accent}0e 0%, transparent 60%)`,
        }} />
        <div className="absolute inset-0 grid-texture pointer-events-none" style={{ opacity: 0.2 }} />

        {/* Close */}
        <button onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:bg-white/10"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.55)' }}
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative grid lg:grid-cols-2 min-h-[500px]">
          {/* Left */}
          <div className="flex flex-col justify-center px-8 sm:px-12 py-12">
            <div className="flex items-center gap-3 mb-7">
              <span className="font-mono font-black text-5xl leading-none select-none" style={{ color: `${manual.accent}1a` }}>{manual.num}</span>
              <span className="h-px w-7 opacity-40" style={{ background: manual.accent }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: manual.accent }}>{manual.title}</span>
            </div>
            <h2 className="font-display font-black text-white leading-[0.93] mb-5" style={{ fontSize: 'clamp(1.9rem, 4.2vw, 3.4rem)' }}>
              {manual.headline}
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-7 max-w-lg">{manual.sub}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {manual.tags.map(t => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-full font-semibold"
                  style={{ background: `${manual.accent}12`, border: `1px solid ${manual.accent}30`, color: manual.accent }}>
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to={manual.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-display font-bold text-sm transition-all hover:gap-3 hover:opacity-90"
                style={{ background: manual.accent, color: '#050912' }} onClick={onClose}>
                Explore {manual.title}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="https://calendly.com/ubaid-persistbrands/free-consultation" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-display font-semibold text-sm text-gray-300 hover:text-white transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                Book Free Strategy Call
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="hidden lg:flex items-center justify-center p-8">
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img src={unsplash(manual.img, 900, 700)} alt={manual.imgAlt} className="w-full h-full object-cover" style={{ opacity: 0.72 }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 35%, rgba(5,9,18,0.65))' }} />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="glass rounded-xl px-4 py-3 flex items-center gap-3" style={{ border: `1px solid ${manual.accent}22` }}>
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: manual.accent }} />
                  <span className="text-white text-sm font-medium">{manual.badge}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative flex items-center justify-between px-8 sm:px-12 py-3.5"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <span className="text-gray-600 text-xs tracking-widest uppercase">Field Manual &middot; Vol. {manual.vol} of IV</span>
          <div className="flex gap-1.5">
            {MANUALS.map((m) => (
              <div key={m.vol} className="rounded-full transition-all duration-300"
                style={{ width: m.vol === manual.vol ? '18px' : '5px', height: '5px', background: m.vol === manual.vol ? manual.accent : 'rgba(255,255,255,0.12)' }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ServiceShelf() {
  const shelfRef = useRef<HTMLDivElement>(null)
  const [activeManual, setActiveManual] = useState<Manual | null>(null)
  const openModal = useCallback((m: Manual) => setActiveManual(m), [])
  const closeModal = useCallback(() => setActiveManual(null), [])

  return (
    <>
      <section className="relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #08111F 0%, #06100c 40%, #070e12 100%)', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

        {/* Ghost text */}
        <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center select-none pointer-events-none" style={{ zIndex: 0 }}>
          <span style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            fontSize: 'clamp(14vw, 20vw, 28vw)',
            fontWeight: 700,
            letterSpacing: '-0.06em',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(255,255,255,0.03)',
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}>
            Services
          </span>
        </div>

        {/* Header */}
        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 w-full mb-8 mt-20" style={{ zIndex: 2 }}>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="chapter-label mb-2">Field Manuals</p>
              <h2 style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: 'clamp(2rem, 4vw, 3.4rem)', fontWeight: 500, color: '#f7f2eb', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
                Four disciplines.<br />
                <em style={{ color: 'rgba(195,164,123,0.85)', fontStyle: 'italic' }}>One integrated system.</em>
              </h2>
            </div>
            <p className="text-gray-700 text-[10px] pb-1 tracking-[0.3em] uppercase">Vol. I – IV</p>
          </div>
        </div>

        {/* Shelf */}
        <div ref={shelfRef} className="relative w-full overflow-x-auto pb-8"
          style={{ zIndex: 2, scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
          <div className="flex gap-5 lg:gap-7"
            style={{ width: 'max-content', padding: '32px max(24px, calc(50vw - 560px)) 48px', perspective: '1200px', perspectiveOrigin: '50% 40%' }}>
            {MANUALS.map((m, i) => {
              const t = TILTS[i]
              const { Illustration } = m
              return (
                <div key={m.vol}
                  className="shrink-0 cursor-pointer"
                  style={{
                    width: '270px',
                    scrollSnapAlign: 'center',
                    transform: `rotateY(${t.ry}deg) rotateX(${t.rx}deg) translateZ(${t.tz}px) scale(${t.scale})`,
                    transformOrigin: 'center bottom',
                    transition: 'transform 0.55s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease',
                  }}
                  onClick={() => openModal(m)}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.transform = 'rotateY(0deg) rotateX(-1.5deg) translateZ(44px) scale(1.04)'
                    el.style.boxShadow = `0 44px 90px rgba(0,0,0,0.75), 0 0 0 1.5px ${m.accent}45, 0 0 30px ${m.accent}18`
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.transform = `rotateY(${t.ry}deg) rotateX(${t.rx}deg) translateZ(${t.tz}px) scale(${t.scale})`
                    el.style.boxShadow = ''
                  }}
                >
                  {/* Book cover */}
                  <div className="relative flex flex-col overflow-hidden"
                    style={{
                      height: '420px',
                      background: m.coverBg,
                      border: `1px solid ${m.borderColor}`,
                      borderRadius: '3px 14px 14px 3px',
                      boxShadow: `inset -4px 0 10px rgba(0,0,0,0.5), 6px 14px 40px rgba(0,0,0,0.6)`,
                    }}>

                    {/* Spine */}
                    <div className="absolute left-0 top-0 bottom-0 w-[7px] z-10"
                      style={{ background: `linear-gradient(180deg, ${m.spineGrad[0]}, ${m.spineGrad[1]} 50%, ${m.spineGrad[2]})` }} />

                    {/* Subtle dot pattern bg */}
                    <div className="absolute inset-0 pointer-events-none" style={{
                      backgroundImage: `radial-gradient(circle, ${m.accent}08 1px, transparent 1px)`,
                      backgroundSize: '18px 18px',
                    }} />

                    {/* Corner ornaments */}
                    <div className="absolute top-3 right-3 z-10 opacity-60">
                      <CornerOrnament color={m.accent} />
                    </div>
                    <div className="absolute bottom-3 right-3 z-10 opacity-40" style={{ transform: 'rotate(180deg)' }}>
                      <CornerOrnament color={m.accent} />
                    </div>

                    {/* Top accent bar */}
                    <div className="relative pl-7 pr-4 pt-5 pb-4 z-10" style={{ borderBottom: `1px solid ${m.accent}20` }}>
                      <p className="font-mono text-[8.5px] tracking-[0.28em] uppercase mb-0.5" style={{ color: `${m.accent}70` }}>
                        Field Manual &middot; Vol. {m.vol}
                      </p>
                      <h3 style={{
                        fontFamily: "'Georgia', 'Times New Roman', serif",
                        fontSize: '1.12rem',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                        color: '#eee9e0',
                        lineHeight: 1.2,
                      }}>
                        {m.title}
                      </h3>
                    </div>

                    {/* Illustration area */}
                    <div className="flex-1 flex items-center justify-center px-5 py-1 z-10" style={{ minHeight: 0 }}>
                      <div className="w-full" style={{ height: '210px' }}>
                        <Illustration />
                      </div>
                    </div>

                    {/* Bottom band */}
                    <div className="relative pl-7 pr-4 pb-5 pt-3 z-10" style={{ borderTop: `1px solid ${m.accent}18` }}>
                      <p className="text-[10.5px] mb-3.5" style={{
                        color: 'rgba(238,233,224,0.45)',
                        fontFamily: "'Georgia', serif",
                        fontStyle: 'italic',
                        letterSpacing: '0.01em',
                      }}>
                        {m.tagline}
                      </p>
                      <div className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: m.accent }}>
                        Open Manual
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>

                    {/* Vol watermark */}
                    <div aria-hidden="true" className="absolute bottom-2 right-5 select-none pointer-events-none z-0"
                      style={{
                        fontFamily: "'Georgia', serif",
                        fontSize: '5rem',
                        fontWeight: 700,
                        lineHeight: 1,
                        color: 'transparent',
                        WebkitTextStroke: `1px ${m.accent}12`,
                      }}>
                      {m.vol}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="relative flex justify-center gap-2 mb-12" style={{ zIndex: 2 }}>
          {MANUALS.map((_, i) => (
            <div key={i} className="rounded-full transition-all"
              style={{ width: i === 1 ? '18px' : '5px', height: '5px', background: i === 1 ? '#c3a47b' : 'rgba(255,255,255,0.1)' }} />
          ))}
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: '100px', background: 'linear-gradient(to bottom, transparent, #070e12)', zIndex: 1 }} />
      </section>

      {activeManual && <ServiceModal manual={activeManual} onClose={closeModal} />}
    </>
  )
}
