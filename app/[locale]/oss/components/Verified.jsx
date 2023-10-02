'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Tooltip } from '@nextui-org/react'
import { useTranslations } from 'next-intl'

export default function Verified() {
  const t = useTranslations('OSS')
  return (
    <section className='min-h-[200px]'>
      <h2 className='text-white font-[GilroyBold] px-10 text-3xl text-center md:text-left'>
        {t('Verified.title')}
      </h2>
      <p className='text-white font-[GilroyRegular] opacity-40 text-xs md:text-base text-center md:text-left px-10 mt-2'>
        {t('Verified.description')}
      </p>
      <div className='flex md:justify-around flex-col md:flex-row select-none'>
        <Link
          href='https://boxode.org/gh'
          target='_blank'
          className='flex md:items-center md:justify-center mt-4 ml-4 md:ml-0'
        >
          <Image
            className='rounded-full border border-gray-900'
            src='/Boxode_circle_logo.png'
            alt='Boxode'
            width={80}
            height={80}
          />
          <div className='flex ml-4 flex-col'>
            <h4 className='text-white flex font-[GilroyBold]'>
              Boxode Corporation{' '}
              <Tooltip content='Verified Entity'>
                <Image
                  className='ml-2 hover:scale-105 transition'
                  src='/svg/verified-entity.svg'
                  alt='Verified Entity'
                  width={25}
                  height={25}
                />
              </Tooltip>
            </h4>
            <p className='text-gray-400 text-sm font-[GilroyRegular]'>
              github.com/boxode
            </p>
          </div>
        </Link>
        <Link
          href='https://github.com/FabianHMzz'
          target='_blank'
          className='flex md:items-center md:justify-center ml-4 md:ml-0 mt-3 md:mt-0'
        >
          <Image
            className='rounded-full border border-gray-900'
            src='/FH.png'
            alt='Boxode'
            width={80}
            height={80}
          />
          <div className='flex ml-4 flex-col z-20'>
            <h4 className='text-white flex font-[GilroyBold]'>
              Fabian Herrera{' '}
              <Tooltip content='Verified Entity'>
                <Image
                  className='ml-2 hover:scale-105 transition'
                  src='/svg/verified-entity.svg'
                  alt='Verified Entity'
                  width={25}
                  height={25}
                />
              </Tooltip>
            </h4>
            <p className='text-gray-400 text-sm font-[GilroyRegular]'>
              Founder & CEO
            </p>
          </div>
        </Link>
        <Link
          href='https://github.com/Ferdlcz'
          target='_blank'
          className='flex md:items-center md:justify-center ml-4 md:ml-0 mt-3 md:mt-0'
        >
          <Image
            className='rounded-full border border-gray-900 grayscale bg-[#141414]'
            src='/fdlcz-logo.png'
            alt='Boxode'
            width={80}
            height={80}
          />
          <div className='flex ml-4 flex-col z-20'>
            <h4 className='text-white flex font-[GilroyBold]'>
              Fernando de la Cruz{' '}
              <Tooltip content='Verified Entity'>
                <Image
                  className='ml-2 hover:scale-105 transition'
                  src='/svg/verified-entity.svg'
                  alt='Verified Entity'
                  width={25}
                  height={25}
                />
              </Tooltip>
            </h4>
            <p className='text-gray-400 text-sm font-[GilroyRegular]'>
              Backend Developer
            </p>
          </div>
        </Link>
        <Link
          href='https://github.com/Spartan2502'
          target='_blank'
          className='flex md:items-center md:justify-center ml-4 md:ml-0 mt-3 md:mt-0'
        >
          <Image
            className='rounded-full border border-gray-900 grayscale'
            src='/spartan-logo.png'
            alt='Boxode'
            width={80}
            height={80}
          />
          <div className='flex ml-4 flex-col z-20'>
            <h4 className='text-white flex font-[GilroyBold]'>
              Spartan2502{' '}
              <Tooltip content='Verified Entity'>
                <Image
                  className='ml-2 hover:scale-105 transition'
                  src='/svg/verified-entity.svg'
                  alt='Verified Entity'
                  width={25}
                  height={25}
                />
              </Tooltip>
            </h4>
            <p className='text-gray-400 text-sm font-[GilroyRegular]'>
              Fullstack Developer
            </p>
          </div>
        </Link>
      </div>
    </section>
  )
}
