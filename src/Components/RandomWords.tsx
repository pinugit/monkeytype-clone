import React, { useEffect, useRef, useState } from "react";
import MovingBar from "./MovingBar";

interface Props {
  words: string[];
  numWords: number;
}

const RandomWords = ({ words, numWords }: Props) => {
  const getRandomWords = (inputWords: string[], count: number) => {
    const result = [""];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * inputWords.length);
      result.push(inputWords[randomIndex]);
    }
    const resultWithoutFirst = result.slice(1);

    return resultWithoutFirst;
  };

  const randomWords = getRandomWords(words, numWords);
  console.log(randomWords);
  const wordRefs = useRef(randomWords.map(() => useRef<HTMLLIElement>(null)));
  useEffect(() => {
    wordRefs.current.forEach((ref) => {
      if (ref.current) {
        const rect = (ref.current as HTMLElement).getBoundingClientRect();
        console.log(
          `left: ${rect.left}, right: ${rect.right}, bottom: ${
            rect.bottom
          }, top: ${rect.top}, width: ${
            (ref.current as HTMLElement).offsetWidth
          }`
        );
      }
    });
  }, []);
  return (
    <>
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
    </>
  );
};

export default RandomWords;
