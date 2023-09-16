'use client'

import Image from 'next/image'
import Link from 'next/link'
import DropdownLang from './Dropdown-lang'
import { useState } from 'react'
import { Sun, Moon, System } from './Icons'
import { useTranslations } from 'next-intl'

export default function FooterOSS() {
  const t = useTranslations('Footer')
  const [theme, setTheme] = useState('system')
  const options = [
    {
      icon: <Sun />,
      text: 'light'
    },
    {
      icon: <Moon />,
      text: 'dark'
    },
    {
      icon: <System />,
      text: 'system'
    }
  ]

  return (
    <footer className='bg-black border-t border-gray-100/10'>
      <div className='grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-5'>
        <div>
          <h2 className='mb-6 text-[15px] font-medium text-gray-100/80 uppercase font-[PoppinsBold]'>
            {t('title1')}
          </h2>
          <ul className='text-gray-100/80 text-[11px]'>
            <li className='mb-4'>
              <Link
                href='https://windui.org'
                className=' hover:underline'
                target='_blank'
              >
                windUI
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='mb-6 text-[15px] font-medium text-gray-100/80 uppercase font-[PoppinsBold]'>
            {t('title2')}
          </h2>
          <ul className='text-gray-100/80 text-[11px]'>
            <li className='mb-4 font-[Satoshi]'>
              <Link
                href='https://discord.gg/gdRmAa5xHU'
                target='_blank'
                className='hover:underline'
              >
                Discord Server
              </Link>
            </li>
            <li className='mb-4 font-[Satoshi]'>
              <Link
                href='https://t.me/BoxodeHQ'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                Twitter
              </Link>
            </li>
            <li className='mb-4 font-[Satoshi]'>
              <Link
                href='https://facebook.com/BoxodeHQ'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                Facebook
              </Link>
            </li>
            <li className='mb-4 font-[Satoshi]'>
              <Link
                href='https://instagram.com/boxodehq'
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
          <h2 className='mb-6 text-[15px] font-medium text-gray-100/80 uppercase font-[PoppinsBold]'>
            {t('title3')}
          </h2>
          <ul className='text-gray-100/80 text-[11px]'>
            <li className='mb-4 font-[Satoshi]'>
              <Link href='/oss' className='hover:underline'>
                {t('OSS')}
              </Link>
            </li>
            <li className='mb-4 font-[Satoshi]'>
              <Link href='/oss/contributing' className='hover:underline'>
                {t('OSSC')}
              </Link>
            </li>
            <li className='mb-4 font-[Satoshi]'>
              <Link href='/oss/coc' className='hover:underline'>
                {t('OSSCO')}
              </Link>
            </li>
            <li className='mb-4 font-[Satoshi]'>
              <Link
                href='https://boxode.org/gh'
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
          <h2 className='mb-6 text-[15px] font-medium text-gray-100/80 uppercase font-[PoppinsBold]'>
            {t('title4')}
          </h2>
          <ul className='text-gray-100/80 text-[11px]'>
            <li className='mb-4 font-[Satoshi]'>
              <Link href='/careers' className='hover:underline'>
                {t('Careers')}
              </Link>
            </li>
            <li className='mb-4 font-[Satoshi]'>
              <Link href='/ceo' className='hover:underline'>
                CEO
              </Link>
            </li>
            <li className='mb-4 font-[Satoshi]'>
              <Link href='/about' className='hover:underline'>
                {t('AboutBoxode')}
              </Link>
            </li>
            <li className='mb-4 font-[Satoshi]'>
              <Link href='/privacy' className='hover:underline'>
                {t('PrivacyAB')}
              </Link>
            </li>
            <li className='mb-4 font-[Satoshi]'>
              <Link href='/brand' className='hover:underline'>
                Brand
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='mb-6 text-[15px] font-medium text-gray-100/80 uppercase font-[PoppinsBold]'>
            {t('title5')}
          </h2>
          <ul className='text-gray-100/80 text-[11px] inline-flex flex-col items-center justify-center'>
            <li className='mb-16 font-[Satoshi] text-left'>
              <DropdownLang />
            </li>
            <li className='mb-4 font-[Satoshi]'>
              <div className='relative inline-flex items-center justify-end p-0.5 mb-2 mr-2 overflow-hidden rounded-full group bg-gradient-to-br from-[#b8b8b8e1] to-[#3b3b3bcc] focus:ring-4 focus:outline-none'>
                <div
                  className='bg-black rounded-full flex items-center justify-center gap-4 border border-gray-100/40 px-3 py-2 select-none'
                  role='radiogroup'
                >
                  {options?.map((opt) => (
                    <button
                      key={opt.text}
                      onClick={() => setTheme(opt.text)}
                      className={`text-white/30 transition-colors duration-150 hover:text-white ${
                        theme === opt.text && 'text-white/100'
                      }`}
                      aria-checked='false'
                      aria-label='Toggle theme'
                      data-version='v1'
                      role='radio'
                      type='button'
                    >
                      <span>{opt.icon}</span>
                    </button>
                  ))}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='px-5 md:px-6 py-6 bg-black md:flex md:items-center md:justify-between'>
        <Image
          src='/svg/Boxode_white.svg'
          alt='Boxode'
          className='w-24'
          width={100}
          height={100}
        />
        <div className='inline-block md:flex mt-4 space-x-3 sm:justify-center md:mt-0 font-[Satoshi]'>
          <Link
            href='/contactus'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            {t('ContactB')}
          </Link>
          <Link
            href='/sitemap'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            {t('Sitemap')}
          </Link>
          <Link
            href='/privacystatement'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            {t('PrivacyS')}
          </Link>
          <Link
            href='/trademarks'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            {t('Trademarks')}
          </Link>
          <Link
            href='/security-and-eco'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            {t('SYE')}
          </Link>
          <span className='text-[11px] text-gray-100/80 sm:text-center'>
            © Boxode, Ltd. <span id='year'>2023</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
