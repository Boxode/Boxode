'use client'
import Link from 'next-intl/link'
import Image from 'next/image'
import { Dropdown } from '@nextui-org/react'

export default function DropdownLang() {
  return (
    <Dropdown>
      <Dropdown.Button
        solid
        color='light'
        className='text-white font-[Satoshi] font-semibold'
      >
        Change Language
      </Dropdown.Button>
      <Dropdown.Menu aria-label='Static Actions'>
        <Dropdown.Item key='en'>
          <Link href='/' locale='en' className='flex items-center'>
            <Image
              src='/svg/Flag_of_the_USA.svg'
              alt='USA'
              width={22}
              height={22}
              className='rounded-sm mr-3'
            />
            EN
          </Link>
        </Dropdown.Item>
        <Dropdown.Item key='es'>
          <Link href='/' locale='es' className='flex items-center'>
            <Image
              src='/svg/Flag_of_Mexico.svg'
              alt='Mexico'
              width={22}
              height={22}
              className='rounded-sm mr-3'
            />
            ES
          </Link>
        </Dropdown.Item>
        <Dropdown.Item key='de'>
          <Link href='/' locale='de' className='flex items-center'>
            <Image
              src='/svg/Flag_of_Germany.svg'
              alt='Germany'
              width={22}
              height={22}
              className='rounded-sm mr-3'
            />
            DE
          </Link>
        </Dropdown.Item>
        <Dropdown.Item key='pt'>
          <Link href='/' locale='pt' className='flex items-center'>
            <Image
              src='/svg/Flag_of_Brazil.svg'
              alt='Brazil'
              width={22}
              height={22}
              className='rounded-sm mr-3'
            />
            PT
          </Link>
        </Dropdown.Item>
        <Dropdown.Item key='fr'>
          <Link href='/' locale='fr' className='flex items-center'>
            <Image
              src='/svg/Flag_of_France.svg'
              alt='France'
              width={22}
              height={22}
              className='rounded-sm mr-3'
            />
            FR
          </Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
