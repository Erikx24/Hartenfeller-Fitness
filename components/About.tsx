"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Dauer der Animation
        staggerChildren: 0.1, // Verzögert die Animation von Kinderelementen
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
    <div id='about' className='flex flex-col-reverse lg:flex-row justify-center lg:justify-between gap-10 items-center lg:items-end pt-24'>
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
        <motion.h2
          className='sectionTitle hidden lg:block'
          variants={item}
        >
          Wer bin ich?
        </motion.h2>

        <motion.div
          className='flex flex-col space-y-2 items-center lg:items-start'
          variants={item}
        >
          <motion.h2 className='subheadline leading-tight text-center lg:text-left' variants={item}>
            Ihr Ziel trifft<br className='hidden lg:block' /> meine Erfahrung
          </motion.h2>

          <motion.p
            className='info text-hf-80 text-justify lg:text-left'
            variants={item}
          >
            Seit fast 6 Jahren bin ich in der Fitnesswelt aktiv und habe
            verschiedenste Sportarten ausprobiert. Vom Maximalkrafttraining, hin
            zum Bodybuilding, Laufen und Körpergewichtstraining, war alles mit
            dabei. Gepaart mit meiner Erfahrung als Fitnesstrainer und angehender
            Physiotherapeut, helfe ich Menschen dabei, ihre körperlichen und
            mentalen Ziele, mit Hilfe von maßgeschneiderten Trainingsplänen zu
            verwirklichen, um gesund und (wieder) fit zu werden!
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={item}
      >
        <Image
          src={'/images/About.png'}
          alt={'Es zeigt Luis Hartenfeller. Ein junger sportlicher Mann, welcher lächelt.'}
          width={300}
          height={400}
          className='rounded-xl'
        />
      </motion.div>

      <motion.h2
        className='sectionTitle block lg:hidden'
        initial="hidden"
        whileInView="visible"
        variants={item}
      >
        Über mich
      </motion.h2>
    </div>
  )
}

export default About
