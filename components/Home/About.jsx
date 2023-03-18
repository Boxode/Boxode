import Image from 'next/image'

export default function About() {
  return (
    <section id='about' className='border-t border-gray-100/5 pt-10'>
      <div>
        <div className='flex items-center justify-center flex-col mt-16 mb-10'>
          <Image
            src='/2.webp'
            className='w-12 select-none'
            alt='2'
            width={100}
            height={100}
          />
          <h2 className='about text-6xl lg:text-8xl font-[SegoeBold] tracking-normal p-4 opacity-90 select-none'>
            Nosotros
          </h2>
          <p className='text-gray-100/50 text-md px-6 text-center lg:text-2xl font-[Questrial]'>
            Te dejamos un poco de información relevante sobre nuestra misión y
            visión.
          </p>
        </div>
        <div className='pt-10 pb-8 overflow-hidden z-10'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6'>
            <div className='lg:grid lg:grid-cols-12 mx-auto lg:gap-16 justify-center'>
              <div className='relative z-10 px-4 sm:px-6 sm:text-center lg:mb-0 lg:px-0 lg:text-left lg:flex col-span-6'>
                <div className='lg:py-24'>
                  <p className='mt-3 font-[SegoeBold] sm:mx-auto lg:mx-0 max-w-lg text-center lg:text-left text-4xl lg:text-6xl text-neutral-200 sm:mt-5'>
                    Misión
                  </p>
                  <p className='mt-3 font-[Questrial] sm:mx-auto lg:mx-0 max-w-lg text-center lg:text-left text-base sm:text-xl text-neutral-200/40 sm:mt-5'>
                    Proporcionar soluciones de software innovadoras y de alta
                    calidad a nuestros clientes, mejorando sus procesos
                    empresariales y ayudándoles a alcanzar sus objetivos de
                    negocio de manera eficiente y rentable. Nuestro compromiso
                    es crear una experiencia de usuario excelente y brindar un
                    servicio al cliente inigualable.
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
                      width={600}
                      height={600}
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
                  <p className='mt-3 font-[SegoeBold] sm:mx-auto lg:mx-0 max-w-lg text-center lg:text-left text-4xl lg:text-6xl text-neutral-200 sm:mt-5'>
                    Visión
                  </p>
                  <p className='mt-3 font-[Questrial] sm:mx-auto lg:mx-0 max-w-lg text-center lg:text-left text-base sm:text-xl text-neutral-200/40 sm:mt-5'>
                    Ser la empresa preferida por los clientes en el desarrollo
                    de soluciones de software y web, ofreciendo productos y
                    servicios de alta calidad y tecnología avanzada. Nos
                    esforzamos por ser una fuente de innovación y excelencia en
                    el mercado, y por establecer relaciones duraderas y
                    confiables con nuestros clientes. Buscamos fomentar un
                    ambiente de trabajo colaborativo y motivador para nuestros
                    empleados, alentándolos a alcanzar su máximo potencial y
                    brindar un servicio impecable a nuestros clientes.
                  </p>
                </div>
              </div>
              <div className='mx-auto flex items-center justify-center lg:justify-start'>
                <div className=' relative md:absolute -z-20'>
                  <div className='flex image-tech justify-center items-center relative flex-col px-6 sm:px-12 pt-8 w-96 lg:w-[700px] select-none z-20  md:hidden lg:block'>
                    <div className='relative hidden md:absolute w-40 lg:w-64 h-40 lg:h-64 amimation-delay-2000 bg-gradient-to-r from-[#EE609C] to-[#6564D9] rounded-full blur-2xl opacity-30 -z-20 animate-blob' />
                    <Image
                      src='/software-dev.svg'
                      alt='PC'
                      loading='lazy'
                      width={600}
                      height={600}
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
