const Services = () => {
  return (
    <section className='min-h-screen' id="services">
		<div className='flex items-center justify-center flex-col mt-32 lg:mt-72'>
		  <span className='text-white/30 mb-32 font-[Questrial] lg:text-2xl border-2 py-5 px-5 rounded-sm border-gray-100/20'>Explora el camino de Boxode</span>
		    <img src="/1.webp" className='w-12 select-none' alt="1" />
		  <h2 className='services text-6xl lg:text-8xl font-[SegoeBold] tracking-normal p-4 opacity-90 select-none'>Servicios</h2>
		  <p className='text-gray-100/50 text-md px-6 text-center lg:text-2xl font-[Questrial]'>En Boxode nuestro primordial objetivo es desarrollar productos de calidad y sobre todo que se adapten a tus necesidades</p>
		</div>
		<div className='mt-16'>
		  <article className="flex justify-around items-center">
		  	<div className="relative flex items-center lg:items-start justify-center lg:justify-around flex-col">
			  <div className='absolute w-52 h-52 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30 -z-20'></div>
		  	  <img src="/hammer.svg" alt="" className='w-16 h-16 mb-5 shadow-md lg:shadow-none'/>
		  	  <h3 className="text-white text-2xl pb-4 lg:text-4xl font-[SegoeBold] leading-relaxed">Desarrollo de Software</h3>
		  	  <p className='text-white/80 font-[SegoeUI] text-md lg:text-2xl text-center px-6 lg:px-0'>Desarrollamos soluciones escalables para plataformas multidisciplinarias con las más nuevas tecnologías.</p>
		  	</div>
		  </article>
		</div>
    </section>
  )
}

export default Services
