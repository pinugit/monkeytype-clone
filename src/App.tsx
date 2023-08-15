import React, { useEffect, useState } from "react";
import TypingChecker from "./Components/TypingChecker";
import { BsFillKeyboardFill } from "react-icons/bs";
import "./App.css";
import Cursor from "./Components/Cursor";
import commonWords from "./Components/WordList";
interface coordinates {
  x: number;
  y: number;
}
function App() {
  const [coordinateList, setCoordinateList] = useState<coordinates[]>([]);
  const [currentCoordinate, setCurrentCoordinate] = useState<coordinates>({
    x: coordinateList[0]?.x,
    y: coordinateList[0]?.y,
  });
  const [count, setCount] = useState(0);
  const [pElementsList, setPElementsList] = useState<
    HTMLParagraphElement[] | null[]
  >([]);
  useEffect(() => {
    pElementsList.map((pElement) => {
      setCoordinateList((prev) => [
        ...prev,
        { x: pElement.offsetLeft, y: pElement.offsetTop },
      ]);
      setCurrentCoordinate(coordinateList[0]);
    });
  }, []);

  const handleClick = () => {
    setCurrentCoordinate(coordinateList[count]);
    setCount(count + 1);
  };

  const handlePElements = (pElement: any) => {
    setPElementsList(pElement);
    console.log(pElementsList);
  };

  return (
    <>
      <Cursor x={currentCoordinate?.x} y={currentCoordinate?.y} />
      <div className="flex flex-col px-[10%] bg-primary h-screen text-text-primary ">
        <div className="flex m-6">
          <BsFillKeyboardFill className="text-5xl me-3" />
          <h1 className="text-[#ebdbb2] text-5xl font-kanit">fastTyper</h1>
        </div>
        <div className="flex justify-center mb-40">
          <div className="bg-primary-dark h-10 w-[70%] rounded-xl">
            word is pending{" "}
          </div>
        </div>
        <div
          id="unselectable"
          className=" h-28 w-[100%] flex flex-wrap content-start text-2xl p-6 overflow-hidden snap-y overflow-y-auto "
        >
          <TypingChecker
            paraLength={10}
            wordList={commonWords}
            onCorrectType={handleClick}
            onPassingPElement={handlePElements}
          />
        </div>
        <button
          onClick={handleClick}
          className="bg-primary-dark h-10 w-[70%] rounded-xl"
        >
          Start
        </button>
      </div>
    </>
  );
}

export default App;
