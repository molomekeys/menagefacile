
"use client"
import ContactComponent from "@/components/ContactComponent"
import { useScroll,useMotionValueEvent } from "framer-motion";
import { useRouter} from "next/router";
import { useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Page = ({ params }: { params: { slug: string } }) => {

    const refForm=useRef<HTMLDivElement>(null)
    const {scrollYProgress}=useScroll({
       
    })
  
useMotionValueEvent(scrollYProgress,"change",(e)=>{
       if((e>0.2&&e<0.7)&&refForm.current)
       {
        refForm.current.style.position="fixed"
        refForm.current.style.top="0px"

       }
       

       else if(refForm.current) {
        refForm.current.style.position="absolute"

        refForm.current.style.bottom="0px"



       }
    })
  return (
    <main 
    className="flex  flex-col     w-screen bg-[#F0F9F9] overscroll-auto overflow-scroll  ">
        <div className="flex flex-col w-full items-center gap-4 py-10">
        <h2 className="text-6xl font-semibold text-center  h-fit relative z-50">{params.slug==="debarassage"? "Débarrassage" : "Entretien ménagés"}</h2>
        <IoIosArrowDown size={30}/>
        </div>

     <section 

     className="w-screen flex overflow-scroll relative">  
<div className="flex  relative  pt-10 w-full   bg-[#F0F9F9] overflow-scroll
  px-10   ">


    <section className=" w-2/3  
     overflow-scroll  overscroll-auto scrollbar-hide gap-20  flex flex-col bg-[#F0F9F9]   
      ">
<div className="h-full  flex flex-col gap-10 text-[#62656E] bg-[#F0F9F9] overscroll-auto ">
<p>auris eu nisi eget nisi imperdiet vestibulum. Nunc sodales vehicula risus. Suspendisse id mauris sodales, blandit tortor eu, sodales justo. Morbi tincidunt, ante vel suscipit volutpat, turpis enim volutpSectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore. Ut vel placerat eros, eu tincidunt velit. Consectetur adipiscing elit, adipiscing elit, sed do.

</p>
<h4 className="font-semibold text-slate-800 text-3xl">Sed ut perspiciatis unde omnis iste natus et
</h4>
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Aliquam laoreet sed neque ac vehicula. Cras congue eros nec quam laoreet, in viverra erat bibendum. Cras turpis urna, vulputate at est vitae, posuere lobortis erat.</p>
<div className="flex gap-10 w-full   bg-[#F0F9F9]">
    <div className=" rounded-lg h-[300px] w-[600px]">

    <img 
        className="object-cover rounded-lg"

    src={`https://images.pexels.com/photos/713297/pexels-photo-713297.jpeg?auto=compress&cs=tinysrgb&w=800`}/>

    </div>
    <div className=" rounded-lg h-[300px] w-[600px] ">
    <img 
    className="object-cover rounded-lg"
    src={`https://images.pexels.com/photos/625279/pexels-photo-625279.jpeg?auto=compress&cs=tinysrgb&w=800`}/>
    </div>
</div>
<div className="flex flex-col gap-8 bg-[#F0F9F9] w-ful h-full">
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
     clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

     <h3 className="font-semibold text-lg">
     Aliquam quis lobortis quam

     </h3>
     <p>
     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. S
     tet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
     </p>
     <div className="rounded-lg h-[500px] w-[700px] self-center">
        <img 
        className="rounded-lg object-cover"
        src="https://images.pexels.com/photos/5331118/pexels-photo-5331118.jpeg?auto=compress&cs=tinysrgb&w=800"/>
     </div>
</div>
</div>

    </section>
  

    </div>
    <div
         ref={refForm}
    className=" absolute z-50 right-0 p-8 bg-[#F0F9F9] bottom-0     w-1/3   h-fit">

    <ContactComponent/>

</div>
</section> 
    </main>
  )
}
export default Page