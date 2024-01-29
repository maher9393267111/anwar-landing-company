"use client"

import Image from "next/image";
import { motion } from "framer-motion"


import StaggerChildren, { createSlideVariant ,lefttVariants, rightVariants } from "../../../animation/staggerChildren"


export default function CompanySales() {

  
  const slideFromRight = createSlideVariant({ from: "right", whileInView: true })
  
  const slideFromLeft = createSlideVariant({ from: "left", whileInView: true })
  
  return (
    // <StaggerChildren
    // whileInView
    // staggerDelay={0.55}>

    <div className="grid grid-cols-12 gap-12 items-center">


      <motion.div
            // variants={slideFromRight}
            // transition={{ duration: 1.2, type: "spring", damping: 26 }}
            variants={rightVariants}
            initial="offscreen"
            whileInView={"onscreen"}
      
      className="col-span-12 lg:col-span-5 border-4 border-primaryColor-900">
        <Image
          src="/assets/image-2.jpg"
          width={0}
          height={0}
          alt="Hero"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
          quality={100}
        />
        {/* <img
          src="/assets/hero.png"
          alt="Hero"
          style={{ width: "100%", height: "auto" }}
        /> */}
      </motion.div>



      <motion.div
            // variants={slideFromLeft}
            // transition={{ duration: 1.2, type: "spring", damping: 26 }}

            variants={lefttVariants}
            initial="offscreen"
            whileInView={"onscreen"}


      
      className="col-span-12 lg:col-span-7">
        <div className="flex flex-col">
          <h1 className="text-5xl font-semibold leading-tight text-primaryColor-1000">
            مبيعاتنا منذ 2017 الى 2024
          </h1>
          {/* <Tabel /> */}
          <div className="flex gap-10 flex-wrap mt-4">
            <div className="flex flex-col">
              <p className="text-3xl font-semibold text-primaryColor-1000">
                33750+
              </p>
              <span className="text-sm text-[#06548b]">Window</span>
            </div>
            <div className="flex flex-col">
              <p className="text-3xl font-semibold text-primaryColor-1000">
                54400+
              </p>
              <span className="text-sm text-[#06548b]">Split</span>
            </div>
            <div className="flex flex-col">
              <p className="text-3xl font-semibold text-primaryColor-1000">
                13920+
              </p>
              <span className="text-sm text-[#06548b]">Floor Stand</span>
            </div>
            <div className="flex flex-col">
              <p className="text-3xl font-semibold text-primaryColor-1000">
                812+
              </p>
              <span className="text-sm text-[#06548b]">Cassette</span>
            </div>
            <div className="flex flex-col">
              <p className="text-3xl font-semibold text-primaryColor-1000">
                102070+
              </p>
              <span className="text-sm text-[#06548b]">Total</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
    // </StaggerChildren>
  );
}
