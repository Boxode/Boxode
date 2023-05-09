import styles from './Home.module.css'

export default function Home() {
  return (
    <section className={styles.stars} id='home'>
      <div className='pt-24 pb-8 overflow-hidden z-10'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6'>
          <div className='lg:flex lg:justify-center lg:items-center lg:flex-col mx-auto lg:gap-16 justify-center'>
            <div className='relative z-10 px-4 mb-8 sm:px-6 sm:text-center sm:mb-16 lg:mb-0 lg:px-0 lg:flex col-span-6'>
              <div className='lg:py-24'>
                <p className='mt-4 mb-4 text-2xl lg:text-6xl h-full font-[SegoeBold] tracking-tight font-extrabold primary-title sm:mt-5 text-center'>
                  Creando soluciones informáticas personalizadas y productos
                  comerciales a pequeñas, medianas y grandes empresas.
                </p>
                <p className='mt-3 font-[Questrial] text-center text-base sm:text-2xl text-neutral-200/50 sm:mt-5'>
                  "Para de hablar y comienza a innovar."
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
