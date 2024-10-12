import React from 'react'

const TrainingView = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <div>
      <h2 className='text-xl font-semibold mb-4'>Training buchen</h2>
      <p className='text-sm mb-6'>
        Buchen Sie Ihren nächsten Trainingstermin und bleiben Sie auf dem Weg zu
        Ihren Zielen.
      </p>
      <button className='button' onClick={closeModal}>
        Schließen
      </button>
    </div>
  )
}

export default TrainingView