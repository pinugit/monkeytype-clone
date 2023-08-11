import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
interface Props {
  xFrom: number;
  xTo: number;
  y: number;
}
const MovingBar: React.FC<Props> = ({ xFrom, xTo, y }: Props) => {
  const [xFromState, setXFromState] = useState(xFrom - 1.5);
  const [xToState, setXToState] = useState(xTo - 1.5);
  const [yState, setYState] = useState(y - 5);
  useEffect(() => {
    setXFromState(xFrom - 3);
    setXToState(xTo - 3);
    setYState(y - 5);
  }, [xFrom, xTo, y]);
  return (
    <motion.div
      className="absolute text-3xl"
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
