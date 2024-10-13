"use client"
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaXmark } from 'react-icons/fa6';
const TrainingView = ({ closeModal }: { closeModal: () => void }) => {

  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });

  const [buttonTitle, setButtonTitle] = useState<string>('Nachricht senden')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setButtonTitle('Gesendet!')
    e.preventDefault();

    emailjs.send(
      'service_20v9u5r',        // Service ID
      'template_s89uzas',       // Template ID
      formData,                 // Form Data
      'KSB6tzxF0Msk5pSkm'
    ).then(
      () => {
        alert('Nachricht erfolgreich gesendet!');
        setButtonTitle('Nachricht senden')
      },
      () => {
        alert('Fehler beim Senden der Nachricht. Bitte versuche es erneut.');
        setButtonTitle('Nachricht senden')
      }
    );


  };

  return (
    <div className='max-h-[70vh] h-fit overflow-y-auto p-8 z-50'>
      <div className='w-full flex flex-row justify-between items-center'>
      <h2 className='text-xl font-semibold mb-4'>Training buchen</h2>
      <button  onClick={closeModal}>
      <FaXmark className='text-4xl text-hf-80'/>
      </button>
      </div>
      <p className='text-sm mb-6'>
        Buchen Sie Ihren nächsten Trainingstermin und bleiben Sie auf dem Weg zu
        Ihren Zielen.
      </p>

      <form onSubmit={handleSubmit} className="mx-auto ">
      <div className="mb-4">
        <label className="block text-hf-80 mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="firstName"
          value={formData.name}
          onChange={handleChange}
          className="appearance-none border border-stone-400 rounded-lg w-full py-2 px-3 text-ecs-prussianBlue leading-tight focus:outline-none focus:shadow-outline bg-transparent"
          required
        />
      </div>

     

      <div className="mb-4">
        <label className="block text-hf-80 mb-2" htmlFor="message">
          Nachricht
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="appearance-none border border-stone-400 rounded-lg w-full py-2 px-3 text-ecs-prussianBlue leading-tight focus:outline-none focus:shadow-outline bg-transparent"
          rows= {5}
          required
        />
      </div>

      <div className="flex items-center justify-between">
        <button
        onClick={closeModal}
          type="submit"
          className="button info text-white"
        >
         {buttonTitle}
        </button>
      </div>
    </form>
    </div>
  )
}

export default TrainingView