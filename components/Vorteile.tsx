import Image from 'next/image'
import React from 'react'

const Vorteile = () => {
  return (
    <div id='vorteile' className='flex flex-col lg:flex-row justify-center lg:justify-between gap-10 items-center pt-32'>

<h2 className='sectionTitle block lg:hidden'>Vorteile</h2>
<Image src={'/images/Vorteile.jpg'} alt={''} width={500} height={400} className='rounded-xl'/>


        <div className='flex flex-col gap-8 w-full max-w-3xl lg:w-[45%]'>
            <h2 className='sectionTitle hidden lg:block'>Vorteile</h2>

            <div className='flex flex-col space-y-2 items-center lg:items-start'>
            <h1 className='subheadline leading-tight'> Schneller und sicherer an Ihr Ziel</h1>

            <p className='info text-hf-80 text-justify lg:text-left '>Mit einem Personal Trainer trainieren Sie <span className='font-medium text-hf-400 bg-hf-100 px-1 rounded-md'>effizienter,
            sicherer und gezielter</span> – individuell abgestimmt auf Ihre Bedürfnisse und mit ständiger Motivation an Ihrer Seite. So erreichen Sie Ihre Fitnessziele schneller und bleiben <span className='font-medium text-hf-400 bg-hf-100 px-1 rounded-md'>langfristig gesund und aktiv.</span></p>
            </div>

            
        </div>



    </div>
  )
}

export default Vorteile