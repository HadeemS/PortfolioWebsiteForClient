import aboutImg from '../../assets/images/about-portrait.svg'
import SectionHeading from '../SectionHeading/SectionHeading'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about section-padding">
      <div className="container about__grid">
        <div className="about__visual">
          <div className="about__frame">
            <img src={aboutImg} alt="" className="about__image" width={600} height={720} />
            <div className="about__frame-glow" aria-hidden />
          </div>
        </div>
        <div className="about__copy">
          <SectionHeading
            eyebrow="The artist"
            title="Ink with intention"
            subtitle="Columbia-based work rooted in self-expression, precision, and respect for your skin."
          />
          <p className="about__text">
            I build custom pieces that feel cinematic up close and unmistakable across the room — fine transitions,
            deliberate contrast, and layouts that move with your body. Every session is collaborative: your references,
            your story, and a calm, detail-obsessed process from stencil to heal.
          </p>
          <blockquote className="about__quote">
            Meaningful ink doesn&apos;t rush. It breathes, settles, and stays.
          </blockquote>
          <p className="about__text">
            Expect a comfortable setup, transparent timing, and work that honors both the idea and the craft — whether
            it&apos;s delicate fine line, deep black and grey, or lettering with real attitude.
          </p>
        </div>
      </div>
    </section>
  )
}
