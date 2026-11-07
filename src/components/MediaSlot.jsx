import { useEffect, useRef, useState } from 'react'

// Plays only while on screen; pauses when scrolled away.
function LazyVideo({ className, src, controls, onError }) {
  const ref = useRef(null)
  useEffect(() => {
    const v = ref.current
    if (!v || controls) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {})
      else v.pause()
    }, { threshold: 0.1 })
    io.observe(v)
    return () => io.disconnect()
  }, [controls])
  return <video ref={ref} className={className} src={src} muted loop playsInline preload="metadata" controls={controls} onError={onError} />
}

// Shows your image/video if the file exists, otherwise a labelled placeholder.
export default function MediaSlot({ type = 'image', src, alt = '', label, className = '', controls = false }) {
  const [failed, setFailed] = useState(false)
  if (failed || !src) {
    return <div className={`ph ${className}`} role="img" aria-label={alt || label}><span>{label || src}</span></div>
  }
  if (type === 'video') {
    return <LazyVideo className={className} src={src} controls={controls} onError={() => setFailed(true)} />
  }
  return <img className={className} src={src} alt={alt} loading="lazy" decoding="async" onError={() => setFailed(true)} />
}