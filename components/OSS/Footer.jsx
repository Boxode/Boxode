import Image from 'next/image'
import Link from 'next/link'

export default function FooterOSS() {
  return (
    <footer className='bg-black border-t border-gray-100/10'>
      <div className='grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4'>
        <div>
          <h2 className='mb-6 text-[15px] font-medium text-gray-100/80 uppercase font-[SegoeBold]'>
            What's new?
          </h2>
          <ul className='text-gray-100/80 text-[11px]'>
            <li className='mb-4'>
              <Link href='#!' className=' hover:underline'>
                Coming Soon
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='mb-6 text-[15px] font-medium text-gray-100/80 uppercase font-[SegoeBold]'>
            Help Center
          </h2>
          <ul className='text-gray-100/80 text-[11px]'>
            <li className='mb-4 font-[SegoeUI]'>
              <Link
                href='https://discord.gg/gdRmAa5xHU'
                target='_blank'
                className='hover:underline'
              >
                Discord Server
              </Link>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
              <Link
                href='https://twitter.com/_Boxode'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                Twitter
              </Link>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
              <Link
                href='https://www.facebook.com/Boxodee'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                Facebook
              </Link>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
              <Link
                href='https://www.instagram.com/_Boxode'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='mb-6 text-[15px] font-medium text-gray-100/80 uppercase font-[SegoeBold]'>
            Develop and IT
          </h2>
          <ul className='text-gray-100/80 text-[11px]'>
            <li className='mb-4 font-[SegoeUI]'>
              <Link href='/oss' className='hover:underline'>
                Open Source Software
              </Link>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
              <Link href='/oss/contributing' className='hover:underline'>
                Contribution
              </Link>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
              <Link href='oss/coc' className='hover:underline'>
                Code of Conduct
              </Link>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
              <Link
                href='https://github.com/Boxode'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                Github
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='mb-6 text-[15px] font-medium text-gray-100/80 uppercase font-[SegoeBold]'>
            Company
          </h2>
          <ul className='text-gray-100/80 text-[11px]'>
            <li className='mb-4 font-[SegoeUI]'>
              <Link href='/careers' className='hover:underline'>
                Careers
              </Link>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
              <Link href='/about' className='hover:underline'>
                About Boxode
              </Link>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
              <Link href='/privacy' className='hover:underline'>
                Privacy at Boxode
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='px-5 md:px-6 py-6 bg-black md:flex md:items-center md:justify-between'>
        <Image
          src='/BoxodeB.svg'
          alt='Boxode'
          className='w-24'
          width={100}
          height={100}
        />
        <div className='inline-block md:flex mt-4 space-x-3 sm:justify-center md:mt-0 font-[SegoeUI]'>
          <Link
            href='/contactus'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            Contact Boxode
          </Link>
          <Link
            href='/sitemap'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            Sitemap
          </Link>
          <Link
            href='/privacystatement'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            Privacy Statement
          </Link>
          <Link
            href='/trademarks'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            Trademarks
          </Link>
          <Link
            href='/security-and-eco'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            Sefety & Eco
          </Link>
          <span className='text-[11px] text-gray-100/80 sm:text-center'>
            © Boxode{' '}
            <Link href='oss/thanks' className='underline'>
              Open Source
            </Link>{' '}
            <span id='year'>2023</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
