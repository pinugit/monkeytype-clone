import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
interface Props {
  xFrom: number;
  xTo: number;
  y: number;
}
const MovingBar: React.FC<Props> = ({ xFrom, xTo, y }: Props) => {
  const [xFromState, setXFromState] = useState(xFrom);
  const [xToState, setXToState] = useState(xTo);
  const [yState, setYState] = useState(y);
  useEffect(() => {
    setXFromState(xFrom);
    setXToState(xTo);
    setYState(y);
  }, [xFrom, xTo, y]);
  return (
    <motion.div
      className="w-1 "
      initial={{ x: xFromState, y: yState }}
      animate={{ x: xToState, y: yState }}
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
