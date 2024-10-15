"use client"
import Image from 'next/image'
import React from 'react'
import { BiCalendar } from 'react-icons/bi';
import { BsArrowUpRight } from 'react-icons/bs'
import { TextGenerateEffect } from './ui/text-generate-effect';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='w-full h-screen lg:h-[60rem]  bg-gradient-to-br from-hf-50 to-hf-100  md:pt-32 pt-[6rem] overflow-hidden'>
      
      <div className='max-w-7xl h-full w-full  mx-auto flex flex-col justify-between lg:justify-normal items-center lg:flex-row '>
        <div className='lg:w-[780px] xl:w-[1080px] gap-10 lg:gap-10 flex flex-col justify-start items-center lg:items-start px-5 lg:pl-12'>
        {/* Luis Hartenfeller */}
        <div className='flex flex-col items-center lg:items-start z-20 gap-6'>
          <motion.a href='/#about' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: [0, 0.71, 0.2, 1.01], delay: 0 }}
            className='infoButton infoButtonText flex flex-row items-center gap-4'>
            <Image src={'/images/profile.png'} alt={''} width={100} height={100} quality={50} className='w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]' />
            <div className='flex-row flex items-center gap-2'>
              Luis Hartenfeller
              <BsArrowUpRight />
            </div>
          </motion.a>

          {/* Überschrift */}
          <div className='flex flex-col gap-3 items-center lg:items-start'>
            <div className='text-hf-600 headline text-center lg:text-left line-clamp-2'>
              <TextGenerateEffect words={'Gesund und (wieder) Fit werden!'} className='text-hf-600 headline leading-tight text-center lg:text-left' />
            </div>

            {/* Vorteile */}
            <motion.div initial={{ scale: 0.8, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} transition={{ duration: 0.4, ease: [0, 0.71, 0.2, 1.01], delay: 1.2 }}
              className="info text-center lg:text-left text-hf-70 lg:w-[50%] w-[90%] max-w-xl">
              Ob Muskelaufbau oder einen gesunden, leistungsfähigen Körper - mit meiner Expertise helfe ich Menschen in jeder Situation (wieder) fit für den Alltag zu werden.
            </motion.div>
          </div>
        </div>

        {/* Button */}
        <motion.a href='/#termin' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: [0, 0.41, 0.2, 1.01], delay: 1.5 }}
          className='flex flex-row button buttonText items-center gap-3 z-20'>
          <BiCalendar className='text-hf-100' />
          Termin vereinbaren
        </motion.a>
        </div>
      

      <Image src={'/images/bg.png'} alt={''} width={900} height={1300} quality={100} className='object-cover lg:absolute lg:z-30 lg:scale-75 lg:left-[30%] lg:top-[25%] xl:scale-100 xl:top-[40%] xl:left-[50%] '/>
      </div>
    </div>
  )
}

export default Hero;
