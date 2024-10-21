"use client"
import Image from 'next/image'
import { useState } from "react";
import { FaXmark } from 'react-icons/fa6';
import { PiInstagramLogoFill } from 'react-icons/pi'
import { RiMenu3Line } from 'react-icons/ri'
import { AnimatePresence, motion } from "framer-motion"


const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
  
    const handleButtonClick = () => {
      setShowNavbar((prev) => !prev); // Bild anzeigen, wenn der Button gedrückt wird
    };

    const handleCloseNavbar = () => {
      setShowNavbar(false); // Navbar schließen, wenn ein Link geklickt wird
    };
  
  return (
      
    <nav className='fixed w-screen h-fit bg-hf-90 z-40 px-4 lg:px-24 py-2 md:py-5'>
    <div className='w-full max-w-7xl mx-auto flex flex-row items-center justify-between '>
      <a href='/' className='flex flex-row items-center gap-2 lg:gap-5 text-hf-100 text-xs md:text-base w-[20vw]'>
        
        <Image className='scale-75 md:scale-100 lg:scale-125' width={40} height={40} src={'/images/Logo.png'} alt={'Das Logo von Hartenfeller-Fitness. Es zeigt einen Kopf, welcher für Gesundheit steht. Alles im grünen Stil'}/>
        <p>Hartenfeller<br/>Fitness</p>

        </a> 

        <div className='hidden lg:flex flex-row justify-center gap-10 text-xl font-extralight text-hf-200 w-[60vw]'>
        <a href="/#bewertungen">Erfahrungen</a>
        <a href="/#about">Über mich</a>
        <a href="/#termin">Termin</a>
        <a href="/#contact">Kontakt</a>
        </div>

      <div className='w-[20vw] flex justify-between lg:justify-end callout text-hf-300'>
      <a href="https://www.instagram.com/luis.hartenfeller?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><PiInstagramLogoFill/></a>
      
      <button onClick={handleButtonClick}>
      <AnimatePresence mode="wait">
          <motion.div
            key={showNavbar ? "close" : "menu"}
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            {showNavbar ? (
              <FaXmark className="block lg:hidden" />
            ) : (
              <RiMenu3Line className="block lg:hidden" />
            )}
          </motion.div>
        </AnimatePresence>
    </button>
      </div>
    </div>
    <AnimatePresence>
        {showNavbar && (
          <motion.div
            className="w-full bg-hf-90"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "18rem", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.2, ease: "easeInOut" },
              opacity: { duration: 0.3, ease: "easeInOut" },
            }}
          >
              <div className='w-full flex flex-col justify-start gap-10 pt-10 items-center text-hf-200 text-xl font-extralight'>
              <a href="/#bewertungen" onClick={handleCloseNavbar}>Erfahrungen</a>
              <a href="/#about" onClick={handleCloseNavbar}>Über mich</a>
              <a href="/#termin" onClick={handleCloseNavbar}>Termin</a>
               <a href="/#contact" onClick={handleCloseNavbar}>Kontakt</a>


              </div>
            </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
