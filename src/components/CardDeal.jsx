import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import {motion} from "framer-motion";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`} />
    </div>
    <motion.div
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4  }}
        transition={{
          type: "spring",
          duration: 3,
        }}
        className={`${layout.sectionImg}`}
      >
    
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    
    </motion.div>
  </section>
);

export default CardDeal;
