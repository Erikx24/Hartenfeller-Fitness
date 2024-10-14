import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

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

const Bewertungen = () => {
  return (
    <div id='erfahrungen' className='lg:w-full max-w-[1800px] px-5 md:px-24  pt-16 '>
    <div className='w-full max-w-7xl mx-auto flex flex-col justify-center gap-5 items-center lg:items-start '>

   
      
    <h2 className='sectionTitle '>Erfahrungen</h2>
    <div className='flex flex-col space-y-1 items-center lg:items-start'>
    <h1 className='subheadline leading-tight'>Was meine Kunden sagen</h1>
    
    </div>
</div>
<InfiniteMovingCards items={testimonials} speed='slow' pauseOnHover={true}/>
</div>
  )
}

export default Bewertungen