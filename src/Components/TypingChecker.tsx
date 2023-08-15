import React, { MutableRefObject, Ref, useRef, useState } from "react";
import getRandomWords from "./GetRandomWords";
interface props {
  paraLength: number;
  wordList: string[];
  onCorrectType: (isCorrect: boolean) => void;
  onPassingPElement: (
    pElement: MutableRefObject<HTMLParagraphElement[] | null[]>
  ) => void;
}
const TypingChecker = ({
  paraLength,
  wordList,
  onCorrectType,
  onPassingPElement,
}: props) => {
  const [words, setWords] = useState(getRandomWords(paraLength, wordList));
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [activeLetterIndex, setActiveLetterIndex] = useState(0);
  const [typedWord, setTypedWord] = useState("");
  const [count, setCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const paraRef = useRef<HTMLParagraphElement[] | null[]>([]);
  const handleInputChange = (event) => {
    const { value } = event.target;
    setTypedWord(value);

    if (value === words[activeWordIndex][activeLetterIndex]) {
      // Move to the next word when the correct word is typed
      if (words[activeWordIndex].length - 1 === activeLetterIndex) {
        console.log("next word");
        onCorrectType(true);
        setActiveWordIndex((prevIndex) => prevIndex + 1);
        setActiveLetterIndex(0);
        setTypedWord(""); // Clear the typed word for the next input
      } else {
        setActiveLetterIndex((prevIndex) => prevIndex + 1);
        setTypedWord(""); // Clear the typed word for the next input
        console.log("correct");
        onCorrectType(true);
      }
    } else {
      console.log("not correct");
      setTypedWord("");
    }
  };
  const handleInputFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      console.log("clicked");
    }
  };
  onPassingPElement(paraRef);
  return (
    <>
      {words.map((word, index) => (
        <div
          onClick={handleInputFocus}
          className="flex m-1 my-1.5 snap-center text-text-secondary font-jetbrains"
          key={index}
        >
          {word.split("").map((letter, letterIndex) => (
            <p
              key={letterIndex}
              className={
                activeWordIndex === index && activeLetterIndex === letterIndex
                  ? "active"
                  : "not-active"
              }
              ref={(element) => {
                paraRef.current[index * words.length + letterIndex] = element;
              }}
            >
              {letter}
            </p>
          ))}
        </div>
      ))}
      <input
        ref={inputRef}
        type="text"
        value={typedWord}
        onChange={handleInputChange}
        style={{ top: "-100px" }}
        className="absolute"
      />
    </>
  );
};
export default TypingChecker;
