import React from "react";

interface Props {
  words: string[];
  numWords: number;
}

const RandomWords = ({ words, numWords }: Props) => {
  const getRandomWords = (inputWords: string[], count: number) => {
    const result = [""];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * inputWords.length);
      result.push(inputWords[randomIndex] + " ");
    }
    const result_without_first_element = result.slice(1);
    return result_without_first_element;
  };

  const randomWords = getRandomWords(words, numWords);
  console.log(randomWords);

  return (
    <ul className="flex flex-wrap">
      {randomWords.map((word, index) => (
        <li key={index} className="inline-block pr-1 ">
          {word}
        </li>
      ))}
    </ul>
  );
};

export default RandomWords;
