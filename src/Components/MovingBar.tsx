import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
interface Props {
  xFrom: number;
  xTo: number;
  yFrom: number;
  yTo: number;
}
const MovingBar: React.FC<Props> = ({ xFrom, xTo, yFrom, yTo }: Props) => {
  const [xFromState, setXFromState] = useState(xFrom);
  const [xToState, setXToState] = useState(xTo);
  const [yFromState, setYFromState] = useState(yFrom);
  const [yToState, setYToState] = useState(yTo);
  useEffect(() => {
    setInterval(() => {
      setXFromState(Math.random() * 100);
      setXToState(Math.random() * 100);
      setYFromState(Math.random() * 100);
      setYToState(Math.random() * 100);
    }, 1000);
  }, []);
  return (
    <motion.div
      className="w-1 absolute "
      initial={{ x: xFromState, y: yFromState }}
      animate={{ x: xToState, y: yToState }}
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
