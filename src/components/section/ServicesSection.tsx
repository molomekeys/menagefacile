"use client"
import {v4} from "uuid"
import { Button } from "../ui/button"
import { FaArrowRight } from "react-icons/fa";
import {motion } from "framer-motion"
import YourSvg from '../../../public/cleaning-mop.svg'
import MovinSvg from "../../../public/SVG/moving.svg"
import DesinfectSVG from "../../../public/SVG/sanitaze.svg"
import GlovesSVG from "../../../public/SVG/cleaning-gloves.svg"

import ServiceComponent from "../services/ServiceComponent";

const ServicesSection = () => {
    const allData=[{titre:"Service de nettoyages commerciale",soustitre:'Ce que nous offrons',
    description:`Notre équipe dédiée met en œuvre des solutions personnalisées pour 
    répondre aux besoins uniques de votre entreprise, assurant un environnement impeccable. Choisissez la tranquillité d'esprit
    et la propreté professionnelle avec nos services de nettoyage commercial.`}]

    const allServices=[{
       titre:"Nettoyages ",svg:<YourSvg style={{width:"100%",heigth:"100%"}}  />
    },{
        titre:"Entretien",description:"Désinfection",svg:<DesinfectSVG style={{width:"100%",heigth:"100%"}}/>
    },{
        titre:"Copropriété",description:"the best thing over",svg:<GlovesSVG style={{width:"100%",heigth:"100%"}}/>
    },{
        titre:"Debarrassage",description:"the best thing over",svg:<MovinSvg style={{width:"100%",heigth:"100%"}}/>
    }]
    const allDataDisplay=allServices.map((e)=>{
       return <div 
       className="flex  justify-center lg:w-1/4"
       key={v4()}>
        
        <ServiceComponent title={e.titre}>
          <div className="text-current">
        {e.svg}
        </div>
        </ServiceComponent>
      
      
        </div>
    })
  return (
   <section className="w-full h-fit bg-[#F0F9F9] py-20
    flex flex-col justify-center items-center  gap-10  lg:px-10">

<div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
    <div className="flex text-sm flex-col w-full gap-4">
    <h4 className="font-semibold text-center lg:text-start">{allData[0].soustitre}</h4>
    <h2 className="text-center text-4xl  lg:text-start lg:text-6xl font-semibold  tracking-tighter">{allData[0].titre}</h2>
    </div>
    <div className="flex flex-col w-full justify-center items-center">
       <p className="leading-relaxed w-4/5   text-center lg:text-start"> {allData[0].description}</p>
    </div>
</div>
<div>

</div>
<div className=" grid grid-cols-2 flex-wrap    w-full lg:justify-center
gap-10  lg:gap-0 divided-none lg:flex lg:divide-x-[1px] divide-slate-300 ">
{allDataDisplay}
</div>
   </section>
  )
}
export default ServicesSection