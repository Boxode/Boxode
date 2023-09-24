'use client'

import { useTranslations } from 'next-intl'

export default function Projects() {
  const t = useTranslations('OSS')
  return (
    <section className='min-h-[500px] pt-10'>
      <h2 className='text-white font-[GilroyBold] text-center text-5xl'>
        {t('Projects.title')}
      </h2>
      <div>
        <p className='text-gray-500 text-center font-[GilroyRegular] mt-6 text-lg'>
          {t('Projects.subtitle1')}
        </p>
        <p className='text-gray-500 text-center font-[GilroyRegular] mt-2 text-lg'>
          {t('Projects.subtitle2')}
        </p>
      </div>
    </section>
  )
}
