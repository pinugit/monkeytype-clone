import React, { useEffect, useRef, useState } from "react";
import MovingBar from "./MovingBar";

interface Props {
  words: string[];
  numWords: number;
  cordinateIndex: number;
  onButoonClick: (wordCordinates: cordinates) => void;
}
interface cordinates {
  xfrom: number;
  xto: number;
  y: number;
}
const getRandomWords = (inputWords: string[], count: number) => {
  const result = [""];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * inputWords.length);
    result.push(inputWords[randomIndex]);
  }
  const resultWithoutFirst = result.slice(1);

  return resultWithoutFirst;
};
const RandomWords = ({
  words,
  numWords,
  onButoonClick,
  cordinateIndex,
}: Props) => {
  const [cordinateList, setCordinateList] = useState<cordinates[]>([]);
  const [randomWords, setRandomWords] = useState(
    getRandomWords(words, numWords)
  );

  const wordRefs = useRef(randomWords.map(() => useRef<HTMLLIElement>(null)));
  useEffect(() => {
    wordRefs.current.forEach((ref) => {
      if (ref.current) {
        const rect = (ref.current as HTMLElement).getBoundingClientRect();
        setCordinateList((prev) => [
          ...prev,
          { xfrom: rect.left, xto: rect.left + rect.width, y: rect.top },
        ]);
      }
    });
  }, []);
  console.log(cordinateList);

  return (
    <>
      <div className="flex flex-col h-screen w-screen p-[15%]">
        <div className="justify-center align-middle scrollable-div h-60 overflow-y-scroll border scroll border-gray-300 p-4 rounded-lg">
          {/* <MovingBar xFrom={}/> */}
          <ul className="flex flex-wrap">
            {randomWords.map((word, index) => (
              <li
                key={index}
                className="inline-block flex"
                ref={wordRefs.current[index]}
              >
                {word.split("").map((letter, index) => (
                  <p key={index}>{letter}</p>
                ))}
                &nbsp;
              </li>
            ))}
          </ul>
        </div>
        <button onClick={() => onButoonClick(cordinateList[cordinateIndex])}>
          Click me
        </button>
      </div>
    </>
  );
};

export default RandomWords;
