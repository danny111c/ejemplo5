import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustIndicators from '@/components/TrustIndicators'
import Services from '@/components/Services'
import AboutUs from '@/components/AboutUs'
import Portfolio  from '@/components/Portfolio'
import ContactForm from '@/components/ContacForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero id="inicio" />
      <Services id="servicios" />
      <TrustIndicators id="indicadores" />
      <AboutUs id="historia" />
      <Portfolio id="portfolio" />
      <ContactForm id="contacto" />
      <Footer />
    </>
  )
}