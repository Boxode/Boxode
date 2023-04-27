import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-black border-t border-gray-100/10'>
      <div className='grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4'>
        <div>
          <h2 className='mb-6 text-[15px] font-medium text-gray-100/80 uppercase font-[SegoeBold]'>
            Novedades
          </h2>
          <ul className='text-gray-100/80 text-[11px]'>
            <li className='mb-4'>
              <Link href='#!' className=' hover:underline'>
                Proximamente
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='mb-6 text-[15px] font-medium text-gray-100/80 uppercase font-[SegoeBold]'>
            Centro de Ayuda
          </h2>
          <ul className='text-gray-100/80 text-[11px]'>
            <li className='mb-4 font-[SegoeUI]'>
              <Link
                href='https://discord.gg/gdRmAa5xHU'
                target='_blank'
                rel='noopener noreferrer'
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
            Desarrollo y TI
          </h2>
          <ul className='text-gray-100/80 text-[11px]'>
            <li className='mb-4 font-[SegoeUI]'>
              <Link href='/oss' className='hover:underline'>
                Código abierto
              </Link>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
              <Link href='/oss/contributing' className='hover:underline'>
                Contribuciones
              </Link>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
              <Link href='/oss/coc' className='hover:underline'>
                Código de Conducta
              </Link>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
              <Link
                href='https://github.com/Boxode'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                GitHub Empresarial
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='mb-6 text-[15px] font-medium text-gray-100/80 uppercase font-[SegoeBold]'>
            Compañia
          </h2>
          <ul className='text-gray-100/80 text-[11px]'>
            <li className='mb-4 font-[SegoeUI]'>
              <Link href='/careers' className='hover:underline'>
                Trabajos
              </Link>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
              <Link href='/about' className='hover:underline'>
                Acerca de Boxode
              </Link>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
              <Link href='/privacy' className='hover:underline'>
                Privacidad de Boxode
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
            href='/contact-us'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            Ponte en contacto con Boxode
          </Link>
          <Link
            href='/sitemap'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            Mapa de sitio
          </Link>
          <Link
            href='/privacy-statement'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            Privacidad
          </Link>
          <Link
            href='/trademarks'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            Marcas Registradas
          </Link>
          <Link
            href='/security-and-eco'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            Seguridad & Eco
          </Link>
          <span className='text-[11px] text-gray-100/80 sm:text-center'>
            © Boxode <span id='year'>2023</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
