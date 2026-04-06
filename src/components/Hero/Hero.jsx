import { siteData } from '../../data/siteData'
import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero__glow" aria-hidden />
      <div className="hero__particles" aria-hidden>
        {Array.from({ length: 28 }).map((_, i) => (
          <span key={i} className="hero__particle" style={{ '--i': i }} />
        ))}
      </div>

      <div className="hero__content container">
        <p className="hero__eyebrow">{siteData.tagline}</p>
        <h1 className="hero__title">
          <span className="hero__name">{siteData.artistName}</span>
        </h1>
        <p className="hero__statement">{siteData.heroStatement}</p>
        <div className="hero__actions">
          <a
            className="hero__btn hero__btn--primary"
            href={siteData.bookingHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
          <button type="button" className="hero__btn hero__btn--ghost" onClick={() => scrollTo('portfolio')}>
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  )
}
