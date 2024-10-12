import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='flex flex-col-reverse lg:flex-row justify-center lg:justify-between gap-10 items-center lg:items-end pt-32'>

        <div className='flex flex-col gap-8 w-full max-w-3xl lg:w-[45%]'>
            <h2 className='sectionTitle hidden lg:block'>Über mich</h2>

            <div className='flex flex-col space-y-2 items-center lg:items-start'>
            <h1 className='subheadline leading-tight'> Ihr Ziel trifft<br className='hidden lg:block'/> meine Erfahrung</h1>

            <p className='info text-hf-80 text-justify lg:text-left '>Seit fast 6 Jahren bin ich in der Fitnesswelt aktiv und habe seitdem verschiedenste Sportarten ausprobiert. Vom Maximalkrafttraining, hin zum Bodybuilding, Laufen und Körpergewichtstraining, war alles mit dabei. 
            Gepaart mit meiner Erfahrung als Fitnesstrainer und angehender Physiotherapeut, helfe ich Menschen dabei, ihre körperlichen und mentalen Ziele, mit Hilfe von maßgeschneiderten Trainingsplänen zu verwirklichen, um gesund und (wieder) fit zu werden!</p>
            </div>
        </div>

        <Image src={'/images/About.png'} alt={''} width={300} height={400} className='rounded-xl '/>
        <h2 className='sectionTitle block lg:hidden'>Über mich</h2>

    </div>
  )
}

export default About