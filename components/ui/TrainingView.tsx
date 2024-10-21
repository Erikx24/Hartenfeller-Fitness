"use client"
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaXmark } from 'react-icons/fa6';
import { ImInfo } from 'react-icons/im';
import Link from 'next/link';
const TrainingView = ({ closeModal }: { closeModal: () => void }) => {

  const [formData, setFormData] = useState({
    firstName: '',
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
      'service_y5p5u6c',        // Service ID
      'template_7uhoemc',       // Template ID
      formData,                 // Form Data
      'lHpAmVVB4WUmQ5H3I'
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
        <label className="block text-hf-80 mb-2" htmlFor="firstNname">
          Name
        </label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
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
      
      <div className='flex flex-row gap-3 items-center text-hf-400 mb-4'>
<ImInfo className='text-2xl text-hf-300'/>
<span>
Mit dem Abschicken dieser Nachricht stimmen Sie der <Link href="/datenschutz" className='text-hf-350 underline'>Datenschutzerklärung</Link> zu.
</span>
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