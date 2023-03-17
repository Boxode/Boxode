const Services = () => {
  return (
    <section className='min-h-screen' id="services">
		<div className='flex items-center justify-center flex-col mt-32 lg:mt-72'>
		  <span className='text-white/30 mb-32 font-[Questrial] lg:text-2xl border-2 py-5 px-5 rounded-sm border-gray-100/20'>Explora el camino de Boxode</span>
		    <img src="/1.webp" className='w-12 select-none' alt="1" />
		  <h2 className='services text-6xl lg:text-8xl font-[SegoeBold] tracking-normal p-4 opacity-90 select-none'>Servicios</h2>
		  <p className='text-gray-100/50 text-md px-6 text-center lg:text-2xl font-[Questrial]'>En Boxode nuestro primordial objetivo es desarrollar productos de calidad y sobre todo que se adapten a tus necesidades.</p>
		</div>
	  <div className='lg:px-44'>
		<div className='mt-16'>
		  <article className="flex justify-around items-center">
		  	<div className="relative flex items-center lg:items-start justify-center lg:justify-around flex-col">
			  <div className='absolute w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30 -z-20 animate-blob'></div>
			  <div className='absolute top-10 w-24 h-24 animation-delay-2000 bg-gradient-to-r from-teal-500 to-white rounded-full blur-2xl opacity-30 -z-20 animate-blob text'></div>
		  	  <img src="/hammer.svg" alt="" className='w-16 h-16 mb-5 drop-shadow-md'/>
		  	  <h3 className="text-white text-2xl pb-4 lg:text-4xl font-[SegoeBold] leading-relaxed">Desarrollo de Software</h3>
		  	  <p className='text-white/80 font-[SegoeUI] text-md lg:text-xl text-center px-6 lg:px-0'>Desarrollamos soluciones escalables para plataformas multidisciplinarias con las más nuevas tendencias tecnológicas.</p>
		  	</div>
		  </article>
		</div>
		<div className='mt-24 text-right'>
		  <article className="flex justify-around items-center">
		  	<div className="relative flex items-center lg:items-end justify-center lg:justify-around flex-col">
			  <div className='absolute w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30 -z-20 animate-blob'></div>
			  <div className='absolute top-10 w-24 h-24 animation-delay-4000 bg-gradient-to-r from-teal-500 to-white rounded-full blur-2xl opacity-30 -z-20 animate-blob text'></div>
		  	  <img src="/computer.svg" alt="" className='w-16 h-16 mb-5 drop-shadow-md'/>
		  	  <h3 className="text-white text-2xl pb-4 lg:text-4xl font-[SegoeBold] leading-relaxed">Desarrollo Web</h3>
		  	  <p className='text-white/80 font-[SegoeUI] text-md lg:text-xl text-center lg:text-right px-6 lg:px-0'>Planeamos, diseñamos y programamos aplicaciones web personalizadas utilizando tendencias de desarrollo actuales.</p>
		  	</div>
		  </article>
		</div>
		<div className='mt-16 mb-10'>
		  <article className="flex justify-around items-center">
		  	<div className="relative flex items-center lg:items-start justify-center lg:justify-around flex-col">
			  <div className='absolute w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30 -z-20 animate-blob'></div>
			  <div className='absolute top-10 w-24 h-24 animation-delay-2000 bg-gradient-to-r from-teal-500 to-white rounded-full blur-2xl opacity-30 -z-20 animate-blob text'></div>
		  	  <img src="/brush-and-pencil.svg" alt="" className='w-16 h-16 mb-5 drop-shadow-md'/>
		  	  <h3 className="text-white text-2xl pb-4 lg:text-4xl font-[SegoeBold] leading-relaxed">Diseño UI/UX</h3>
		  	  <p className='text-white/80 font-[SegoeUI] text-md lg:text-xl text-center lg:text-left px-6 lg:px-0'>Creamos interfaces digitales intuitivas y atractivas que mejoren la experiencia del usuario al interactuar con el sitio.</p>
		  	</div>
		  </article>
		</div>
		<div className="hidden  pt-24 pb-8 overflow-hidden z-10">
		  <div className="mx-auto max-w-7xl px-4 sm:px-6">
		    <div className="lg:grid lg:grid-cols-12 mx-auto lg:gap-16 justify-center">
		      <div className="relative z-10 px-4 mb-8 sm:px-6 sm:text-center sm:mb-16 lg:mb-0 lg:px-0 lg:text-left lg:flex col-span-6">
		      	<div className="lg:py-24">
		      	  <p className="mt-3 font-[SegoeBold] sm:mx-auto lg:mx-0 max-w-lg text-center lg:text-left text-lg lg:text-4xl text-neutral-200 sm:mt-5">
		      	  	Trabajamos con las tecnologías más innovadoras para crear productos de calidad.
		      	  </p>
		      	  <p className="mt-3 font-[Questrial] sm:mx-auto lg:mx-0 max-w-lg text-center lg:text-left text-base sm:text-xl text-neutral-200/40 sm:mt-5">
		      	    Usamos desde lo más básico hasta lo más avanzado para crear soluciones que se adapten a las necesidades de nuestros clientes.	
		      	  </p>
		      	</div>
		      </div>
		      	<div className="mx-auto">
		      	  <div className=" relative md:absolute -z-20">
		      	  	<div className="flex image-tech justify-center items-center relative flex-col pt-4 pb-8 sm:py-10 px-6 sm:px-12 w-96 lg:w-[700px] select-none z-20">
		      	  	  <img src="/tech.svg" alt="PC" />
						  <div className='relative md:absolute w-20 lg:w-52 h-20 lg:h-52 amimation-delay-2000 bg-gradient-to-r from-[#015EEA] to-[#00C0FA] rounded-full blur-2xl opacity-30 -z-20 animate-blob'></div>
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

export default Services
