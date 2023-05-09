import HeaderOSS from '@/app/OSS/pages/Header'
import HomeOSS from '@/app/OSS/pages/Home'
import Projects from '@/app/OSS/pages/Projects'
import Verified from '@/app/OSS/pages/Verified'
import FooterOSS from '@/app/OSS/pages/Footer'
import Gip from '@/app/OSS/pages/IOP'

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
