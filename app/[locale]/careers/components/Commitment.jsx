import Image from 'next/image'

export default function Gip() {
  return (
    <section>
      <div className='md:pt-80 pb-8 md:px-16 overflow-hidden z-10'>
        <div className='max-w-full' id='learnmore'>
          <div className='lg:grid lg:grid-cols-12 mx-auto justify-center'>
            <article className='relative z-10 px-4 sm:px-6 sm pb-10 md:pb-0 pt-10 md:pt-0 lg:mb-0 lg:px-0 lg:text-left lg:flex col-span-6'>
              <div className='lg:py-24 px-4 sm:px-16'>
                <h6 className='text-[burlywood] lg:text-left font-[GilroyBold] tracking-wide text-lg'>
                  Our Commitment
                </h6>
                <p className='mt-3 font-[GilroyRegular] sm:mx-auto lg:mx-0 max-w-lg lg:text-left text-xl sm:text-4xl text-white font-bold sm:mt-5'>
                  Our work is based on the principles of learning,
                  collaboration, passion and transparency with all our work
                  teams.
                </p>
              </div>
            </article>
            <article className='relative pt-10 md:pt-0 pb-10 md:pb-0 z-10 px-4 sm:px-6 lg:mb-0 lg:px-0 lg:text-left lg:flex col-span-6'>
              <div className='lg:py-24 px-4 sm:px-16 grid grid-cols-1'>
                <ul className='text-white font-[GilroyRegular]'>
                  <li className='flex items-center'>
                    <div className='flex flex-row items-center text-xl'>
                      <span className='leading-none'>
                        <Image
                          src='/svg/verified.svg'
                          alt='Verified'
                          width={26}
                          height={26}
                          className='mr-4 select-none'
                        />
                      </span>
                      <span>We always use our own tools to create.</span>
                    </div>
                  </li>
                  <li className='flex items-center'>
                    <div className='flex flex-row items-center pt-4 text-xl'>
                      <span className='leading-none'>
                        <Image
                          src='/svg/verified.svg'
                          alt='Verified'
                          width={26}
                          height={26}
                          className='mr-4 select-none'
                        />
                      </span>
                      <span>We prosper and grow always together.</span>
                    </div>
                  </li>
                  <li className='flex items-center'>
                    <div className='flex flex-row items-center pt-4 text-xl'>
                      <span className='leading-none'>
                        <Image
                          src='/svg/verified.svg'
                          alt='Verified'
                          width={26}
                          height={26}
                          className='mr-4 select-none'
                        />
                      </span>
                      <span>We are always learning and improving.</span>
                    </div>
                  </li>
                  <li className='flex items-center'>
                    <div className='flex flex-row items-center pt-4 text-xl'>
                      <span className='leading-none'>
                        <Image
                          src='/svg/verified.svg'
                          alt='Verified'
                          width={26}
                          height={26}
                          className='mr-4 select-none'
                        />
                      </span>
                      <span>Our ability to create and learn together.</span>
                    </div>
                  </li>
                  <li className='flex items-center'>
                    <div className='flex flex-row items-center pt-4 text-xl'>
                      <span className='leading-none'>
                        <Image
                          src='/svg/verified.svg'
                          alt='Verified'
                          width={26}
                          height={26}
                          className='mr-9 sm:mr-4 select-none'
                        />
                      </span>
                      <span>
                        Committed to objectives, client satisfaction always
                        prioritized.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
