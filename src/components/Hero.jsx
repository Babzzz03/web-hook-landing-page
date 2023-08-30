import React from "react";
import styles from "../style";
import { discount, cloudIllusion } from "../assets";
import GetStarted from "./GetStarted";
import { motion } from "framer-motion";

// const transition = {
//   duration: 9,
//   type: "spring",
//   stiffness: 47,
//   damping: 14,
//   delay: 0.2,
// };
//   const transition2 = {
//     duration: 3,
//     type: "spring",
//     stiffness: 100,
//     damping: 8,

//   };
//      const transition3 = {
//        type: "spring",
//        bounce: 0.4,
//        duration: 3,

//      };

// <motion.div
// initial={{ y: 40, opacity: 0 }}
// whileInView={{ y: 0, opacity: 1 }}
// viewport={{ amount: 0.6 }}
// transition={transition3}
// className="btn__wrap"
// >

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-gradient">Webhooks</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[40.8px] leading-[45px] w-full">
          As A Service
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          flake is an Open-Source Webhooks-as-a-service (WaaS) that makes it
          easy for developers to send webhooks. Developers make one API call,
          and flake takes care of deliverability, retries, security, and more.
        </p>
      </div>
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          bounce: 0.7,
          duration: 3,
        }}
       
      >
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={cloudIllusion}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
      </motion.div>
        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted />
        </div>
     
    </section>
  );
};

export default Hero;
