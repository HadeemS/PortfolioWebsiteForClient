import { servicesData } from '../../data/servicesData'
import SectionHeading from '../SectionHeading/SectionHeading'
import './Services.css'

const icons = {
  custom: '◇',
  flash: '✦',
  'fine-line': '○',
  bw: '◐',
  script: '∞',
  consult: '◎',
  touchup: '✧',
}

export default function Services() {
  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="What I offer"
          title="Services"
          subtitle="From flash to full custom — every category gets the same patience and precision."
        />
        <ul className="services__grid">
          {servicesData.map((s) => (
            <li key={s.id} className="services__card">
              <span className="services__icon" aria-hidden>
                {icons[s.id] || '◆'}
              </span>
              <h3 className="services__title">{s.title}</h3>
              <p className="services__desc">{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
