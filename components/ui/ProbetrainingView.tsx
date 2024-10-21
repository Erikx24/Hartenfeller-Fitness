"use client"
import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaXmark } from 'react-icons/fa6';
import { ImInfo } from 'react-icons/im';
import Link from 'next/link';

const ProbetrainingView = ({ closeModal }: { closeModal: () => void }) => {
  const [buttonTitle, setButtonTitle] = useState<string>('Anfrage senden')
  
  const [Fitnessziel, setFitnessziel] = useState<string>('Muskelaufbau');
  const [Erfahrung, setErfahrung] = useState<string>('Anfänger');

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';  // Reaktiviert Scrollen beim Schließen
    };
  }, []);


  const handleFitnessziel = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setFitnessziel(value);
    setFormData({
      ...formData,
      fitnessziel: value,
    });
  };
  
  const handleErfahrung = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setErfahrung(value);
    setFormData({
      ...formData,
      erfahrung: value,
    });
  };


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    injuries:'',
    message: '',
    fitnessziel: Fitnessziel,
    erfahrung: Erfahrung,
  });

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
      'template_rlzbav4',       // Template ID
      formData,                 // Form Data
      'lHpAmVVB4WUmQ5H3I'
    ).then(
      () => {
        alert('Nachricht erfolgreich gesendet!');
        setButtonTitle('Anfrage senden')
      },
      () => {
        alert('Fehler beim Senden der Nachricht. Bitte versuche es erneut.');
        setButtonTitle('Anfrage senden')
      }
    );

  };

  return (
    <div className='h-[70vh] overflow-y-auto p-8 z-50'>
      <div className='w-full flex flex-row justify-between items-center'>
      <h2 className='text-xl font-semibold mb-4'>Probetraining anfragen</h2>
      <button  onClick={closeModal}>
      <FaXmark className='text-4xl text-hf-80'/>
      </button>
      </div>
      <p className='text-sm mb-6'>
        Melden Sie sich für ein unverbindliches Probetraining an.
      </p>



      <form onSubmit={handleSubmit} className="mx-auto z-50">
      <div className="mb-8">
      <div className="mb-4">
        <label className="block text-hf-80 mb-2 " htmlFor="firstName">
          Vorname
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
        <label className="block text-hf-80 mb-2" htmlFor="lastName">
          Nachname
        </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="appearance-none border border-stone-400 rounded-lg w-full py-2 px-3 text-ecs-prussianBlue leading-tight focus:outline-none focus:shadow-outline bg-transparent"
          required
        />
      </div>



      <div className="mb-4">
        <label className="block text-hf-80 mb-2" htmlFor="email">
          E-Mail
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="appearance-none border border-stone-400 rounded-lg w-full py-2 px-3 text-ecs-prussianBlue leading-tight focus:outline-none focus:shadow-outline bg-transparent"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-hf-80 mb-2" htmlFor="phone">
          Handy (optional)
        </label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="appearance-none border border-stone-400 rounded-lg w-full py-2 px-3 text-ecs-prussianBlue leading-tight focus:outline-none focus:shadow-outline bg-transparent"
        />
      </div>

      <label className="block text-hf-80 mb-4" htmlFor="company">
         Haben Sie gesundheitliche Einschränkungen? Wenn ja, welche?
        </label>
        <input
          type="text"
          name="injuries"
          value={formData.injuries}
          onChange={handleChange}
          className="appearance-none border border-stone-400 rounded-lg w-full py-2 px-3 text-ecs-prussianBlue leading-tight focus:outline-none focus:shadow-outline bg-transparent"
        />
      </div>

<div className='flex flex-col lg:flex-row justify-center lg:justify-between lg:mx-10'>
<div className='flex flex-col w-fit mb-8'>
      <label className="mb-2" htmlFor="page">Was ist Ihr Trainingsziel?</label>
      <select id="fitnessziel" value={Fitnessziel} onChange={handleFitnessziel} className=' bg-ecs-Default font-medium text-ecs-prussianBlue'>
        <option value="Muskelaufbau">Muskelaufbau</option>
        <option value="Abnehmen">Abnehmen</option>
      </select>
      </div>

      <div className='flex flex-col w-fit mb-8'>
      <label className="text-md mb-2" htmlFor="text">Wie schätzen Sie sich selbst im Fitness-Bereich ein?</label>
      <select id="erfahrung" value={Erfahrung} onChange={handleErfahrung} className='bg-ecs-Default font-medium text-ecs-prussianBlue '>
        <option value="Anfänger">Anfänger</option>
        <option value="Fotgeschritten">Fortgeschritten</option>
        <option value="Profi">Profi</option>
      </select>
      </div>
      </div>


      <div className="mb-8">
        <label className="block text-hf-80 mb-2" htmlFor="message">
          Nachricht
        </label>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="appearance-none border border-stone-400 rounded w-full py-2 px-3 text-ecs-prussianBlue leading-tight focus:outline-none focus:shadow-outline bg-transparent"
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

export default ProbetrainingView
