'use client'

import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <Header />
      <section class='section-error min-h-screen stars'>
        <Image
          src='/404.svg'
          alt='404'
          class='img-error'
          width={500}
          height={500}
        />
        <div class='font-[SegoeBold] pt-[5%] text-center'>
          <span id='L' class='error flex-row'>
            4
          </span>
          <span id='I' class='error flex-row px-24'>
            0
          </span>
          <span id='G' class='error flex-row'>
            4
          </span>
        </div>
        <p class='text-white/50 font-[Questrial] text-lg lg:text-2xl tracking-widest select-none z-20'>
          Page not found
        </p>
        <p class='text-white/50 font-[Questrial] px-4 lg:px-0 text-md text-center lg:text-left pt-4 lg:text-xl tracking-widest select-none z-20'>
          {' '}
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href='/'
          class='text-white/50 font-[Questrial] text-xl tracking-widest select-none underline decoration-white/50 z-20 pt-4'
        >
          Go to home
        </Link>
      </section>
    </>
  )
}
