import React from 'react'
import ContactForm from './ui/Contactform'
import { BiMailSend, BiPhone } from 'react-icons/bi'
import { FaInstagram } from 'react-icons/fa'

const Kontakt = () => {
  return (
    <div id='contact' className='flex flex-col justify-center lg:justify-between gap-8 items-center lg:items-start w-full py-16 '>

   

    <h2 className='sectionTitle '>Kontakt</h2>
    <h1 className='subheadline leading-tight text-center lg:text-left'>Fragen oder Anregungen?</h1>
    <div className='w-full flex flex-col lg:flex-row gap-20 lg:gap-10 justify-between items-center lg:items-start mt-8'>

      <div className='flex flex-col lg:w-[45%] gap-5 mt-10 items-center lg:items-start'>

        <div className='flex flex-row gap-2 items-center text text-hf-80'>
          <BiMailSend />
          <p className='line-clamp-1'>luis@hartenfeller-fitness.de</p>
        </div>
        <div className='flex flex-row gap-2 items-center text text-hf-80'>
          <FaInstagram />
          <p className='line-clamp-1'>luis.hartenfeller</p>
        </div>
        <div className='flex flex-row gap-2 items-center text text-hf-80'>
          <BiPhone />
          <p className='line-clamp-1'>(+49) 17621201940</p>
        </div>


      </div>

      <div className='w-full flex items-center lg:w-[45%]'>
      <ContactForm />
      </div>
            
    </div>
</div>
  )
}

export default Kontakt