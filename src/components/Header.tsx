const Header = () => {
  return (
    <header>
      <div className='fixed w-full z-20 border-b border-white/5 bg-black'>
        <div className='px-6 md:px-12 lg:px-6 lg:py-4'>
          <div className='flex items-center justify-between'>
            <div className='relative z-20'>
              <a href="#" className='flex items-center'>
                <img src="/BoxodeB.svg" alt="Boxode logo" className='w-40 md:w-44 mr-3'/>
              </a>
            </div>
            <div className='flex items-center justify-end lg:border-l-0'>
              <input type="checkbox" name="VTX" id="VTX" className='peer' hidden />
              <label htmlFor='VTX' className='peer-checked:VTX block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden'>
                <div aria-hidden='true' className='m-auto h-0.5 w-6 rounded bg-white transition duration-300'></div>
                <div aria-hidden='true' className='m-auto mt-2 h-0.5 w-6 rounded bg-white transition duration-300'></div>
              </label>
              <div className='peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-black shadow-x transition duration-300 lg:shadow-none lg:border-l-0 lg:w-auto lg:static lg:translate-x-0'>
                <div className="flex flex-col h-full lg:flex-row jusfify-between lg:items-center">
                  <ul className='px-6 pt-32 text-white font-[Questrial] font-medium space-y-8 lg:space-y-0 md:px-12 lg:flex lg:space-x-12 lg:pt-0 font-xl'>
                    <li>
                      <a href="#" className='group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-gray-500 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100'>
                        <span className='relative ease-in duration-200'>Inicio</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className='group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-gray-500 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100'>
                        <span className='relative ease-in duration-200'>Servicios</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className='group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-gray-500 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100'>
                        <span className='relative ease-in duration-200'>Nuestros Clientes</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className='group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-gray-500 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100'>
                        <span className='relative ease-in duration-200'>Nosotros</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className='group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:bg-gray-500 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100'>
                        <span className='relative ease-in duration-200'>Contacto</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
