import React from "react";
import styles, { layout } from "../style";
import PricingCard from "./PricingCard";
import { PricingData } from "../constants";
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



const Pricing = () => {
  return (
    <div className={`${styles.flexCenter} flex-col  `}>
      <h2 className={`${styles.heading2} ${styles.flexCenter}`}>
        Flask Pricing.
      </h2>
      <p className={`${styles.paragraph}   `}>
        Choose the plan that's right for you, and start sending webhooks now
      </p>
      <motion.div  variants={variants}
    initial={"hidden"}
    whileInView={"show"}
    viewport={{ once: true }} className={`${layout.section}  flex-wrap w-full justify-between `}>
        {PricingData.map((data, i) => (
          <PricingCard data={data} />
        ))}
      </motion.div>
    </div>
  );
};

export default Pricing;
