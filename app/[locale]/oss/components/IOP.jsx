import Link from 'next/link'

export default function Gip() {
  return (
    <section>
      <div className='pt-10 pb-8 overflow-hidden z-10'>
        <div className='max-w-full'>
          <div className='lg:grid lg:grid-cols-12 mx-auto justify-center'>
            <article className='relative z-10 px-4 sm:px-6 sm pb-10 md:pb-0 pt-10 md:pt-0 lg:mb-0 lg:px-0 lg:text-left lg:flex col-span-6 border-t-2 border-b-2 lg:border-r-2 border-gray-800/30 get-improve'>
              <div className='lg:py-24 px-4 sm:px-16'>
                <p className='text-white lg:text-left font-[Satoshi] text-lg'>
                  Boxode's Community
                </p>
                <h4 className='mt-3 font-[PoppinsBold] sm:mx-auto lg:mx-0 max-w-lg lg:text-left text-2xl lg:text-4xl text-white sm:mt-5'>
                  Get involved
                </h4>
                <p className='mt-3 font-[Satoshi] sm:mx-auto lg:mx-0 max-w-lg lg:text-left text-base sm:text-lg text-neutral-200/80 sm:mt-5'>
                  Together we are building amazing things and we welcome
                  everyone to be able to participate in OSS projects. It is an
                  exciting time to use technology to create new development
                  tools that facilitate work, applications, services, etc.
                </p>
                <div className='pt-4 flex flex-col'>
                  <Link
                    href='https://github.com/Boxode'
                    className='text-white link link--arrowed inline-flex font-[Satoshi] text-base sm:text-lg'
                  >
                    Happening Now{' '}
                    <svg
                      className='arrow-icon'
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      viewBox='0 0 32 32'
                    >
                      <g
                        fill='none'
                        stroke='#e5e5e5'
                        strokeWidth='1.5'
                        strokeLinejoin='round'
                        strokeMiterlimit='10'
                      >
                        <circle
                          className='arrow-icon--circle'
                          cx='16'
                          cy='16'
                          r='15.12'
                        />
                        <path
                          className='arrow-icon--arrow'
                          d='M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98'
                        />
                      </g>
                    </svg>
                  </Link>

                  <Link
                    href='oss/features-projects'
                    className='text-white link link--arrowed inline-flex font-[Satoshi] text-base sm:text-lg pt-2'
                  >
                    Features Projects{' '}
                    <svg
                      className='arrow-icon'
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      viewBox='0 0 32 32'
                    >
                      <g
                        fill='none'
                        stroke='#e5e5e5'
                        strokeWidth='1.5'
                        strokeLinejoin='round'
                        strokeMiterlimit='10'
                      >
                        <circle
                          className='arrow-icon--circle'
                          cx='16'
                          cy='16'
                          r='15.12'
                        />
                        <path
                          className='arrow-icon--arrow'
                          d='M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98'
                        />
                      </g>
                    </svg>
                  </Link>

                  <Link
                    href='oss/contributing'
                    className='text-white link link--arrowed inline-flex font-[Satoshi] text-base sm:text-lg pt-4'
                  >
                    Contributing{' '}
                    <svg
                      className='arrow-icon'
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      viewBox='0 0 32 32'
                    >
                      <g
                        fill='none'
                        stroke='#e5e5e5'
                        strokeWidth='1.5'
                        strokeLinejoin='round'
                        strokeMiterlimit='10'
                      >
                        <circle
                          className='arrow-icon--circle'
                          cx='16'
                          cy='16'
                          r='15.12'
                        />
                        <path
                          className='arrow-icon--arrow'
                          d='M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98'
                        />
                      </g>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
            <article className='relative pt-10 md:pt-0 pb-10 md:pb-0 z-10 px-4 sm:px-6 lg:mb-0 lg:px-0 lg:text-left lg:flex col-span-6 our-program border-t-2 border-b-2 border-gray-800/30'>
              <div className='lg:py-24 px-4 sm:px-16'>
                <p className='text-white lg:text-left font-[Satoshi] text-lg'>
                  Learn more about
                </p>
                <h4 className='mt-3 font-[PoppinsBold] sm:mx-auto lg:mx-0 max-w-lg lg:text-left text-2xl lg:text-4xl text-white sm:mt-5'>
                  Our OSS Program
                </h4>
                <p className='mt-3 font-[Satoshi] sm:mx-auto lg:mx-0 max-w-lg lg:text-left text-base sm:text-lg text-neutral-200/80 sm:mt-5'>
                  We have been working hard to have a solid OSS program in order
                  to facilitate the work of many programmers around the world
                  and that they have the encouragement to participate in
                  contributing, launching new open source projects, etc.
                </p>
                <div className='pt-4 flex flex-col'>
                  <Link
                    href='oss/program'
                    className='text-white link link--arrowed inline-flex font-[Satoshi] text-base sm:text-lg'
                  >
                    Our Program{' '}
                    <svg
                      className='arrow-icon'
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      viewBox='0 0 32 32'
                    >
                      <g
                        fill='none'
                        stroke='#e5e5e5'
                        strokeWidth='1.5'
                        strokeLinejoin='round'
                        strokeMiterlimit='10'
                      >
                        <circle
                          className='arrow-icon--circle'
                          cx='16'
                          cy='16'
                          r='15.12'
                        />
                        <path
                          className='arrow-icon--arrow'
                          d='M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98'
                        />
                      </g>
                    </svg>
                  </Link>

                  <Link
                    href='oss/ecosystem'
                    className='text-white link link--arrowed inline-flex font-[Satoshi] text-base sm:text-lg pt-2'
                  >
                    Ecosystem{' '}
                    <svg
                      className='arrow-icon'
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      viewBox='0 0 32 32'
                    >
                      <g
                        fill='none'
                        stroke='#e5e5e5'
                        strokeWidth='1.5'
                        strokeLinejoin='round'
                        strokeMiterlimit='10'
                      >
                        <circle
                          className='arrow-icon--circle'
                          cx='16'
                          cy='16'
                          r='15.12'
                        />
                        <path
                          className='arrow-icon--arrow'
                          d='M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98'
                        />
                      </g>
                    </svg>
                  </Link>

                  <Link
                    href='oss/projects-support'
                    className='text-white link link--arrowed inline-flex font-[Satoshi] text-base sm:text-lg pt-4'
                  >
                    The projects we support{' '}
                    <svg
                      className='arrow-icon'
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      viewBox='0 0 32 32'
                    >
                      <g
                        fill='none'
                        stroke='#e5e5e5'
                        strokeWidth='1.5'
                        strokeLinejoin='round'
                        strokeMiterlimit='10'
                      >
                        <circle
                          className='arrow-icon--circle'
                          cx='16'
                          cy='16'
                          r='15.12'
                        />
                        <path
                          className='arrow-icon--arrow'
                          d='M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98'
                        />
                      </g>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
