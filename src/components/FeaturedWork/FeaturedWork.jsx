import { featuredItems } from '../../data/galleryData'
import SectionHeading from '../SectionHeading/SectionHeading'
import './FeaturedWork.css'

const labelFor = (category) => {
  const map = {
    'Fine Line': 'Fine Line',
    'Black & Grey': 'Black & Grey',
    Script: 'Script',
    'Custom Pieces': 'Custom',
    Video: 'Video',
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
          eyebrow="Tattoo work"
          title="Featured photos"
          subtitle="Selected healed and fresh work — click any piece to view it larger."
        />
        <ul className="featured__grid">
          {featuredItems.map((item) => (
            <li key={item.id}>
              <button type="button" className="featured__card" onClick={() => onOpenItem(item)}>
                <span className="featured__media-wrap">
                  {item.mediaType === 'video' && !item.thumbnail ? (
                    <video
                      className="featured__img featured__img--video"
                      muted
                      playsInline
                      preload="metadata"
                      src={item.src}
                      aria-hidden
                    />
                  ) : (
                    <img src={item.thumbnail} alt="" className="featured__img" width={800} height={1000} />
                  )}
                  {item.mediaType === 'video' ? (
                    <span className="featured__play" aria-hidden>
                      <span className="featured__play-icon" />
                    </span>
                  ) : null}
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
