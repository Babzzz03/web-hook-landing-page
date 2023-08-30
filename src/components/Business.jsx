import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
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

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Open-source Webhooks Gateway <br className="sm:block hidden" /> for
        Efficient Engineers.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Securely Send, Receive and Manage millions of Webhooks Reliably with
        robust support for Retries, Rate Limiting, Static IPs, Circuit Breaking,
        Rolling Secrets and more.
      </p>

      <Button styles={`mt-10`} />
    </div>


    <motion.div
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6  }}
        transition={{
          type: "spring",
        
          duration: 3,
        }}
        className={`${layout.sectionImg} flex-col`}
      >
    

      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
  
      </motion.div>

  </section>
);

export default Business;
