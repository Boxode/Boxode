import styles from './CEO.module.css'

export default function Hero() {
  return (
    <section className={styles.CEO}>
      <h1 className={styles.titleCEO}>Chief Executive Officer</h1>
      <p className='text-gray-500 font-[Satoshi] text-lg md:text-2xl text-center px-16'>
        Find photos, biographies, and speech transcripts of Boxode executives
        and board of directors members.
      </p>
    </section>
  )
}
