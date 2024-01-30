"use client"

import { v4 } from "uuid"
import { IoMdQuote } from "react-icons/io";
import {motion} from "framer-motion"
import CardTestimonialComponent from "../CardTestimonialComponent";
const TestimonialSection = () => {

    const temoign=[{name:"Raphael morticis"
    ,description:"Magnifique compagnie elle m'a permit de multiplier tout",id:v4(),
url:`https://images.pexels.com/photos/258174/pexels-photo-258174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`
}
,{name:"Raphael",description:"Magnifique compagnie je la recommande vivement",id:v4()
,url:`https://www.pexels.com/fr-fr/photo/homme-en-chemise-boutonnee-marron-3785079`
},
{name:"Raphael",description:"Magnifique compagnie",id:v4()
,url:`https://www.pexels.com/fr-fr/photo/photo-gros-plan-de-femme-avec-manteau-marron-et-haut-gris-733872/`},
{name:"Raphael",description:"Magnifique compagnie",id:v4()
,url:`https://images.pexels.com/photos/3769706/pexels-photo-3769706.jpeg?auto=compress&cs=tinysrgb&w=800`
}
,{name:"Raphael",description:"Magnifique compagnie",id:v4(),
url:`https://www.pexels.com/fr-fr/photo/femme-en-rouge-a-manches-longues-tenant-une-tablette-3772510`}
,{name:"Raphael",description:"Magnifique compagnie",id:v4()
,url:`https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&w=800`}
,{name:"Raphael",description:"Magnifique compagnie",id:v4()
,url:`https://images.pexels.com/photos/3769706/pexels-photo-3769706.jpeg?auto=compress&cs=tinysrgb&w=800`}
]
    const allTemoignages=temoign.map((element)=>{
        return (
          <CardTestimonialComponent
          url={element.url}
          key={element.id} description={element.description}
          id={element.id} name={element.name}/>
        )
    })
  return (
   <section className=" h-[400px] bg-gradient-to-b pt-10
bg-[#F0F9F9]   overflow-auto w-screen
    flex flex-col gap-2 justify-center items-center">

<div className=" gap-20  bg-[#F0F9F9]  items-start pr-32   flex pt-8 h-full overflow-auto justify-start">

{allTemoignages}

</div>
   </section>
  )
}
export default TestimonialSection