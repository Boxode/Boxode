import React from 'react'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button
} from '@nextui-org/react'
import Link from 'next-intl/link'

export default function DropdownLang() {
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set(['Change Language'])
  )

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
    [selectedKeys]
  )
  return (
    <Dropdown className='bg-white rounded-lg'>
      <DropdownTrigger>
        <Button
          color='default'
          variant='bordered'
          className='capitalize text-current px-5 py-2 border-2 border-gray-100/10 rounded-lg text-xs'
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label='Single selection actions'
        variant='flat'
        disallowEmptySelection
        selectionMode='single'
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <DropdownItem key='EN'>
          {' '}
          <Link href='/' locale='en' className='flex items-center'>
            <img
              src='/svg/Flag_of_the_USA.svg'
              alt='USA'
              width={22}
              height={22}
              className='rounded-sm mr-3'
            />
            EN
          </Link>
        </DropdownItem>
        <DropdownItem key='ES'>
          <Link href='/' locale='es' className='flex items-center'>
            <img
              src='/svg/Flag_of_Mexico.svg'
              alt='Mexico'
              width={22}
              height={22}
              className='rounded-sm mr-3'
            />
            ES
          </Link>
        </DropdownItem>
        <DropdownItem key='DE'>
          <Link href='/' locale='de' className='flex items-center'>
            <img
              src='/svg/Flag_of_Germany.svg'
              alt='Germany'
              width={22}
              height={22}
              className='rounded-sm mr-3'
            />
            DE
          </Link>
        </DropdownItem>
        <DropdownItem key='PT'>
          <Link href='/' locale='pt' className='flex items-center'>
            <img
              src='/svg/Flag_of_Brazil.svg'
              alt='Brazil'
              width={22}
              height={22}
              className='rounded-sm mr-3'
            />
            PT
          </Link>
        </DropdownItem>
        <DropdownItem key='FR'>
          <Link href='/' locale='fr' className='flex items-center'>
            <img
              src='/svg/Flag_of_France.svg'
              alt='France'
              width={22}
              height={22}
              className='rounded-sm mr-3'
            />
            FR
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
