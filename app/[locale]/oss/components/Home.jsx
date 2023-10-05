'use client'

import styles from './OSS.module.css'
import { useTranslations } from 'next-intl'

export default function HomeOSS() {
  const t = useTranslations('OSS')
  return (
    <section className={styles.OSS}>
      <h1 className={styles.titleOSS}>{t('title')}</h1>
      <p className='text-gray-500 font-[GilroyRegular] text-lg md:text-2xl text-center px-16'>
        {t('subtitle')}
      </p>
    </section>
  )
}
