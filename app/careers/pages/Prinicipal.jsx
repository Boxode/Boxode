'use client'

import style from './Careers.module.css'
import Image from 'next/image'
import { Grid, Button } from '@nextui-org/react'

export default function Principal () {
  return (
    <section className={style.Careers}>
      <div className='flex justify-center items-center flex-col'>
        <h1 className='text-white text-center text-9xl md:mt-40 font-sans font-semibold'>Join our team</h1>
        <p className='text-gray-500 text-lg md:text-2xl font-sans mb-8 text-center mt-2'>and help us build the future of software development.</p>
        <div className='flex flex-col md:flex-row'>
          <Grid.Container gap={3} css={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
            <Grid>
              <Button css={{ backgroundColor: 'White', color: 'Black' }} size='lg' auto className='hover:scale-105 transition'>
                Open Positions
              </Button>
            </Grid>
            <Grid>
              <Button css={{ backgroundColor: '#232323' }} size='lg' auto className='hover:scale-105 transition hover:drop-shadow-lg shadow-white'>
                Learn More
              </Button>
            </Grid>
          </Grid.Container>
        </div>
        <Image src='/world_dotted_map.svg' alt='World map' width={1200} height={1200} className='absolute -z-20 md:mt-80 opacity-10' />
      </div>
    </section>
  )
}
