import React from 'react'
import { FAQcontent } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";






const FeatureCard = ({ icon, title, content, index }) => (
    <div
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
    </div>
  );



const EveryThingNeeded = () => {
  return (
    <section id="faq" className={layout.section}>
    <div className={`flex justify-start items-start flex-col`}>
      <h2  className= "font-poppins font-semibold xs:text-[28px] text-[20px] text-white xs:leading-[46.8px] leading-[36.8px] w-full">
      EVERYTHING YOU NEED<br className="sm:block hidden" /> 
       All in one platform
      </h2>
      <p className={`${styles.paragraph} max-w-[300px] mt-5`}>
      Build a state of the art webhooks solution in minutes using the flake webhooks service.
      </p>

    </div>

    <div className={`${layout.sectionImg2}  flex-wrap`}>
      {FAQcontent.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
  )
}

export default EveryThingNeeded