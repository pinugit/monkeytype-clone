import React, { useState } from "react";
import TypingChecker from "./Components/TypingChecker";
import { BsFillKeyboardFill } from "react-icons/bs";

function App() {
  return (
    <div className="flex flex-col px-[15%] bg-primary h-screen text-text-primary ">
      <div className="flex m-6">
        <BsFillKeyboardFill className="text-5xl me-3" />
        <h1 className="text-[#ebdbb2] text-5xl font-kanit">fastTyper</h1>
      </div>
      <div className="flex justify-center mb-28">
        <div className="bg-primary-dark h-10 w-[70%] rounded-xl">
          word is pending{" "}
        </div>
      </div>
      <div className="bg-primary-dark h-60 w-[100%] flex ">
        <TypingChecker />
      </div>
    </div>
  );
}

export default App;
