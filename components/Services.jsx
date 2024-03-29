'use client'

import { Image } from '@nextui-org/react'
import { useTranslations } from 'next-intl'
import Balancer from 'react-wrap-balancer'

export default function Services() {
  const t = useTranslations('Index')
  return (
    <section className='min-h-screen -z-20' id='services'>
      <div className='flex items-center justify-center flex-col mt-32 lg:mt-72'>
        <span className='text-[#606060] mb-32 font-[GilroyRegular] font-bold lg:text-2xl border-2 py-5 px-5 rounded-sm border-[#606060] opacity-80'>
          {t('Services.square')}
        </span>
        <Image
          src='/1.webp'
          className='w-12 select-none'
          alt='1'
          width={100}
          height={100}
        />
        <h2 className='services text-6xl lg:text-8xl font-[GilroyBold] tracking-normal p-4 opacity-90 select-none'>
          {t('Services.title')}
        </h2>
        <p className='text-gray-100/50 text-md px-6 text-center lg:text-xl font-[GilroyRegular]'>
          {t('Services.subtitle')}
        </p>
      </div>
      <div className='lg:px-44'>
        <div className='mt-16'>
          <article className='flex justify-around items-center max-w-[1200px]'>
            <div className='relative flex items-center lg:items-start justify-center lg:justify-around flex-col'>
              <div className='absolute w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30 -z-20 animate-blob' />
              <div className='absolute top-10 w-24 h-24 animation-delay-2000 bg-gradient-to-r from-teal-500 to-white rounded-full blur-2xl opacity-30 -z-20 animate-blob text' />
              <Image
                src='/svg/hammer.svg'
                alt=''
                className='w-16 h-16 mb-5 drop-shadow-md'
                width={100}
                height={100}
              />
              <h3 className='text-white text-2xl pb-4 lg:text-4xl font-[GilroyBold] leading-relaxed'>
                {t('Services.sd')}
              </h3>
              <Balancer className='text-white/80 font-[GilroyRegular] text-md lg:text-xl text-center lg:text-right px-6 lg:px-0'>
                {t('Services.sd-description')}
              </Balancer>
            </div>
          </article>
        </div>
        <div className='mt-24 text-right'>
          <article className='flex justify-around items-center max-w-[1200px]'>
            <div className='relative flex items-center lg:items-end justify-center lg:justify-around flex-col'>
              <div className='absolute w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30 -z-20 animate-blob' />
              <div className='absolute top-10 w-24 h-24 animation-delay-4000 bg-gradient-to-r from-teal-500 to-white rounded-full blur-2xl opacity-30 -z-20 animate-blob text' />
              <Image
                src='/svg/computer.svg'
                alt=''
                className='w-16 h-16 mb-5 drop-shadow-md'
                width={100}
                height={100}
              />
              <h3 className='text-white text-2xl pb-4 lg:text-4xl font-[GilroyBold] leading-relaxed'>
                {t('Services.wd')}
              </h3>
              <Balancer className='text-white/80 font-[GilroyRegular] text-md lg:text-xl text-center lg:text-right px-6 lg:px-0'>
                {t('Services.wd-description')}
              </Balancer>
            </div>
          </article>
        </div>
        <div className='mt-16 mb-10'>
          <article className='flex justify-around items-center max-w-[1200px]'>
            <div className='relative flex items-center lg:items-start justify-center lg:justify-around flex-col'>
              <div className='absolute w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30 -z-20 animate-blob' />
              <div className='absolute top-10 w-24 h-24 animation-delay-2000 bg-gradient-to-r from-teal-500 to-white rounded-full blur-2xl opacity-30 -z-20 animate-blob text' />
              <Image
                src='/svg/brush-and-pencil.svg'
                width={100}
                height={100}
                alt=''
                className='w-16 h-16 mb-5 drop-shadow-md'
              />
              <h3 className='text-white text-2xl pb-4 lg:text-4xl font-[GilroyBold] leading-relaxed'>
                {t('Services.ui')}
              </h3>
              <Balancer className='text-white/80 font-[GilroyRegular] text-md lg:text-xl text-center lg:text-left px-6 lg:px-0'>
                {t('Services.ui-description')}
              </Balancer>
            </div>
          </article>
        </div>
      </div>
      <div className='pt-24 pb-8 overflow-hidden z-10 flex items-center justify-center'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='lg:grid lg:grid-cols-12 mx-auto lg:gap-16 justify-center'>
            <div className='relative z-10 px-4 mb-8 sm:px-6 sm:text-center sm:mb-16 lg:mb-0 lg:px-0 lg:text-left lg:flex col-span-6'>
              <div className='lg:py-24'>
                <p className='mt-3 font-[GilroyBold] sm:mx-auto lg:mx-0 max-w-lg text-center lg:text-left text-lg lg:text-4xl text-neutral-200 sm:mt-5'>
                  {t('Services.work')}
                </p>
                <p className='mt-3 font-[GilroyRegular] sm:mx-auto lg:mx-0 max-w-lg text-center lg:text-left text-base sm:text-xl text-neutral-200/40 sm:mt-5'>
                  {t('Services.work-description')}
                </p>
              </div>
            </div>
            <div className='mx-auto flex items-center justify-center lg:justify-start'>
              <div className=' relative md:absolute -z-20'>
                <div className='flex image-tech min-w justify-center items-center relative flex-col pt-4 pb-8 sm:py-10 px-6 sm:px-12 lg:w-[700px] select-none sm:w-64 z-20 md:hidden lg:block'>
                  <Image
                    isBlurred
                    src='/svg/tech.svg'
                    alt='Tech'
                    width={500}
                    height={500}
                  />
                  <div className='relative hidden md:absolute w-24 lg:w-52 h-24 lg:h-52 amimation-delay-2000 bg-gradient-to-r from-[#015EEA] to-[#00C0FA] rounded-full blur-2xl opacity-30 -z-20 animate-blob' />
                  <div className='relative hidden bottom-10 md:absolute w-20 lg:w-64 h-20 lg:h-64 amimation-delay-2000 bg-gradient-to-r from-[#015EEA] to-[#00C0FA] rounded-full blur-2xl opacity-30 -z-20 animate-blob' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
