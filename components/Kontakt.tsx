"use client"
import React from 'react'
import ContactForm from './ui/Contactform'
import { BiMailSend, BiPhone } from 'react-icons/bi'
import { FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Kontakt = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      id='contact'
      className='flex flex-col justify-center lg:justify-between gap-8 items-center lg:items-start w-full py-16 z-0'
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: false, 
        amount: 0.2 // Trigger when 20% of the component is visible
      }}
      variants={variants}
    >
      <motion.h2 className='sectionTitle' variants={item}>So können Sie mich erreichen</motion.h2>
      <motion.h2 className='subheadline leading-tight text-center lg:text-left' variants={item}>
        Fragen oder Anregungen?
      </motion.h2>

      <motion.div
        className='w-full flex flex-col lg:flex-row gap-20 lg:gap-10 justify-between items-center lg:items-start mt-8 z-0'
        variants={variants}
      >
        <motion.div className='flex flex-col lg:w-[45%] gap-5 mt-10 items-center lg:items-start' variants={item}>
          <motion.div className='flex flex-row gap-2 items-center text text-hf-80' variants={item}>
            <BiMailSend />
            <p className='line-clamp-1'>luis@hartenfeller-fitness.de</p>
          </motion.div>
          <motion.a href='https://www.instagram.com/luis.hartenfeller?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' className='flex flex-row gap-2 items-center text text-hf-80 border-b-2' variants={item}>
            <FaInstagram />
            <p className='line-clamp-1'>luis.hartenfeller</p>
          </motion.a>
          <motion.a href='tel:+4917621201940' className='flex flex-row gap-2 items-center text text-hf-80 border-b-2' variants={item}>
            <BiPhone />
            <p className='line-clamp-1'>(+49) 176 21201940</p>
          </motion.a>
        </motion.div>

        <motion.div className='w-full flex items-center lg:w-[45%]' variants={item}>
          <ContactForm />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Kontakt
