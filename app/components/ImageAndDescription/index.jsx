"use client"

import Image from "next/image";
import Button from "../Button/Button";
import { FaCircleCheck } from "react-icons/fa6";

import { motion } from "framer-motion"


import StaggerChildren, { createSlideVariant ,rightVariants ,lefttVariants } from "../../../animation/staggerChildren"

export default function ImageAndDescription() {


  const slideFromRight = createSlideVariant({ from: "right", whileInView: true })
  const slideFromLeft = createSlideVariant({ from: "left", whileInView: true })


  return (
    <StaggerChildren
    whileInView
    staggerDelay={0.55}
    className=''>
    <div className="grid grid-cols-12 gap-12 items-center">
    <motion.div
            // variants={slideFromRight}
            // transition={{ duration: 0.8, type: "spring", damping:44 }}

            variants={rightVariants}
            initial="offscreen"
            whileInView={"onscreen"}



      
      className="col-span-12 md:col-span-5">
        <Image
          src="/assets/111.jpg"
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
            // transition={{ duration: 0.8, type: "spring", damping:44 }}
            variants={lefttVariants}
            initial="offscreen"
            whileInView={"onscreen"}

      
      className="col-span-12 md:col-span-7">
        <div className="flex flex-col">
          <span className="text-sm  text-primaryColor-900 font-bold">
            مميزاتنا
          </span>

          <h1 className="text-5xl font-semibold leading-tight mt-4">
            افضل الشركات و المناشيء العالمية من حيث التبريد و التكييف
          </h1>
          <p className="mt-4 text-lg lg:pe-10 text-justify">
            مرحبًا بك في عالم الراحة والانتعاش! نحن هنا لنقدم لك تجربة تبريد
            استثنائية مع مجموعتنا المتنوعة من المكيفات وأجهزة التبريد المبتكرة.
            اكتشف أداءً عالي الكفاءة وتكنولوجيا حديثة توفر لك بيئة داخلية مثالية
            طوال العام.
          </p>

          <div className="flex flex-col gap-3 mt-6">
            <div className="flex gap-2 items-center">
              <FaCircleCheck className="text-primaryColor-900" />
              <span>توريد وتركيب أحدث أنواع المكيفات</span>
            </div>
            <div className="flex gap-2 items-center">
              <FaCircleCheck className="text-primaryColor-900" />
              <span>صيانة دورية للأنظمة القائمة</span>
            </div>
            <div className="flex gap-2 items-center">
              <FaCircleCheck className="text-primaryColor-900" />
              <span>استشارات فنية وتقييم لاحتياجات التبريد</span>
            </div>
          </div>
        </div>
      </motion.div>



    </div>
    </StaggerChildren>
  );
}
