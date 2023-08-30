import React from 'react'
import { FAQcontent } from "../constants";
import styles, { layout } from "../style";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, content, index }) => (
    <div
      className={`flex w-full flex-row p-6 rounded-[20px] ${
        index !== FAQcontent.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
    
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );





const FAQ = () => {
  return (
    <section id="faq" className={layout.section}>
    <motion.div   initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4  }}
        transition={{
          type: "spring",
          bounce: 0.7,
          duration: 3,
        }}  className={`flex justify-start items-start flex-col`}>
      <h2  className={`${styles.heading2}  mt-5`}>
        Frequently asked<br className="sm:block hidden" /> 
       questions
      </h2>
      <p className={`${styles.paragraph} max-w-[270px] mt-5`}>
      Can’t find the answer you’re looking for?
Reach out to our customer support team.
      </p>
    </motion.div>

    <div className={`${layout.sectionImg} flex-col`}>
      {FAQcontent.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
  )
}

export default FAQ