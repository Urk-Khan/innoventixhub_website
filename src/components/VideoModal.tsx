import { useEffect, useRef } from 'react'

interface VideoModalProps {
  videoId: string
  onClose: () => void
}

export default function VideoModal({ videoId, onClose }: VideoModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeRef.current?.focus()
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label="Video player"
    >
      <div className="relative w-full max-w-4xl aspect-video">
        <button
          ref={closeRef}
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-2xl font-bold hover:text-[#3ECF9E] transition-colors"
          aria-label="Close video"
        >
          &times;
        </button>
        <iframe
          className="w-full h-full rounded-xl"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title="Video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}
