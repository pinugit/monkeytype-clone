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
      className="absolute"
      initial={{ x: xFromState, y: yState }}
      animate={{ x: xToState, y: yState }}
      transition={{
        flip: Infinity,
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      |
    </motion.div>
  );
};

export default MovingBar;
