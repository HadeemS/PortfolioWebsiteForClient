import { useMemo, useState } from 'react'
import { galleryCategories, galleryItems } from '../../data/galleryData'
import SectionHeading from '../SectionHeading/SectionHeading'
import './PortfolioGallery.css'

export default function PortfolioGallery({ onOpenItem }) {
  const [filter, setFilter] = useState('All')

  const items = useMemo(() => {
    if (filter === 'All') return galleryItems
    return galleryItems.filter((item) => item.category === filter)
  }, [filter])

  return (
    <section id="portfolio" className="portfolio section-padding">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Portfolio"
          title="Gallery"
          subtitle="Images and video — filter by style, click to open the lightbox."
        />

        <div className="portfolio__filters" role="tablist" aria-label="Filter portfolio">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={filter === cat}
              className={`portfolio__filter ${filter === cat ? 'portfolio__filter--active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <ul className="portfolio__masonry">
          {items.map((item) => (
            <li key={item.id} className="portfolio__item">
              <button type="button" className="portfolio__card" onClick={() => onOpenItem(item)}>
                <span className="portfolio__thumb-wrap">
                  <img src={item.thumbnail} alt="" className="portfolio__thumb" loading="lazy" width={800} height={1000} />
                  {item.mediaType === 'video' ? (
                    <span className="portfolio__play" aria-hidden>
                      <span className="portfolio__play-icon" />
                    </span>
                  ) : null}
                  <span className="portfolio__overlay">
                    <span className="portfolio__overlay-title">{item.title}</span>
                    <span className="portfolio__overlay-cat">{item.category}</span>
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
