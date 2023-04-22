import HeaderOSS from '@/components/OSS/Header'
import HomeOSS from '@/components/OSS/Home'
import Projects from '@/components/OSS/Projects'
import Verified from '@/components/OSS/Verified'
import FooterOSS from '@/components/OSS/Footer'
import Gip from '@/components/OSS/IOP'

export default function OSS() {
  return (
    <>
      <HeaderOSS />
      <HomeOSS />
      <Projects />
      <Gip />
      <Verified />
      <FooterOSS />
    </>
  )
}
