"use client"
import Image from 'next/image'
import React from 'react'
import { BiCalendar, } from 'react-icons/bi';
import { BsArrowUpRight } from 'react-icons/bs'
import { TextGenerateEffect } from './ui/text-generate-effect';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='w-full h-screen lg:h-[60rem] bg-gradient-to-br from-hf-50  to-hf-100 px-5 lg:px-24 md:pt-32 pt-[6rem]'>
      <div className='max-w-7xl mx-auto gap-10 flex flex-col justify-start items-center lg:items-start'>

      

      {/*Luis Hartenfeller*/}
    <div className='flex flex-col items-center lg:items-start z-20 gap-6'>
    <motion.a href='/#about' initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.5, ease: [0, 0.71, 0.2, 1.01], delay:0 }}
    className='infoButton infoButtonText flex flex-row items-center gap-4'>
      <Image src={'/images/profile.png'} alt={''} width={100}  height={100} quality={50} className='w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]' />
      <div className='flex-row flex items-center gap-2'>
      Luis Hartenfeller
      <BsArrowUpRight />
      </div>
    </motion.a>


    {/*Überschrift*/}
    <div className='flex flex-col gap-3 items-center lg:items-start'>
    <div className='text-hf-600 headline text-center lg:text-left line-clamp-2'>
      <TextGenerateEffect words={'Gesund und (wieder) Fit werden!'} className='text-hf-600 headline leading-tight text-center lg:text-left'/>
      {/*
    <span className='text-hf-350 '>Gesund</span> und (wieder)<br />
    <span className='text-hf-350'> Fit</span> werden!
      */}
    </div>
    
    {/*Vorteile*/}

          <motion.div initial={{scale: 0.8, y:20 , opacity:0}} animate={{scale:1, y:0, opacity:1}} transition={{duration: 0.4, ease: [0, 0.71, 0.2, 1.01], delay: 1.2 }}
          className="info text-center lg:text-left text-hf-70 lg:w-[50%] w-[90%] max-w-xl">
           Ob Muskelaufbau, oder einen gesunden, leistungsfähigen Körper - mit meiner Expertise helfe ich Menschen in jeder Situation (wieder) fit für den Alltag zu werden. 
          </motion.div>
          </div>
          </div>
    {/*Button*/}
    <motion.a href='/#termin' initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 1, ease: [0, 0.41, 0.2, 1.01], delay:1.5 }}
    className='flex flex-row button buttonText items-center gap-3 z-20'>
      <BiCalendar className='text-hf-100'/>
        Termin vereinbaren
    </motion.a>
    {/*Background*/}
    <div className='absolute w-screen h-full flex justify-center mt-[50vh] z-0 lg:z-10 md:-bottom-[58vh] lg:translate-x-[20%] xl:translate-x-[40%] lg:-bottom-[20%] max-w-7xl overflow-hidden mx-auto'>
      <div className='min-w-[550px] md:min-w-[700px] w-80 xl:w-[1130px] '>
      <Image src={'/images/bg.png'} alt={''} width={1130} height={1080} quality={100} className='object-cover saturate-[75%]'/>
      </div>
    </div>

{/*Evaluation
<div className='absolute w-full h-full flex justify-center z-40 max-w-7xl overflow-hidden mx-auto mt-[73vh] lg:mt-[45rem] md:ml-[60vw] lg:ml-[15rem] xl:ml-[22rem]'>
      <div className='flex flex-row gap-4 h-fit w-fit px-4 py-2 md:px-8 md:py-3 shadow-lg rounded-2xl items-center bg-hf-50 info text-hf-80'>
        <BsStarFill className='text-yellow-500'/>
        4.8 Ausgezeichnet!
      </div>
    </div>
*/}
    </div>
    </div>
  )
}

export default Hero