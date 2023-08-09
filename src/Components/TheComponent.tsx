import React, { useRef, useEffect, ReactNode } from "react";
interface Props {
  word: ReactNode;
}
const MyComponent: React.FC = ({ word }: string) => {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (h1Ref.current) {
      const rect = h1Ref.current.getBoundingClientRect();
      console.log(
        `left: ${rect.left}, right: ${rect.right}, bottom: ${rect.bottom},top:${rect.top}, width:${h1Ref.current.offsetWidth} `
      );
    }
  }, []);

  return;
};

export default MyComponent;
