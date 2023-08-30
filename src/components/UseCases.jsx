import React from 'react'
import { FAQcontent, item } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from "framer-motion";

const variants = {
  hidden: {opacity : 0, y:7},
  show : {opacity: 1, y:0, 
    transition:{ 
    staggerChildren: 0.5, 
    ease: "easeOut",
   duration: 0.8,
  } }
 };



const FeatureCard = ({ icon, title, content, index }) => (
    <motion.div  variants={item}
      className={`flex justify-start align-start w-[30vw] h-[37vh] flex-row p-3 rounded-[20px] ${
        index !== FAQcontent.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
        <div
      className={`w-[34px] h-[34px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </motion.div>
  );

const UseCases = () => {
  return (
    <section id="faq" className={layout.section}>
    <div className={`flex justify-start items-start flex-col`}>
      <h2  className= "font-poppins font-semibold xs:text-[28px] text-[20px] text-white xs:leading-[46.8px] leading-[36.8px] w-full">
      Use Cases<br className="sm:block hidden" /> 
     
      </h2>
      <p className={`${styles.paragraph} max-w-[300px] mt-5`}>
      When something happens on your system, let your users know immediately!
      </p>

    </div>

    <motion.div variants={variants}
    initial={"hidden"}
    whileInView={"show"}
    viewport={{ once: true }} className={`${layout.sectionImg2}  flex-wrap`}>
      {FAQcontent.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </motion.div>
  </section>
  )
}

export default UseCases