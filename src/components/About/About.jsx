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
            eyebrow="About me"
            title="About Me"
            subtitle="Columbia-based tattoo artist — detailed compositions, custom designs, and collaboration with every client."
          />
          <p className="about__text">
            Hey lovies — my name is Jazmine Tutii, but I&apos;m more known as Tutii. I am a Columbia-based tattoo artist
            known for detailed compositions and custom designs created in collaboration with each client.
          </p>
          <p className="about__text">
            With professional shop experience and an academic background in psychology, art, business, and African
            American history, my approach to tattooing blends technical precision with meaningful visual storytelling.
          </p>
          <p className="about__text">
            Each piece is designed with attention to flow, balance, and individuality, ensuring artwork complements both
            the concept and the natural movement of the body.
          </p>
          <p className="about__text">
            Operating from a home-based private studio environment allows for a focused and comfortable experience where
            clients can feel confident throughout the entire process — from consultation to completed tattoo.
          </p>
        </div>
      </div>
    </section>
  )
}
