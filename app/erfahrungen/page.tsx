import Footer from '@/components/Footer'
import Navbar from '@/components/navbar'
import Link from 'next/link'
import React from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import "@/css/text.css"

const page = () => {
    const testimonials = [
        {
          quote:
            'Ich bin 54 Jahre alt (w) und muss sagen, Luis hat es geschafft, mich nach meiner jahrelangen Sportabstinenz wieder zu regelmäßigen Sporteinheiten zu motivieren. Für mich ist Luis der geborene Personal Trainer. Er kombiniert sein Fachwissen als Trainer mit der praktischen Kompetenz aus der Physiotherapie. In unseren Trainingsstunden wird nicht geredet, sondern hart (aber mit Spaß) und fokussiert an meinen persönlichen Zielen gearbeitet. Alles, was er sagt und in seinen Beratungsgesprächen vermittelt, hat er selbst langjährig ausprobiert und auf Herz und Nieren getestet. Mein Trainingsplan wird stetig weiterentwickelt, und siehe da, er schafft es immer, noch eine kleine Steigerung durch mehr Gewichte herauszukitzeln. Ich werde auch noch einen Klimmzug schaffen! Alle Trainingsziele sind immer an meinen aktuellen Gesundheitszustand und eventuelle Probleme angepasst. Bin ja nicht mehr 20! Ha, ha! Danke, Luis, you make my day 👟👟',
          name: "Stephanie B.",
          date: "",
        },
        {
          quote:
            "Hallo, seit einem Jahr ist Luis mein Trainer. Das Training ist immer sehr abwechslungsreich. Er fragt immer, ob es einem gut geht oder ob man Beschwerden hat, auf die man achten muss. Das Training hat mein Wohlbefinden sehr verbessert, und ich kann ihn nur weiterempfehlen. Danke, Luis!",
          name: "Simone R.",
          date: "",
        },
      ];
  return (
    <div id='erfahrungen'
    className='flex flex-col justify-between w-full bg-ecs-Platinum text-ecs-richBlack min-h-screen overflow-hidden'>
      <Navbar />

      <div className='max-w-7xl py-10 px-4 mx-auto overflow-hidden mb-40 mt-20'>
        <div className='fixed rounded-full p-1 bg-white z-50'>
      <Link href='/#bewertungen'><MdArrowBackIosNew className=' text-ecs-richBlack text-3xl hover:text-ecs-SilverLakeBlue' /></Link>
      </div>
       <h1 className='text-ecs-richBlack text-center subheadline pb-10'>Erfahrungen</h1>

<ul className='flex flex-col lg:flex-row gap-10'>
       {testimonials.map((item) => (
  <li
  className="w-[350px] relative rounded-2xl border-2 border-hf-200 px-6 py-4 md:w-[450px] bg-hf-500 shadow-md "
  key={item.name}
>
  <div>
    <div className=" text-base leading-[1.6] text-gray-400 font-normal">
          {item.name}
        </div>
    <div className=" relative z-20 text-base leading-[1.6] text-gray-100 font-light mt-4">
      {item.quote}
    </div>
  </div>
</li>
       ))}
</ul>

        </div>

        <Footer />
        </div>
  )
}

export default page