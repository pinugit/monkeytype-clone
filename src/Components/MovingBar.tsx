import React from "react";
import { motion } from "framer-motion";

const MovingBar: React.FC = () => {
  return (
    <motion.div
      className="w-1 absolute top-[0]"
      initial={{ x: 24, y: 0 }}
      animate={{ x: 105 }}
      transition={{
        flip: Infinity,
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <div className="bg-black w-[2px] h-[23px]"></div>
    </motion.div>
  );
};

export default MovingBar;
