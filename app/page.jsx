import About from '@/components/Home/About'
import { Contact } from '@/components/Home/Contact'
import Footer from '@/components/Home/Footer'
import Header from '@/components/Home/Header'
import Home from '@/components/Home/Home'
import Services from '@/components/Home/Services'

export default function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
