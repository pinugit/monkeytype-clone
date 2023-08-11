import React, { useState } from "react";
import TypingChecker from "./Components/TypingChecker";

function App() {
  return (
    <div>
      <div className={"absolute"} style={{ top: `${50}px`, left: `${27}px` }}>
        hello{" "}
      </div>
      <TypingChecker />
    </div>
  );
}

export default App;
