'use client'

import styles from './Home.module.css'
import { useTranslations } from 'next-intl'
import { Meteors } from './Meteor'

export default function Home() {
  const t = useTranslations('Index')
  return (
    <section className={styles.stars} id='home'>
      <Meteors />
      <div className='pt-24 pb-8 overflow-hidden z-20'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='lg:flex lg:justify-center lg:items-center lg:flex-col mx-auto lg:gap-16 justify-center'>
            <div className='relative z-10 px-4 mb-8 sm:px-6 sm:text-center sm:mb-16 lg:mb-0 lg:px-0 lg:flex col-span-6'>
              <div className='lg:py-16'>
                <p className='text-4xl lg:text-9xl lg:px-10 h-full font-[PoppinsBold] tracking-tight font-black primary-title primary-title-hero text-center'>
                  {t('title')}
                </p>
                <p className='mt-10 md:mt-3 font-[Satoshi] text-center text-base sm:text-2xl text-neutral-200/70'>
                  {t('subtitle1')}
                </p>
                <p className='md:mt-3 font-[Satoshi] text-center text-base sm:text-2xl text-neutral-200/70 sm:mt-2'>
                  {t('subtitle2')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.wave} />
      </div>
    </section>
  )
}
