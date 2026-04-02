import { siteData } from '../../data/siteData'
import SectionHeading from '../SectionHeading/SectionHeading'
import './ContactSection.css'

export default function ContactSection() {
  return (
    <section id="contact" className="contact section-padding">
      <div className="container contact__grid">
        <div>
          <SectionHeading
            eyebrow="Connect"
            title="Location & contact"
            subtitle="Columbia sessions by appointment — reach out for consults, flash availability, and custom timelines."
          />
          <div className="contact__actions">
            <a className="contact__btn contact__btn--primary" href={siteData.instagramHref} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className="contact__btn" href={siteData.emailHref}>
              Email
            </a>
            <a className="contact__btn" href={siteData.bookingHref}>
              Booking form
            </a>
          </div>
          <p className="contact__location">
            <strong>{siteData.location}</strong>
            <span className="contact__hours">{siteData.hours}</span>
          </p>
        </div>
        <div className="contact__map-wrap">
          <iframe
            title={siteData.mapEmbedTitle}
            className="contact__map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-81.115%2C33.94%2C-80.945%2C34.115&amp;layer=mapnik"
          />
          <p className="contact__map-note">Map centered on Columbia, SC — replace embed if you want a pinned studio address.</p>
        </div>
      </div>
    </section>
  )
}
