import { testimonialsData } from '../../data/testimonialsData'
import SectionHeading from '../SectionHeading/SectionHeading'
import './Testimonials.css'

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section-padding">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Clients"
          title="Word on the street"
          subtitle="Comfort, clarity, and craft — the things people actually remember after the needle stops."
        />
        <ul className="testimonials__grid">
          {testimonialsData.map((t) => (
            <li key={t.id} className="testimonials__card">
              <p className="testimonials__quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonials__foot">
                <span className="testimonials__name">{t.name}</span>
                <span className="testimonials__detail">{t.detail}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
