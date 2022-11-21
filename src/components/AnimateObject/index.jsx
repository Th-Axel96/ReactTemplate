import Img1 from "../../assets/img/fusee.png";

import { motion, useCycle } from "framer-motion";

export const AnimateRocketOnClick = () => {
  const [animate, click] = useCycle(
    {
      scale: 1,
      x: 0,
      y: [
        0, 5, 10, 15, 10, 5, 0, -5, -10, -15, -10, -5, 0, 5, 10, 15, 10, 5, 0,
        -5, -10, -15, -10, -5, 0,
      ],
    },
    { scale: 1.5, x: 500 }
  );

  return (
    <motion.div
      style={{
        rotate: 90,
        width: 100,
        height: 100,
        cursor: "pointer",
      }}
      initial={{ rotate: 80 }}
      transition={{
        duration: 5,
      }}
      animate={animate}
      onTap={click}
    >
      <img src={Img1} alt="" />
    </motion.div>
  );
};
