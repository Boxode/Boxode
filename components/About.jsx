import Image from 'next/image'

export default function About() {
  return (
    <section id='about' className='pt-10'>
      <div>
        <div className='flex items-center justify-center flex-col mt-16 mb-10'>
          <Image
            src='/2.webp'
            className='w-12 select-none'
            alt='2'
            width={100}
            height={100}
          />
          <h2 className='about text-6xl lg:text-8xl font-[PoppinsBold] tracking-normal p-4 opacity-90 select-none'>
            About Us
          </h2>
          <p className='text-gray-100/50 text-md px-6 text-center lg:text-xl font-[Satoshi]'>
            We leave you some relevant information about our mission and vision.
          </p>
        </div>
        <div className='pt-10 pb-8 overflow-hidden z-10'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6'>
            <div className='lg:grid lg:grid-cols-12 mx-auto lg:gap-16 justify-center'>
              <div className='relative z-10 px-4 sm:px-6 sm:text-center lg:mb-0 lg:px-0 lg:text-left lg:flex col-span-6'>
                <div className='lg:py-24'>
                  <p className='mt-3 font-[PoppinsBold] sm:mx-auto lg:mx-0 max-w-lg text-center lg:text-left text-4xl lg:text-6xl text-neutral-200 sm:mt-5'>
                    Mission
                  </p>
                  <p className='mt-3 font-[Satoshi] sm:mx-auto lg:mx-0 max-w-lg text-center lg:text-left text-base sm:text-xl text-neutral-200/40 sm:mt-5'>
                    To provide high-quality and innovative software solutions to
                    our clients, improving their business processes and helping
                    them achieve their business goals efficiently and
                    profitably. We are committed to creating an excellent user
                    experience and providing unmatched customer service.
                  </p>
                </div>
              </div>
              <div className='mx-auto flex items-center justify-center lg:justify-start'>
                <div className=' relative md:absolute -z-20'>
                  <div className='flex image-tech justify-center items-center relative flex-col px-6 sm:px-12 pt-8 w-96 lg:w-[700px] select-none z-20  md:hidden lg:block'>
                    <div className='relative hidden md:absolute w-40 lg:w-64 h-40 lg:h-64 amimation-delay-2000 bg-gradient-to-r from-[#EE609C] to-[#6564D9] rounded-full blur-2xl opacity-30 -z-20 animate-blob' />
                    <Image
                      src='/mockup.webp'
                      alt='PC'
                      loading='lazy'
                      width={500}
                      height={500}
                    />
                    <div className='absolute hidden  lg:top-60 w-40 lg:w-64 h-40 lg:h-64 animation-delay-4000 bg-gradient-to-r from-[#EE609C] to-[#6564D9]  rounded-full blur-2xl opacity-30 -z-20 animate-blob text' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-10 pb-8 overflow-hidden z-10'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6'>
            <div className='lg:grid lg:grid-cols-12 mx-auto lg:gap-16 justify-center'>
              <div className='relative z-10 px-4 sm:px-6 sm:text-center lg:mb-0 lg:px-0 lg:text-left lg:flex col-span-6'>
                <div className='lg:py-24'>
                  <p className='mt-3 font-[PoppinsBold] sm:mx-auto lg:mx-0 max-w-lg text-center lg:text-left text-4xl lg:text-6xl text-neutral-200 sm:mt-5'>
                    Vision
                  </p>
                  <p className='mt-3 font-[Satoshi] sm:mx-auto lg:mx-0 max-w-lg text-center lg:text-left text-base sm:text-xl text-neutral-200/40 sm:mt-5'>
                    To be the company preferred by clients in the development of
                    software and web solutions, offering high quality products
                    and services and advanced technology. We strive to be a
                    source of innovation and excellence in the marketplace, and
                    to build long-lasting, trusted relationships with our
                    customers.
                  </p>
                </div>
              </div>
              <div className='mx-auto flex items-center justify-center lg:justify-start'>
                <div className=' relative md:absolute -z-20'>
                  <div className='flex image-tech justify-center items-center relative flex-col px-6 sm:px-12 pt-8 w-96 lg:w-[700px] select-none z-20  md:hidden lg:block'>
                    <div className='relative hidden md:absolute w-32 lg:w-64 h-32 lg:h-64 amimation-delay-2000 bg-gradient-to-r from-[#EE609C] to-[#6564D9] rounded-full blur-2xl opacity-30 -z-20 animate-blob' />
                    <Image
                      src='/svg/software-dev.svg'
                      alt='PC'
                      loading='lazy'
                      width={500}
                      height={500}
                    />
                    <div className='absolute hidden lg:top-60 w-40 lg:w-64 h-40 lg:h-64 animation-delay-4000 bg-gradient-to-r from-[#EE609C] to-[#6564D9]  rounded-full blur-2xl opacity-30 -z-20 animate-blob text' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
