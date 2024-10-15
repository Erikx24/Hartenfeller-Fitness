import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiMailSend, BiPhone } from 'react-icons/bi'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='w-full h-fit mt-20 px-5 my-5'>
        <div className='flex flex-col items-center'>
        <div className='w-full h-[1px] bg-hf-60'/>
        
<div className='w-full flex flex-col gap-16 lg:flex-row justify-center lg:justify-between mt-5 max-w-7xl mx-auto'>

<div className='flex w-full flex-col gap-5 lg:gap-20 items-center lg:items-start '>

<a href='/' className='flex flex-row gap-4 items-center'>
<Image src={'/images/Logo.png'} alt={''} width={80} height={80} className='bg-hf-90 rounded-full p-2'/>
<div className='flex flex-col'>
<h1 className='text text-hf-400 font-semibold line-clamp-1'>Hartenfeller Fitness</h1>
<p className='info  text-hf-80 line-clamp-2'>Gesund und (wieder) Fit werden!</p>
</div>
</a>


<div className='flex flex-col gap-2 items-center lg:items-start footnote text-hf-80'>

        <div className='flex flex-row gap-2 items-center '>
          <BiMailSend />
          <p className='line-clamp-1'>luis@hartenfeller-fitness.de</p>
        </div>
        <a href='https://www.instagram.com/luis.hartenfeller?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' className='flex flex-row gap-2 items-center'>
          <FaInstagram />
          <p className='line-clamp-1'>luis.hartenfeller</p>
        </a>
        <a href='tel:+4917621201940' className='flex flex-row gap-2 items-center'>
          <BiPhone />
          <p className='line-clamp-1'>017621201940</p>
        </a>


      </div>
</div>


<div className='w-full justify-center lg:justify-end flex flex-row gap-10 footnote text-hf-350'>
<div className='flex flex-col gap-5'>

<div className='flex flex-col'>
<p className='font-semibold text-hf-80'>Startseite</p>
<a href="/#bewertungen">Erfahrungen</a>
<a href="/#about">Über mich</a>
<a href="/#vorteile">Vorteile</a>
<a href="/#termin">Termin</a>
<a href="/#contact">Kontakt</a>
</div>


</div>

<div className='flex flex-col'>
<p className='font-semibold text-hf-80'>Social-Media</p>
<a href="https://www.instagram.com/luis.hartenfeller?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</a>
</div>

<div className='flex flex-col'>
<p className='font-semibold text-hf-80'>Rechtliches</p>
<Link href="/impressum">Impressum</Link>
<Link href="/datenschutz">Datenschutz</Link>
</div>

</div>
</div>
<p className='footnote mt-5 text-hf-70'>©2024 Hartenfeller Fitness</p>
        </div>
        </footer>
  )
}

export default Footer