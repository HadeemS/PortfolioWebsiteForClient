import { siteData } from '../../data/siteData'
import SectionHeading from '../SectionHeading/SectionHeading'
import './BookingForm.css'

export default function BookingForm() {
  return (
    <section id="booking" className="booking section-padding">
      <div className="container booking__layout">
        <SectionHeading
          eyebrow="Scheduling"
          title="Book your appointment"
          subtitle="Choose a time that works for you — you’ll complete scheduling and details securely through Square."
        />
        <div className="booking__panel">
          <p className="booking__lead">
            Ready to get on the calendar? Tap below to open the live booking page in a new tab.
          </p>
          <a
            className="booking__cta"
            href={siteData.bookingHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open booking page
          </a>
          <p className="booking__url" aria-hidden>
            {siteData.bookingHref.replace(/^https:\/\//, '')}
          </p>
          <p className="booking__note">
            Questions first?{' '}
            <a className="booking__inline" href={siteData.emailHref}>
              Email {siteData.email}
            </a>
            {' · '}
            <a className="booking__inline" href={siteData.instagramHref} target="_blank" rel="noreferrer">
              {siteData.instagramLabel}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
