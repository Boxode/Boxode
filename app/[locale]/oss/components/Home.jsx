'use client'

import styles from './OSS.module.css'
import { useTranslations } from 'next-intl'
import Balancer from 'react-wrap-balancer'

export default function HomeOSS() {
  const t = useTranslations('OSS')
  return (
    <section className={styles.OSS}>
      <h1 className={styles.titleOSS}>{t('title')}</h1>
      <Balancer className='text-gray-500 font-[GilroyRegular] text-lg md:text-2xl text-center px-16'>
        {t('subtitle')}
      </Balancer>
    </section>
  )
}
