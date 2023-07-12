'use client'

import style from './Careers.module.css'
import Image from 'next/image'
// import World from './World'
import { Grid, Button } from '@nextui-org/react'

export default function Principal() {
  return (
    <section className={style.Careers}>
      <div className='flex justify-center items-center flex-col'>
        <h1 className='text-white text-center pt-6 md:pt-0 text-8xl md:text-9xl md:mt-40 select-none font-[PoppinsBold] primary-title'>
          Join our team
        </h1>
        <p className='text-gray-300 text-lg md:text-2xl font-[Satoshi] drop-shadow-md mb-8 text-center mt-2'>
          and help us build the future of software development.
        </p>
        <div className='flex flex-col md:flex-row'>
          <Grid.Container
            gap={3}
            css={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Grid>
              <Button
                css={{ backgroundColor: 'White', color: 'Black' }}
                size='lg'
                auto
                className='hover:scale-105 transition hover:shadow-lg shadow-white -z-0'
              >
                Open Positions
              </Button>
            </Grid>
            <Grid>
              <Button
                css={{ backgroundColor: '#232323' }}
                size='lg'
                auto
                className='hover:scale-105 transition hover:drop-shadow-lg shadow-white -z-0'
              >
                Learn More
              </Button>
            </Grid>
          </Grid.Container>
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
        />
      </div>
    </section>
  )
}
