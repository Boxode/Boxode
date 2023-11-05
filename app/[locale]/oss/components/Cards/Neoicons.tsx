import { Link, GitHub, Star, Fork } from '@/components/Icons'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Neoicons() {
  const { data } = useSWR(
    'https://api.github.com/repos/Boxode/neoicons',
    fetcher
  )
  return (
    <div className='max-w-xs grayscale hover:grayscale-0 transition-all duration-200 border hover:bg-gradient-to-tl from-white/[0.08] to-black border-gray-800 rounded-xl shadow hover:border-gray-300'>
      <span className='bg-[url(/svg/pattern.svg)] bg-no-repeat bg-cover select-none flex items-center justify-center h-32 ease-in-out border-b border-gray-800 rounded-t-lg'>
        <img
          className='rounded-t-lg w-52'
          src='/oss/neoicons.svg'
          alt='windUI'
        />
      </span>
      <div className='p-5'>
        <h5 className='mb-2 text-2xl font-GilroyBold tracking-tight text-white'>
          neoicons
        </h5>
        <p className='font-normal font-GilroyRegular text-gray-400'>
          Explore a wide collection of high-quality icons to bring your projects
          to life with style and simplicity.
        </p>
      </div>
      <div className='flex items-center justify-between px-4 py-4'>
        <div className='flex gap-3 opacity-70 select-none'>
          <strong className='text-white flex items-center text-sm'>
            <span className='mr-1'>
              <Star />
            </span>
            {data?.subscribers_count}
          </strong>
          <strong className='text-white flex items-center text-sm'>
            <span className='mr-1'>
              <Fork />
            </span>
            {data?.forks_count}
          </strong>
        </div>
        <div className='flex gap-4'>
          <a
            href='https://github.com/Boxode/neoicons'
            target='_blank'
            rel='noopener noreferrer'
            className='duration-150 hover:scale-105 hover:shadow-sm'
          >
            <GitHub />
          </a>
          <a
            href='https://neoicons.windui.org/'
            target='_blank'
            rel='noopener noreferrer'
            className='duration-150 hover:scale-105 hover:shadow-sm'
          >
            <Link />
          </a>
        </div>
      </div>
    </div>
  )
}
