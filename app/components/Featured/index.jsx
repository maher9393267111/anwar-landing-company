"use client"
import { motion } from "framer-motion"


import StaggerChildren, { createSlideVariant ,titleVariants } from "../../../animation/staggerChildren"

export default function Featured() {

  const slideFromBottom = createSlideVariant({ from: "top", whileInView: false })

  return (
    <StaggerChildren
    whileInView
    staggerDelay={0.55}
    className=''>
     <div
           
    
    
    className="flex flex-col justify-center">
      <span className="text-center text-primaryColor-900 mb-3 lg:mb-5 text-sm font-bold">
        المميز لدينا
      </span>


      <motion.div
         variants={titleVariants}
         initial="offscreen"
         whileInView={"onscreen"}
            // variants={slideFromBottom}
            // transition={{ duration: 1.8, type: "spring", damping:44 }}
      
      className="flex justify-center">
        <h1 className="md:max-w-[480px] lg:max-w-[520px] xl:max-w-[626px] relative  z-11 text-center text-5xl">
          جميع اجهزتنا مضمونة بضمان حقيقي و من شركات عالمية مضمونة
        </h1>
      </motion.div>




    </div>
    </StaggerChildren>
  );
}
