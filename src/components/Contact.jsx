import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'

export const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_xscl0hr', 'template_fs04mzs', form.current, 'GwgIwvIWFQ55J7gPP')
      .then((result) => {
        console.log(result.text)
        form.current.reset()
        toast.success('Message sent successfully!')
      }, (error) => {
        console.log(error.text)
        toast.error('Message failed to send!')
      })
  }

  return (
    <section id='contact' className='text-white body-font relative border-t border-gray-100/10'>
      <Toaster />
      <div className='container px-5 mx-auto'>
	    <div className='flex items-center justify-center flex-col mt-10 mb-10'>
	  	  <img src="/3.webp" className='w-12 select-none' alt="2" />
	  	  <h2 className='contact text-6xl lg:text-8xl font-[SegoeBold] tracking-normal p-4 opacity-90 select-none'>Contacto</h2>
	  	  <p className='text-gray-100/50 text-md px-6 text-center lg:text-2xl font-[Questrial]'>¿Estás interesado en alguno de nuestros servicios?</p>
			<p className='text-gray-100/50 text-md px-6 text-center lg:text-2xl font-[Questrial]'>¡Fantastico! Puedes llenar el siguiente formulario y nosotros te contactaremos.</p>
	    </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className='lg:w-1/2 md:w-2/3 mx-auto'>
            <div className='flex flex-wrap -m-2'>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label forhtml='name' className='leading-7 text-[20px] text-white font-[Questrial]'>
                    Nombre
                  </label>
                  <input required type='text' name='user_name' className='w-full bg-gray-100 rounded border border-gray-300 focus:border-sky-600 text-lg font-[Questrial] outline-none text-black py-2 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                </div>
              </div>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label forhtml='email' className='leading-7 text-[20px] text-white font-[Questrial]'>
                    Email
                  </label>
                  <input required type='email' name='user_email' className='w-full bg-gray-100 rounded border border-gray-300 focus:border-sky-600 text-lg outline-none text-black font-[Questrial] py-2 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                </div>
              </div>
              <div className='p-2 w-full'>
                <div className='relative'>
                  <label forhtml='message' className='leading-7 text-[20px] text-white font-[Questrial]'>
                    Mensaje
                  </label>
                  <textarea required name='message' className='w-full bg-gray-100 rounded border border-gray-300 focus:border-sky-600 h-32 text-xl outline-none text-black py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out font-[Questrial]'></textarea>
                </div>
              </div>
              <div className='p-2 w-full'>
                <button type='submit' value='Send' className='flex mx-auto btn-contact font-[SegoeBold]'>
                  Enviar Mensaje
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
