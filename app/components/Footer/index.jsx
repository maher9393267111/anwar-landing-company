"use client"


import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { motion } from "framer-motion"


import StaggerChildren, { createSlideVariant ,rightVariants ,lefttVariants } from "../../../animation/staggerChildren"


export default function Footer() {

  // const slideFromBottom = createSlideVariant({ from: "right", whileInView: false })


  return (
    <StaggerChildren
    whileInView
    staggerDelay={0.55}
    className=''>


<motion.div
            // variants={slideFromBottom}
            // transition={{ duration: 0.8, type: "spring", damping:44 }}
    
            variants={rightVariants}
            initial="offscreen"
            whileInView={"onscreen"}
    
    
    >
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-x-10 gap-y-2 mt-24 mb-10">
        <div className="flex flex-col gap-y-4 col-span-2">
          <Image
            src="/assets/logo.png"
            width={0}
            height={0}
            alt="Logo"
            sizes="100vw"
            style={{ width: "220px", height: "auto" }} // optional
            quality={100}
          />
          <p className="max-w-[280px]">
            افضل الشركات و المناشيء العالمية من حيث التبريد و التكييف
          </p>
          <div className="flex gap-x-2 items-center justify-start">
            <FaFacebook className="text-3xl text-gray-600 cursor-pointer hover:text-primaryColor-900" />
            <AiOutlineInstagram className="text-3xl text-gray-600 cursor-pointer hover:text-primaryColor-900" />
          </div>
        </div>
        <div className="flex flex-col gap-y-4 mt-4">
          <p>معلومات التواصل</p>
          <p>07829600500</p>
          <p>alihamed@gmail.com</p>
        </div>
        <div className="flex flex-col gap-y-4 mt-4">
          <p>المصادر</p>
          <p>الخدمات</p>
          <p>المنصة</p>
          <p>الأحداث</p>
        </div>
        <div className="flex flex-col gap-y-4 mt-4">
          <p>المساعدة</p>
          <p>اساليب الدفع</p>
          <p>فروعنا</p>
          <p>الضمانات</p>
        </div>
        <div className="flex flex-col gap-y-4 mt-4">
          <p>المساعدة</p>
          <p>اساليب الدفع</p>
          <p>فروعنا</p>
          <p>الضمانات</p>
        </div>
      </div>
      <div className="border-t-2 w-full"></div>
      <div className="flex justify-center items-center mt-4">
        <p className="text-center">
          @ كافة الحقوق محفوظة لصالح شركة انوار العمارة
        </p>
      </div>

    </motion.div>

    </StaggerChildren>
  );
}
