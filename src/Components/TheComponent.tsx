import React, { useRef, useEffect } from "react";

const MyComponent: React.FC = () => {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (h1Ref.current) {
      const rect = h1Ref.current.getBoundingClientRect();
      console.log(
        `left: ${rect.left}, right: ${rect.right}, bottom: ${rect.bottom},top:${rect.top}, width:${h1Ref.current.offsetWidth} `
      );
    }
  }, []);

  return (
    <h1 ref={h1Ref} className="ml-6 inline-block">
      Hello World
    </h1>
  );
};

export default MyComponent;
