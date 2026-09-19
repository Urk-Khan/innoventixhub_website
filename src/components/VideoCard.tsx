import { useState } from 'react'
import VideoModal from './VideoModal'

interface VideoCardProps {
  videoId: string
  title: string
  description?: string
}

export default function VideoCard({ videoId, title, description }: VideoCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        className="group w-full text-left rounded-2xl overflow-hidden bg-[#1D3A6E]/30 border border-[#1D3A6E] hover:border-[#3ECF9E] transition-colors"
        onClick={() => setOpen(true)}
        aria-label={`Play video: ${title}`}
      >
        <div className="relative aspect-video bg-[#0B1220] overflow-hidden">
          <img
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
            <div className="w-16 h-16 rounded-full bg-[#3ECF9E] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-[#0B1220] ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="p-4">
          <p className="text-white font-semibold text-sm leading-snug">{title}</p>
          {description && <p className="text-gray-400 text-xs mt-1">{description}</p>}
        </div>
      </button>
      {open && <VideoModal videoId={videoId} onClose={() => setOpen(false)} />}
    </>
  )
}
