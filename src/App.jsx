import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import FeaturedWork from './components/FeaturedWork/FeaturedWork'
import PortfolioGallery from './components/PortfolioGallery/PortfolioGallery'
import Services from './components/Services/Services'
import BookingForm from './components/BookingForm/BookingForm'
import Testimonials from './components/Testimonials/Testimonials'
import ContactSection from './components/ContactSection/ContactSection'
import Footer from './components/Footer/Footer'
import BackToTop from './components/BackToTop/BackToTop'
import MediaModal from './components/MediaModal/MediaModal'

export default function App() {
  const [modalItem, setModalItem] = useState(null)

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedWork onOpenItem={setModalItem} />
        <PortfolioGallery onOpenItem={setModalItem} />
        <Services />
        <BookingForm />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
      {modalItem ? <MediaModal item={modalItem} onClose={() => setModalItem(null)} /> : null}
    </>
  )
}
