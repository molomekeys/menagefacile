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
  className="w-full h-screen  overflow-hidden bg-[#29677b]
    relative flex flex-col lg:flex-row  items-center justify-center">
   
{/**mobile */   }
<div className="w-full h-fit z-20 absolute bottom-0">
    <img 
    className="w-full "
    src="/testbas.png"/>
</div>

<div className="relative w-full h-full order-2 hidden lg:flex flex items-center justify-center">

<div className="w-[600px] -rotate-45  
 overflow-hidden
bg-white bg-opacity-10   h-[350px] rounded-full z-50 relative">
<img  

src="/photo_welcome-min.jpeg" 

className=" z-30  absolute  rotate-45 brightness-[45%] 
 "/>
</div>

 




</div>

  <section className="flex flex-col     lg:pt-10
  
  z-20 gap-0 text-left  items-center justify-center w-full h-full  ">
    <div className="flex flex-col 
      w-full lg:pl-10 h-full  relative   items-center justify-center">
    <div 
    key={allText[0].id}
    className="flex text-left flex-col     brightness-95
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
    className="text-slate-200  leading-relaxed  pt-4   lg:w-[600px]  text-left  lg:text-lg 
      lg:leading-tight  font-normal">{allText[0].sousDescription}</motion.p>
    {/* <motion.div 
                  animate={{opacity:[0,1],transition:{duration:2,delay:2.25}}}

    className="flex gap-8   text-slate-200 text-lg pt-10">
        <Button className="bg-blue-900 p-4 rounded-full font-semibold ">En savoir plus</Button>
        <Button className="bg-[#39a2a7] p-4 rounded-full font-semibold ">Nous contacter</Button>

    </motion.div> */}
    </div>
  </div>
  <div className=" w-full  flex justify-center 
    flex-col h-[250px]   items-center gap-2 ">

    <div className=" w-fit h-full    p-1 
     z-50 flex  gap-4
      relative  lg:rounded-full  items-center justify-e   flex flex-col">
  <motion.div 
      initial={{opacity:0}}
      animate={{opacity:[0,1],y:[100,0]}}
  transition={{duration:1.25,delay:2.25}}
  className="  p-2 px-4 lg:hover:bg-slate-300
  text-slate-100 cursor-pointer  
  lg:hover:text-slate-800 duration-150  rounded-full  
  items-center justify-center flex z-50 relative
  lg:bg-amber-200 w-full lg:bg-opacity-20 py-2 ">
   <DialogEstimation styleBtn="bg-[#7abebe] rounded-full py-6 lg:bg-transparent hover:bg-transparent  text-current" />
    </motion.div>

    </div>


  </div>
  </section>

  </section>
  )
}
export default WelcomeSection