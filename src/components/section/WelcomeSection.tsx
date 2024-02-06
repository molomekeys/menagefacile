"use client"
import { useEffect, useState ,useRef} from "react"
import Navbar from "../Navigation/Navbar"
import { Button } from "../ui/button"
import {motion ,AnimatePresence,useInView} from "framer-motion"
import { v4 } from "uuid"
import {useMediaQuery} from "react-responsive"
import { isMobile } from "react-device-detect"
import Link from "next/link"
import { DialogEstimation } from "../Navigation/DialogEstimation"
const WelcomeSection = () => {
const [isChangingImage,setIsChangingImage]=useState(0)
const [isInterValId,setIsIntervalId]=useState<NodeJS.Timeout>()
const isTabletOrMobile = useMediaQuery({ query: '(max-width: 804px)' })

const allImageData=[{isDesktop:"https://images.pexels.com/photos/6195273/pexels-photo-6195273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
isMobile:`https://images.pexels.com/photos/209271/pexels-photo-209271.jpeg?auto=compress&cs=tinysrgb&w=800`},{isDesktop:`https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800`

,isMobile:"https://images.pexels.com/photos/4107107/pexels-photo-4107107.jpeg?auto=compress&cs=tinysrgb&w=800"}
,{isDesktop:`https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=ti
nysrgb&w=1260&h=750&dpr=2`,isMobile:"https://images.pexels.com/photos/3287162/pexels-photo-3287162.jpeg?auto=compress&cs=tinysrgb&w=800"}]

const refWelcome=useRef(null)
const isInView=useInView(refWelcome,{amount:0.5})

console.log(isInterValId,isInView)
const allText=[{
id:"idTest",
firstTitle:"L'entretien réinventer",
title:`NET'PROS le choix de la qualité
`,
sousDescription:`car chaque entreprise à ses spécificités, nous vous offrons des services sur mesure, afin
que vous n'ayez à payer que pour ceux que vous auriez besoin`}
,{
    title:`Net pros vous offre une collection de services qui seront s'adapter à vos besoins,
    car chaque entreprise à ses spécificités`,
    id:"idtest2b",
    sousDescription:`COPROPRIÉTÉS `
},{
    title:`Débarras pour particulier et professionnels `,

    sousDescription:"Débarras",
    id:"idtest2bbbbb",
}
]

 

  return (
  <section 
  ref={refWelcome}
  className="w-full h-[700px] lg:h-screen lg:p-20  overflow-hidden bg-transparent
    relative flex flex-col lg:flex-row  items-center justify-center">
   
{/**mobile */   }
<div className="w-full h-full z-20 absolute bottom-0">
    <img 
    className="w-full h-full brightness-50 "
    src="/test-bas.jpg "/>
</div>

<div className="relative -rotate-[35deg]  
z-50 
w-full h-full order-2 hidden lg:flex flex items-center justify-center">

<div className="w-[700px] 

flex overflow-hidden
 
  h-[300px] rounded-full  z-50 relative">
<img  

src="/photo_welcome-min.jpeg" 

className="  z-50 object-right w-full h-full   rotate-[35deg]   absolute  scale-150      brightness-[45%] 
 "/>
</div>

 




</div>

  <section className="flex flex-col     lg:pt-10
  
  z-20 gap-0 text-left  items-center justify-center w-full h-full  ">
    <div className="flex flex-col 
      w-full lg:pl-10 h-full  relative    items-center justify-center">
    <div 
    key={allText[0].id}
    className="flex text-left flex-col     relative     brightness-95
     lg:text-left  lg:justify-center  lg:gap-0 px-10 lg:px-0">
     
    <motion.h3
          initial={{opacity:0}}

              viewport={{once:true}}

    key={allText[0].id+"title"}
    animate={{opacity:[0,1],transition:{delay:0.5,duration:1.5}}}
    className="   n  lg:w-[600px]  text-left 
t  flex flex-col gap-0
    "><span
    
    className="text-slate-50 font-stolzl text-4xl  order-2   lg:text-4xl 
    leading-none   lg:leading-tight  
     font-semibold tracking-tighter"
    
    >{allText[0].title.split(" ")[0]} </span>
    <span className="text-xs text-slate-300 inline-block font-sans tracking-normal">{
    allText[0].title.split(" ").slice(1).join(" ")}</span></motion.h3>







        <motion.p
              initial={{opacity:0}}

                  viewport={{once:true}}

        key={allText[0].id+"description"}
    animate={{opacity:[0,1],transition:{delay:1.5,duration:2}}}
    className="text-slate-200  leading-relaxed  pt-4   lg:w-3/5  text-left  lg:text-lg 
      lg:leading-tight  font-normal">{allText[0].sousDescription}</motion.p>
    {/* <motion.div 
                  animate={{opacity:[0,1],transition:{duration:2,delay:2.25}}}

    className="flex gap-8   text-slate-200 text-lg pt-10">
        <Button className="bg-blue-900 p-4 rounded-full font-semibold ">En savoir plus</Button>
        <Button className="bg-[#39a2a7] p-4 rounded-full font-semibold ">Nous contacter</Button>

    </motion.div> */}



    </div>
    <motion.div 
      initial={{opacity:0}}
      animate={{opacity:[0,1],y:[100,0]}}
  transition={{duration:1.25,delay:2.25}}
  className="  p-2 px-4 lg:hover:bg-slate-300
  text-slate-100 cursor-pointer     w-full lg:w-fit
  lg:hover:text-slate-800 duration-150  rounded-full  
  items-center justify-center flex z-20   absolute bottom-20     lg:mt-10
  lg:bg-amber-200  lg:bg-opacity-20 py-2 ">
   <DialogEstimation styleBtn="bg-slate-300   
   
   rounded-full py-6 lg:bg-transparent hover:bg-green-600 hover:bg-opacity-[30%] hover:text-slate-100   text-slate-800" />
    </motion.div>
  </div>

  </section>

  </section>
  )
}
export default WelcomeSection