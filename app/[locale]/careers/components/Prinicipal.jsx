'use client'

import style from './Careers.module.css'
import Image from 'next/image'
// import World from './World'

export default function Principal() {
  const positions = () => {
    document.getElementById('positions').scrollIntoView()
  }
  const learnmore = () => {
    document.getElementById('learnmore').scrollIntoView()
  }
  return (
    <section className={style.Careers}>
      <div className='flex justify-center items-center flex-col'>
        <h1 className='text-white text-center pt-6 md:pt-0 text-8xl md:text-9xl md:mt-40 select-none font-[PoppinsBold] primary-title primary-title-hero'>
          Join our team
        </h1>
        <p className='text-gray-300 text-lg md:text-2xl font-[Satoshi] drop-shadow-md mb-8 text-center mt-2'>
          and help us build the future of software development.
        </p>
        <div className='flex flex-col md:flex-row gap-10 md:gap-6'>
          <button
            type='submit'
            onClick={positions}
            className='btn-open-positions font-[PoppinsBold]'
          >
            Open Positions
          </button>
          <button
            type='submit'
            onClick={learnmore}
            className='btn-learn-more font-[PoppinsBold]'
          >
            Learn More
          </button>
        </div>
        {/* <div className='absolute -z-20 md:mt-32 inline-flex justify-center items-center'>
          <World />
        </div> */}
        <Image
          src='/World-Map-Heat-Map.gif'
          alt='World map'
          width={1200}
          height={1200}
          className='absolute -z-20 md:mt-80 opacity-40 md:opacity-25 grayscale'
          loading='lazy'
        />
      </div>
    </section>
  )
}
