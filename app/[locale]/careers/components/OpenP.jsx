export default function OpenP() {
  return (
    <section>
      <div className='text-white pt-10 md:pt-24'>
        <p className='font-[Satoshi] pt-4 px-4 md:px-0 text-lg md:text-xl text-center'>
          Thank you for being interested in working with us, but there are
          currently no vacancies available.
        </p>
        <p className='font-[Satoshi] pt-4 px-4 md:px-0 text-lg md:text-xl text-center'>
          You can subscribe to the newsletter to receive notifications of new
          vacancies available.
        </p>
        <p className='font-[Satoshi] pt-4 px-4 md:px-0 text-lg md:text-xl text-center'>
          All spam free.
        </p>
        <div class='mx-auto max-w-screen-md sm:text-center pt-10 pb-16 md:pb-32'>
          <form action='#'>
            <div class='items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0'>
              <div class='relative w-full'>
                <label
                  for='email'
                  class='hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Email address
                </label>
                <div class='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                  <svg
                    class='w-5 h-5 text-gray-500 dark:text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                    <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                  </svg>
                </div>
                <input
                  class='block p-3 pl-10 w-full text-sm text-black font-[Satoshi] bg-gray-50 border rounded-lg sm:rounded-none sm:rounded-l-lg'
                  placeholder='Enter your email'
                  type='email'
                  id='email'
                  required
                />
              </div>
              <div>
                <button
                  type='submit'
                  class='py-3 px-5 w-full text-sm font-[PoppinsBold] hover:transition-colors ease-in-out duration-200 text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-gray-500 focus:ring-4'
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
