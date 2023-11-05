'use client'

import OSSProjects from './OSSProjects'
import { useTranslations } from 'next-intl'

export default function Projects() {
  const t = useTranslations('OSS')
  return (
    <section className='min-h-[500px] pt-10'>
      <h2 className='text-white font-[GilroyBold] text-center text-5xl'>
        {t('Projects.title')}
      </h2>
      <p className='text-gray-400 text-lg font-GilroyRegular text-center pt-4 pb-20'>
        Many of the tools and environments most loved by developers globally
        have their foundations in vibrant open source communities.
      </p>
      <div>
        <OSSProjects />
      </div>
    </section>
  )
}
