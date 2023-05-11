import Link from 'next/link'

export default function Gip() {
  return (
    <section>
      <div className='md:pt-80 pb-8 overflow-hidden z-10'>
        <div className='max-w-full'>
          <div className='lg:grid lg:grid-cols-12 mx-auto justify-center'>
            <article className='relative z-10 px-4 sm:px-6 sm pb-10 md:pb-0 pt-10 md:pt-0 lg:mb-0 lg:px-0 lg:text-left lg:flex col-span-6'>
              <div className='lg:py-24 px-4 sm:px-16'>
                <h6 className='text-[burlywood]/80 lg:text-left font-sans tracking-wide font-semibold text-lg'>
                  Our Commitment
                </h6>
                <p className='mt-3 font-[Questrial] sm:mx-auto lg:mx-0 max-w-lg lg:text-left text-xl sm:text-4xl text-neutral-200/80 sm:mt-5'>
                  Our commitment is based on the principles of learning, collaboration, passion and transparency of all our work.
                </p>
              </div>
            </article>
            <article className='relative pt-10 md:pt-0 pb-10 md:pb-0 z-10 px-4 sm:px-6 lg:mb-0 lg:px-0 lg:text-left lg:flex col-span-6'>
              <div className='lg:py-24 px-4 sm:px-16'>
                <ul className='text-white'>
                  <li>Hola</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
