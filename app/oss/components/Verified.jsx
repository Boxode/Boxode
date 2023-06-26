'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Tooltip } from '@nextui-org/react'

export default function Verified() {
  return (
    <section className='min-h-[200px]'>
      <h2 className='text-white font-[PoppinsBold] px-10 text-3xl text-center md:text-left'>
        Verified Entities
      </h2>
      <p className='text-white font-[Satoshi] opacity-40 text-xs md:text-base text-center md:text-left px-10 mt-2'>
        verified entities are those that are known for their outstanding work
        and have become known for their contributions to OSS*
      </p>
      <div className='flex md:justify-around flex-col md:flex-row select-none'>
        <Link
          href='https://github.com/Boxode'
          target='_blank'
          className='flex md:items-center md:justify-center mt-4 ml-4 md:ml-0'
        >
          <Image
            className='rounded-full border border-gray-900'
            src='/Boxode-circle-logo.png'
            alt='Boxode'
            width={80}
            height={80}
          />
          <div className='flex ml-4 flex-col'>
            <h4 className='text-white flex font-[PoppinsBold]'>
              Boxode Corporation{' '}
              <Tooltip content='Verified Entity'>
                <Image
                  className='ml-2 hover:scale-105 transition'
                  src='/svg/verified-entity.svg'
                  alt='Verified Entity'
                  width={25}
                  height={25}
                />
              </Tooltip>
            </h4>
            <p className='text-gray-400 text-sm font-[Satoshi]'>
              github.com/boxode
            </p>
          </div>
        </Link>
        <Link
          href='https://github.com/FabianHMzz'
          target='_blank'
          className='flex md:items-center md:justify-center ml-4 md:ml-0 mt-3 md:mt-0'
        >
          <Image
            className='rounded-full border border-gray-900'
            src='/FH.png'
            alt='Boxode'
            width={80}
            height={80}
          />
          <div className='flex ml-4 flex-col z-20'>
            <h4 className='text-white flex font-[PoppinsBold]'>
              Fabian Herrera{' '}
              <Tooltip content='Verified Entity'>
                <Image
                  className='ml-2 hover:scale-105 transition'
                  src='/svg/verified-entity.svg'
                  alt='Verified Entity'
                  width={25}
                  height={25}
                />
              </Tooltip>
            </h4>
            <p className='text-gray-400 text-sm font-[Satoshi]'>
              Founder & CEO
            </p>
          </div>
        </Link>
      </div>
    </section>
  )
}
