'use client'

import About from '@/components/About'
import { Contact } from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Home from '@/components/Home'
import Services from '@/components/Services'

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
