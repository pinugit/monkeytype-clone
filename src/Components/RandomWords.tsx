import React, { useEffect, useRef, useState } from "react";

interface Props {
  words: string[];
  numWords: number;
}

const RandomWords = ({ words, numWords }: Props) => {
  const wordRef = useRef<HTMLDivElement>(null);
  const getRandomWords = (inputWords: string[], count: number) => {
    const result = [""];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * inputWords.length);
      result.push(inputWords[randomIndex]);
    }
    const resultWithoutFirst = result.slice(1);

    return resultWithoutFirst;
  };

  useEffect(() => {
    if (wordRef.current) {
      const rect = wordRef.current.getBoundingClientRect();
      console.log(
        `left: ${rect.left}, right: ${rect.right}, bottom: ${rect.bottom},top:${rect.top}, width:${wordRef.current.offsetWidth} `
      );
    }
  }, []);

  const randomWords = getRandomWords(words, numWords);
  console.log(randomWords);

  return (
    <ul className="flex flex-wrap">
      {randomWords.map((word, index) => (
        <li ref={wordRef} key={index} className="inline-block flex">
          {word.split("").map((letter, index) => (
            <p>{letter}</p>
          ))}
          &nbsp;
        </li>
      ))}
    </ul>
  );
};

export default RandomWords;
