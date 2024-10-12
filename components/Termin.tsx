"use client"
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BsPersonCheck, BsPersonPlus } from 'react-icons/bs'
import ProbetrainingView from './ui/ProbetrainingView'
import TrainingView from './ui/TrainingView'

const Termin = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState('')

  const openModal = (type: string) => {
    setModalType(type)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const renderModalContent = () => {
    if (modalType === 'Probetraining') {
      return <ProbetrainingView closeModal={closeModal} />
    } else if (modalType === 'Training') {
      return <TrainingView closeModal={closeModal} />
    }
    return null
  }

  return (
    <div id='termin' className='w-full mt-16 bg-hf-100 px-5 md:px-24 py-10 lg:py-16'>
      <div className='max-w-7xl mx-auto flex flex-col justify-center gap-20 items-center lg:items-start'>
        <div className='flex flex-col space-y-5 items-center lg:items-start'>
          <h2 className='sectionTitle'>Termin vereinbaren</h2>
          <h1 className='subheadline leading-tight text-center lg:text-left'>
            Jetzt einfach und schnell einen Termin vereinbaren
          </h1>
        </div>

        <div className='w-full flex flex-col lg:flex-row justify-center gap-20 lg:justify-between'>
          <div className='flex flex-col items-center lg:items-start w-[90%] lg:w-[40%] mx-auto gap-8'>
            <div className='flex flex-col space-y-2 items-center lg:items-start'>
              <div className='callout text-hf-400 gap-4 flex flex-row items-center lg:-translate-x-[50px]'>
                <BsPersonPlus className='text-hf-300' />
                Für neue Kunden
              </div>
              <p className='info text-justify text-hf-80'>
                Sie möchten mein Personal Training kennenlernen? Vereinbaren Sie
                jetzt ein unverbindliches Probetraining und lassen Sie uns
                gemeinsam Ihre Ziele besprechen.
              </p>
            </div>
            <div
              className='flex flex-row button buttonText items-center'
              onClick={() => openModal('Probetraining')}
            >
              Probetraining anfragen
            </div>
          </div>

          <div className='flex flex-col items-center lg:items-start w-[90%] lg:w-[40%] gap-8 mx-auto'>
            <div className='flex flex-col space-y-2 items-center lg:items-start'>
              <div className='callout text-hf-400 gap-4 flex flex-row items-center lg:-translate-x-[50px]'>
                <BsPersonCheck className='text-hf-300' />
                Bestehende Kunden
              </div>
              <p className='info text-justify text-hf-80'>
                Sie sind bereits Kunde? Buchen Sie hier bequem Ihren nächsten
                Trainingstermin und bleiben Sie auf dem Weg zu Ihren Zielen.
              </p>
            </div>
            <div
              className='flex flex-row button buttonText items-center'
              onClick={() => openModal('Training')}
            >
              Training buchen
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence mode="wait">
      {isModalOpen && (
        <motion.div
          className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className='bg-white rounded-md shadow-lg w-[90vw] md:w-[80vw] max-w-4xl'
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            {renderModalContent()}
          </motion.div>
        </motion.div>
      )}
       </AnimatePresence>
    </div>
  )
}

export default Termin
