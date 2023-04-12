import styles from './OSS.module.css'
import Image from 'next/image'

export default function HomeOSS() {
  return (
    <section className={styles.OSS}>
      <h1 className={styles.titleOSS}>Open Source Software</h1>
      <p className='text-white font-[Questrial] opacity-80 text-lg md:text-2xl text-center px-16 mt-4'>
        Our commitment to maintain a creative and passionate community in the
        world of Open Source Software continues to be one of our main goals,
        because most of us are due our open source source products.
      </p>
      <div>
        <div>
          <article className='flex items-center justify-center'>
            <Image
              className='rounded-full border border-gray-900'
              src='/Boxode-circle-logo.png'
              alt='Boxode'
              width={80}
              height={80}
            />
            <div className='flex ml-4 flex-col'>
              <h4 className='text-white flex font-bold '>
                Boxode Corporation{' '}
                <Image
                  className='ml-2'
                  src='/verified-entity.svg'
                  alt='Github'
                  width={25}
                  height={25}
                  title='Verified Entity'
                />
              </h4>
              <p className='text-gray-400 text-sm'>github.com/boxode</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
