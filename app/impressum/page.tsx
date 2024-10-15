import Footer from '@/components/Footer'
import Link from 'next/link'
import React from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'

const page = () => {
  return (
    <div id='impressum'
    className='flex flex-col justify-between w-full bg-ecs-Platinum text-ecs-richBlack min-h-screen overflow-hidden'>
      <div className='max-w-7xl py-10 px-4 mx-auto overflow-hidden mb-40'>
      <div className='fixed rounded-full p-1 bg-white z-50'>
      <Link href='/'><MdArrowBackIosNew className=' text-ecs-richBlack text-3xl hover:text-ecs-SilverLakeBlue' /></Link>
      </div>

       <h1 className='text-ecs-richBlack text-center subheadline pb-10'>Impressum</h1>

        <div className='overflow-hidden info text-hf-80'>

        Luis Hartenfeller <br />
        Hartenfeller Fitness <br />
        Lerchenweg 28<br />
        61130 Nidderau <br />
        <br /> 
        Telefon: +49 17621201940 <br />
E-Mail: luis@hartenfeller-fitness.de <br /> <br />
        Verbraucherstreitbeilegung/ Universalschlichtungsstelle<br />Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. <br /> <br />
        Quelle: <br />
        eRecht24 <br />
        </div>
        </div>
        <Footer />
        </div>
  )
}

export default page