"use client"

import Image from "next/image";
import Button from "../Button/Button";
import { FaCircleCheck } from "react-icons/fa6";
import IconSection from "./components/IconSection";
import { MdLocalShipping } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { RiAdvertisementLine } from "react-icons/ri";

import { motion } from "framer-motion"


import StaggerChildren, { createSlideVariant,rightVariants ,lefttVariants } from "../../../animation/staggerChildren"


export default function Departments() {


  return (
   
     <motion.div
      
    
    className="grid grid-cols-12 gap-x-4 gap-y-8 items-center">
       <motion.div
       

            variants={rightVariants}
            initial="offscreen"
            whileInView={"onscreen"}
      
      
      className="col-span-12 sm:col-span-6">
        <div className="flex flex-col w-[98%]">
          <span className="text-sm mt-4 text-primaryColor-900 font-bold">
            الأداريات
          </span>

          <h1 className="text-5xl font-semibold leading-tight mt-4">
            العمل الجماعي المميز لكافة اقسام شركتنا هو سر نجاحنا
          </h1>
          <p className="mt-4 text-lg lg:pe-16 text-justify">
            مرحبًا بك في عالم الراحة والانتعاش! نحن هنا لنقدم لك تجربة تبريد
            استثنائية مع مجموعتنا المتنوعة من المكيفات وأجهزة التبريد المبتكرة.
            اكتشف أداءً عالي الكفاءة وتكنولوجيا حديثة توفر لك بيئة داخلية مثالية
            طوال العام.
          </p>
          <div className="flex gap-4 mt-6">
            <Button>المدراء في شركتنا</Button>
          </div>
        </div>
      </motion.div>




      <motion.div
          

            variants={lefttVariants}
            initial="offscreen"
            whileInView={"onscreen"}
        
         className="col-span-12 sm:col-span-6">
        <div class="grid grid-cols-2 gap-x-4 gap-y-8  place-items-start">
          <IconSection
            Icon={MdLocalShipping}
            heading="قسم الخدمات اللوجستية"
            text="نضمن تدفقًا سلسًا لعمليات النقل والتخزين، ونقدم حلولًا فعّالة لتحقيق
        فاعلية في السلسلة اللوجستية وتلبية احتياجات عملك بدقة."
          />
          <IconSection
            Icon={HiUserGroup}
            heading="قسم المبيعات"
            text="في قسم المبيعات، نلتزم بتقديم خدمة فائقة ومنتجات عالية الجودة. اكتشف تجربة تسوق فريدة مع فريقنا الملتزم."
          />
          <IconSection
            Icon={FaMoneyCheckAlt}
            heading="قسم الأدارة المالية"
            text="تحكم دقيق في الأرقام، واتخاذ قرارات مالية استراتيجية. نبني نجاح العمل من خلال إدارة فعالة للموارد المالية وتحقيق التوازن المالي المستدام."
          />
          <IconSection
            Icon={RiAdvertisementLine}
            heading="قسم الأعلان"
            text="في قسم الإعلان، نبتكر حملات إبداعية تبرز جمال وقيمة منتجاتنا. نلتزم بجذب الانتباه وتعزيز الوعي بطرق مبتكرة لضمان تأثير قوي ونجاح استراتيجيات التسويق."
          />
        </div>



      </motion.div>
    </motion.div>
    

  );
}
