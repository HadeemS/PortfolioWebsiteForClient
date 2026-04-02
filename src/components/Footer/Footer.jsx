import { navLinks, siteData } from '../../data/siteData'
import './Footer.css'

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer id="footer" className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__name">{siteData.artistName}</p>
          <p className="footer__tag">{siteData.tagline}</p>
        </div>
        <nav className="footer__nav" aria-label="Footer">
          <ul className="footer__links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button type="button" className="footer__link" onClick={() => scrollTo(link.id)}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer__social">
          <a href={siteData.instagramHref} target="_blank" rel="noreferrer" className="footer__icon" aria-label="Instagram">
            IG
          </a>
          <a href={siteData.emailHref} className="footer__icon" aria-label="Email">
            @
          </a>
        </div>
      </div>
      <p className="footer__copy">
        © {new Date().getFullYear()} {siteData.artistName}. All rights reserved.
      </p>
    </footer>
  )
}
