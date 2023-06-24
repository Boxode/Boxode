import styles from './Home.module.css'

export default function Home() {
  return (
    <section className={styles.stars} id='home'>
      <div className='pt-24 pb-8 overflow-hidden z-10'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='lg:flex lg:justify-center lg:items-center lg:flex-col mx-auto lg:gap-16 justify-center'>
            <div className='relative z-10 px-4 mb-8 sm:px-6 sm:text-center sm:mb-16 lg:mb-0 lg:px-0 lg:flex col-span-6'>
              <div className='lg:py-14'>
                <p className='text-4xl lg:text-9xl lg:px-10 h-full font-[SegoeBold] tracking-tight font-extrabold primary-title text-center'>
                  A better way to build software.
                </p>
                <p className='mt-3 font-[Questrial] text-center text-base sm:text-2xl text-neutral-200/50'>
                  Let your ideas flow.
                </p>
                <p className='mt-3 md:mb-6 font-[Questrial] text-center text-base sm:text-2xl text-neutral-200/50 sm:mt-2'>
                  We make them come true.
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
