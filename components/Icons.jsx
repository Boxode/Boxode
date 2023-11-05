export function Sun() {
  return (
    <svg
      data-testid='geist-icon'
      fill='none'
      height='24'
      shapeRendering='geometricPrecision'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      viewBox='0 0 24 24'
      width='24'
      style={{
        color: 'currentcolor',
        width: '16px',
        height: '16px'
      }}
    >
      <circle cx='12' cy='12' r='5' />
      <path d='M12 1v2' />
      <path d='M12 21v2' />
      <path d='M4.22 4.22l1.42 1.42' />
      <path d='M18.36 18.36l1.42 1.42' />
      <path d='M1 12h2' />
      <path d='M21 12h2' />
      <path d='M4.22 19.78l1.42-1.42' />
      <path d='M18.36 5.64l1.42-1.42' />
    </svg>
  )
}

export function Moon() {
  return (
    <svg
      data-testid='geist-icon'
      fill='none'
      height='24'
      shapeRendering='geometricPrecision'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      viewBox='0 0 24 24'
      width='24'
      style={{
        color: 'currentcolor',
        width: '16px',
        height: '16px'
      }}
    >
      <path d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z' />
    </svg>
  )
}

export function System() {
  return (
    <svg
      data-testid='geist-icon'
      fill='none'
      height='24'
      shapeRendering='geometricPrecision'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      viewBox='0 0 24 24'
      width='24'
      style={{
        color: 'currentcolor',
        width: '16px',
        height: '16px'
      }}
    >
      <rect x='2' y='3' width='20' height='14' rx='2' ry='2' />
      <path d='M8 21h8' />
      <path d='M12 17v4' />
    </svg>
  )
}

export function GitHub() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-6 h-6'
      viewBox='0 0 480 512'
      fill='#fff'
    >
      <path d='M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z' />
    </svg>
  )
}

export function Link() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      className='w-6 h-6 text-white'
    >
      <path
        fillRule='evenodd'
        d='M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export function Star() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      className='w-4 h-4'
    >
      <path
        fillRule='evenodd'
        d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export function Fork() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-4 h-4'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
      <path d='M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2' />
      <path d='M12 12l0 4' />
    </svg>
  )
}
