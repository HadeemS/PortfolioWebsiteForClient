import { useEffect, useState } from 'react'
import { siteData } from '../../data/siteData'
import './BackToTop.css'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const goBooking = () => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <button
        type="button"
        className={`back-top ${visible ? 'back-top--visible' : ''}`}
        onClick={goTop}
        aria-label="Back to top"
      >
        ↑
      </button>
      <a
        className="mobile-book"
        href={siteData.bookingHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        Book
      </a>
    </>
  )
}
