const Footer = () => {
return (
  <footer className='bg-black border-t border-gray-100/10'>
    <div className='grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4'>
      <div>
        <h2 className='mb-6 text-[15px] font-medium text-gray-100/80 uppercase font-[SegoeBold]'>Novedades</h2>
        <ul className='text-gray-100/80 text-[11px]'>
          <li className='mb-4'>
              <a href='#!' className=' hover:underline'>Proximamente</a>
          </li>
        </ul>
       </div>
        <div>
          <h2 className='mb-6 text-[15px] font-medium text-gray-100/80 uppercase font-[SegoeBold]'>Centro de Ayuda</h2>
          <ul className='text-gray-100/80 text-[11px]'>
            <li className='mb-4 font-[SegoeUI]'>
                <a href="https://discord.gg/gdRmAa5xHU" target="_blank" rel="noopener noreferrer" className='hover:underline'>Discord Server</a>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
                <a href="https://twitter.com/_Boxode" target="_blank" rel="noopener noreferrer" className='hover:underline'>Twitter</a>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
                <a href="https://www.facebook.com/Boxodee" target="_blank" rel="noopener noreferrer" className='hover:underline'>Facebook</a>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
                <a href="https://www.instagram.com/_Boxode" target="_blank" rel="noopener noreferrer" className='hover:underline'>Instagram</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='mb-6 text-[15px] font-medium text-gray-100/80 uppercase font-[SegoeBold]'>Desarrollo y TI</h2>
          <ul className='text-gray-100/80 text-[11px]'>
            <li className='mb-4 font-[SegoeUI]'>
                <a href='/oss' className='hover:underline'>Código abierto</a>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
                <a href='/oss/contributing' className='hover:underline'>Contribuciones</a>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
                <a href='/oaa/coc' className='hover:underline'>Código de Conducta</a>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
                <a href="https://github.com/Boxode" target="_blank" rel="noopener noreferrer" className='hover:underline'>GitHub Empresarial</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='mb-6 text-[15px] font-medium text-gray-100/80 uppercase font-[SegoeBold]'>Compañia</h2>
          <ul className='text-gray-100/80 text-[11px]'>
            <li className='mb-4 font-[SegoeUI]'>
                <a href='/careers' className='hover:underline'>Trabajos</a>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
                <a href='/about' className='hover:underline'>Acerca de Boxode</a>
            </li>
            <li className='mb-4 font-[SegoeUI]'>
                <a href='/privacy' className='hover:underline'>Privacidad de Boxode</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='px-5 md:px-6 py-6 bg-black md:flex md:items-center md:justify-between'>
        <img src="/BoxodeB.svg" alt="Boxode" className='w-24'/>
          <div className='inline-block md:flex mt-4 space-x-3 sm:justify-center md:mt-0 font-[SegoeUI]'>
            <a href="/contactus"className='text-[11px] text-gray-100/80 hover:underline'>Ponte en contacto con Boxode</a>
			<a href="/sitemap"className='text-[11px] text-gray-100/80 hover:underline'>Mapa de sitio</a>
			<a href="/privacystatement"className='text-[11px] text-gray-100/80 hover:underline'>Privacidad</a>
			<a href="/trademarks"className='text-[11px] text-gray-100/80 hover:underline'>Marcas Registradas</a>
			<a href="/security-and-eco"className='text-[11px] text-gray-100/80 hover:underline'>Seguridad & Eco</a>
          <span className='text-[11px] text-gray-100/80 sm:text-center'>© Boxode <span id='year'>2023</span></span>
          </div>
      </div>
  </footer>

  )
}

export default Footer
