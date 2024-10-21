"use client"
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ImInfo } from 'react-icons/im';
import Link from 'next/link';


const ContactForm = () => {


  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
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
    <form onSubmit={handleSubmit} className="mx-auto w-full rounded-xl p-5 bg-hf-100">
      <div className="mb-4">
<div className='w-full flex justify-center lg:justify-start'>
        <h2 className='text-hf-90 callout pb-8'>Kontaktformular</h2>
        </div>
        <label className="block info text-hf-80 mb-2" htmlFor="firstName">
          Vorname
        </label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="appearance-none border border-hf-300 w-full py-2 px-3 text-black-100 leading-tight focus:outline-none focus:shadow-outline bg-white rounded-lg"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block info text-hf-80 mb-2" htmlFor="lastName">
          Nachname
        </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="appearance-none border border-hf-300 w-full py-2 px-3 text-black-100 leading-tight focus:outline-none focus:shadow-outline bg-white rounded-lg"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block info text-hf-80 mb-2" htmlFor="email">
          E-Mail
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="appearance-none border border-hf-300 w-full py-2 px-3 text-black-100 leading-tight focus:outline-none focus:shadow-outline bg-white rounded-lg"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block info text-hf-80 mb-2" htmlFor="phone">
          Handy (optional)
        </label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="appearance-none border border-hf-300 w-full py-2 px-3 text-black-100 leading-tight focus:outline-none focus:shadow-outline bg-white rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block info text-hf-80 mb-2" htmlFor="message">
          Nachricht
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="appearance-none border border-hf-300 w-full py-2 px-3 text-black-100 leading-tight focus:outline-none focus:shadow-outline bg-white rounded-lg"
          rows= {5}
          required
        />
      </div>

      <div className='flex flex-row gap-3 items-center text-hf-400 mb-2'>
<ImInfo className='text-3xl text-hf-300'/>
<span>
Mit dem Abschicken dieser Nachricht stimmen Sie der <Link href="/datenschutz" className='text-hf-350 underline'>Datenschutzerklärung</Link> zu.
</span>
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="flex flex-row button buttonText items-center"
        >
         {buttonTitle}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
