"use client"
import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const Pitch = () => {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null); // Referenz für das zu beobachtende Element

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Wenn das Element sichtbar ist, starte CountUp
          observer.disconnect(); // Stoppt das Beobachten nach dem ersten Erreichen des Sichtbaren Bereichs
        }
      },
      { threshold: 0.5 } // Startet, wenn 50% des Elements sichtbar sind
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div className='w-full h-fit bg-hf-400 z-30 md:z-0 px-5 lg:px-24'>
      <div className='w-full h-full md:max-w-2xl lg:max-w-7xl mx-auto flex flex-col md:flex-row xl:flex-col justify-between items-center xl:items-start xl:gap-20 py-10 text-hf-50 gap-10'>
        <p className='callout text-center md:text-left'>Aufgewachsen mit<br/> dem Kraftsport</p>

        <div className='flex flex-col items-center md:items-start lg:flex-row gap-20' ref={counterRef}>

          <div className='flex flex-col'>
            <p className='font-bold text-7xl inter-font'>
              {isVisible && <CountUp end={5} />}+
            </p>
            <p className='text text-hf-60'>Jahre Erfahrung</p>
          </div>

          <div className='flex flex-col items-center md:items-start'>
            <p className='font-bold text-7xl inter-font'>
              {isVisible && <CountUp end={1500} />}+
            </p>
            <p className='text text-hf-60'>Trainingsstunden</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Pitch;
