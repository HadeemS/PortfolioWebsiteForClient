import { useEffect, useCallback } from 'react'
import './MediaModal.css'

export default function MediaModal({ item, onClose }) {
  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prev
    }
  }, [handleKey])

  if (!item) return null

  return (
    <div
      className="media-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="media-modal-title"
    >
      <button type="button" className="media-modal__backdrop" onClick={onClose} aria-label="Close" />
      <div className="media-modal__panel">
        <button type="button" className="media-modal__close" onClick={onClose} aria-label="Close dialog">
          ×
        </button>
        <div className="media-modal__visual">
          {item.mediaType === 'video' ? (
            <video className="media-modal__media" controls playsInline poster={item.thumbnail} src={item.src} />
          ) : (
            <img className="media-modal__media" src={item.src} alt="" />
          )}
        </div>
        <div className="media-modal__meta">
          <p className="media-modal__cat">{item.category}</p>
          <h3 id="media-modal-title" className="media-modal__title">
            {item.title}
          </h3>
          <p className="media-modal__desc">{item.description}</p>
        </div>
      </div>
    </div>
  )
}
