"use client"
import { motion } from "framer-motion"


import StaggerChildren, { createSlideVariant ,lefttVariants ,rightVariants ,BtnVariants } from "../../../animation/staggerChildren"

import Image from "next/image";

export default function AfterFeatured() {
  
  return (

    <motion.div
        

            variants={BtnVariants}
            initial="offscreen"
            whileInView={"onscreen"}
    
    
    className="items-container mt-[-90px]">
      <div className="container">
        <div className="xl:px-10 grid grid-cols-12 gap-y-6 gap-x-6 xl:gap-x-10 items-center">
          <div className="col-span-12 sm:col-span-6 xl:col-span-3 w-full h-[380px] border-4 border-primaryColor-900">
            <Image
              src="/assets/product-1.jpg"
              width={0}
              height={0}
              alt="Hero"
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover !important",
              }}
              quality={100}
            />
          </div>

          <div className="col-span-12 sm:col-span-6 xl:col-span-3 w-full h-[380px] border-4 border-primaryColor-900">
            <Image
              src="/assets/product-2.jpg"
              width={0}
              height={0}
              alt="Hero"
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover !important",
              }}
              quality={100}
            />
          </div>
          <div className="col-span-12 sm:col-span-6 xl:col-span-3 w-full h-[380px] border-4 border-primaryColor-900">
            <Image
              src="/assets/product-3.jpg"
              width={0}
              height={0}
              alt="Hero"
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover !important",
              }}
              quality={100}
            />
          </div>
          <div className="col-span-12 sm:col-span-6 xl:col-span-3 w-full h-[380px] border-4 border-primaryColor-900">
            <Image
              src="/assets/product-4.jpg"
              width={0}
              height={0}
              alt="Hero"
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover !important",
              }}
              quality={100}
            />
          </div>
        </div>
      </div>
    </motion.div>
    // </StaggerChildren>
  );
}
