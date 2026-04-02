import { featuredItems } from '../../data/galleryData'
import SectionHeading from '../SectionHeading/SectionHeading'
import './FeaturedWork.css'

const labelFor = (category) => {
  const map = {
    'Fine Line': 'Fine Line',
    'Black & Grey': 'Black & Grey',
    Script: 'Script',
    'Custom Pieces': 'Custom',
    Flash: 'Flash',
  }
  return map[category] || category
}

export default function FeaturedWork({ onOpenItem }) {
  return (
    <section id="featured" className="featured section-padding">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Spotlight"
          title="Featured work"
          subtitle="A taste of recent pieces — hover for glow, click to open full detail."
        />
        <ul className="featured__grid">
          {featuredItems.map((item) => (
            <li key={item.id}>
              <button type="button" className="featured__card" onClick={() => onOpenItem(item)}>
                <span className="featured__media-wrap">
                  <img src={item.thumbnail} alt="" className="featured__img" width={800} height={1000} />
                  <span className="featured__shine" aria-hidden />
                </span>
                <span className="featured__meta">
                  <span className="featured__label">{labelFor(item.category)}</span>
                  <span className="featured__title">{item.title}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
