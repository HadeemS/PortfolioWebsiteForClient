import { useEffect, useState } from 'react'
import { navLinks, siteData } from '../../data/siteData'
import './Navbar.css'

const sectionIds = navLinks.map((l) => l.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers = []
    const opts = { rootMargin: '-45% 0px -45% 0px', threshold: 0 }

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(id)
        })
      }, opts)
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <button type="button" className="navbar__logo" onClick={() => scrollTo('hero')}>
          {siteData.artistName}
        </button>

        <nav
          id="primary-nav"
          className={`navbar__nav ${open ? 'navbar__nav--open' : ''}`}
          aria-label="Primary"
        >
          <ul className="navbar__list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  className={`navbar__link ${active === link.id ? 'navbar__link--active' : ''}`}
                  onClick={() => scrollTo(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <button type="button" className="navbar__cta" onClick={() => scrollTo('booking')}>
            Book Now
          </button>
        </nav>

        <button
          type="button"
          className={`navbar__burger ${open ? 'navbar__burger--open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label="Toggle menu"
        />
      </div>
    </header>
  )
}
