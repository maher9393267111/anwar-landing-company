"use client"

import Image from "next/image";
import Button from "../Button/Button";
import { FaCircleCheck } from "react-icons/fa6";

import { motion } from "framer-motion"


import StaggerChildren, { createSlideVariant ,rightVariants ,lefttVariants } from "../../../animation/staggerChildren"



export default function HeroSection() {



  return (

    <StaggerChildren
    whileInView
    staggerDelay={0.55}
    className=''>

    <div className="grid grid-cols-12 gap-x-2 gap-y-4">
      <motion.div
  
            variants={rightVariants}
            initial="offscreen"
            whileInView={"onscreen"}



             className="col-span-12 lg:col-span-7 xl:col-span-6 order-last lg:order-1">
        <div className="flex flex-col">
          <span className="text-sm mt-4 text-primaryColor-900 font-bold">
            من افضل الماركات
          </span>

          <h1 className="text-5xl font-semibold leading-tight mt-4">
            افضل الشركات و المناشيء العالمية من حيث التبريد و التكييف
          </h1>
          <p className="mt-4 text-lg lg:pe-16 text-justify">
            مرحبًا بك في عالم الراحة والانتعاش! نحن هنا لنقدم لك تجربة تبريد
            استثنائية مع مجموعتنا المتنوعة من المكيفات وأجهزة التبريد المبتكرة.
            اكتشف أداءً عالي الكفاءة وتكنولوجيا حديثة توفر لك بيئة داخلية مثالية
            طوال العام.
          </p>
          <div className="flex gap-4 mt-6">
            <Button>بعض من خدماتنا</Button>
            <Button intent="light">بعض من منتجاتنا</Button>
          </div>
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
      <motion.div
         
            variants={lefttVariants}
            initial="offscreen"
            whileInView={"onscreen"}
      
      
      className="col-span-12 lg:col-span-5 xl:col-span-6 flex items-center lg:order-2">
        <Image
          src="/assets/hero-11.png"
          width={0}
          height={0}
          alt="Hero"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
          quality={100}
        />
   
      </motion.div>
    </div>

    </StaggerChildren>
  );
}
