'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Vorteile = () => {
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
    <div id='vorteile' className='flex flex-col lg:flex-row justify-center lg:justify-between gap-10 items-center pt-32'>
      <motion.h2
        className='sectionTitle block lg:hidden'
        initial="hidden"
        whileInView="visible"
        variants={item}
      >
        Vorteile
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ 
          once: false, 
          amount: 0.2 // Trigger when 20% of the component is visible
        }}
        variants={item}
      >
        <Image src={'/images/Vorteile.jpg'} alt={'Eine Frau, welche mit Hilfe eines Trainers Übungen macht. Die Übung dient der besseren Rückenmuskulatur und dadurch der Körperhaltung.'} width={500} height={400} className='rounded-xl' />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ 
          once: false, 
          amount: 0.2 // Trigger when 20% of the component is visible
        }}
        variants={variants}
        className='flex flex-col gap-8 w-full max-w-3xl lg:w-[45%]'
      >
        <motion.h2 className='sectionTitle hidden lg:block' variants={item}>
          Welche Vorteile?
        </motion.h2>

        <motion.div className='flex flex-col space-y-2 items-center lg:items-start text-center lg:text-left' variants={item}>
          <motion.h2 className='subheadline leading-tight' variants={item}>
            Schneller und sicherer an Ihr Ziel
          </motion.h2>

          <motion.p className='info text-hf-80 text-justify lg:text-left' variants={item}>
            Mit einem Personal Trainer trainieren Sie{' '}
            <span className='font-medium text-hf-400 bg-hf-100 px-1 rounded-md'>
              effizienter, sicherer und gezielter
            </span>{' '}
            – individuell abgestimmt auf Ihre Bedürfnisse und mit ständiger
            Motivation an Ihrer Seite. So erreichen Sie Ihre Fitnessziele schneller und bleiben{' '}
            <span className='font-medium text-hf-400 bg-hf-100 px-1 rounded-md'>
              langfristig gesund und aktiv.
            </span>
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Vorteile
