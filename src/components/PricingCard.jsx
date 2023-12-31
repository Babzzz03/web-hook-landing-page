import React from "react";
import styles from "../style";
import { FcCheckmark } from "react-icons/fc";
import { motion } from "framer-motion";
import { item } from "../constants";


const PricingCard = ({ data }) => {
  return (
    <motion.div variants={item}
      className={`flex justify-start items-start  ${styles.padding2}  flex-col bg-black-gradient rounded-[20px] w-[27vw] box-shadow`}
    >
      <h3 className={styles.heading3}>{data.title}</h3>
      <p className={`${styles.paragraph2} max-w-[470px] mt-1`}>{data.descr}</p>
      <div className={` flex justify-end items-end   `}>
        <p className="text-white font-bold xs:text-[32px] text-[24px] flex justify-end items-end ">
          {data.plan}
        </p>
        <p className="text-dimWhite mx-2 my-2">{data.planDuration}</p>
      </div>
      <button
        type="button"
        className={`py-2 w-full my-1 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      >
        {data.CTAct}
      </button>
      <div className="w-full my-4 h-[1px] bg-blue-gradient opacity-20" />
      <p className="text-white font-semibold text-[14px]">WHAT'S INCLUDED</p>
      {data.whatIncluded.map((plan, i) => (
        <div
          key={i}
          className={` flex justify-end items-end  ${styles.paragraph2} `}
        >
          {" "}
          <FcCheckmark className="font-bold w-5 h-5 my-3" />{" "}
          <p className="mx-2 my-2">{plan.Char1}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default PricingCard;
