import React, { useRef, useState } from "react";
import commonWords from "./WordList";
import getRandomWords from "./GetRandomWords";

const TypingChecker = () => {
  const [words, setWords] = useState(getRandomWords(10, commonWords));
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [activeLetterIndex, setActiveLetterIndex] = useState(0);
  const [typedWord, setTypedWord] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setTypedWord(value);

    if (value === words[activeWordIndex][activeLetterIndex]) {
      // Move to the next word when the correct word is typed
      if (words[activeWordIndex].length - 1 === activeLetterIndex) {
        console.log("next word");
        setActiveWordIndex((prevIndex) => prevIndex + 1);
        setActiveLetterIndex(0);
        setTypedWord(""); // Clear the typed word for the next input
      } else {
        setActiveLetterIndex((prevIndex) => prevIndex + 1);
        setTypedWord(""); // Clear the typed word for the next input
        console.log("correct");
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

  return (
    <div onClick={handleInputFocus}>
      {words.map((word, index) => (
        <li className="flex" key={index}>
          {word.split("").map((letter, letterIndex) => (
            <p
              key={letterIndex}
              className={
                activeWordIndex === index && activeLetterIndex === letterIndex
                  ? "active"
                  : "not-active"
              }
            >
              {letter}
            </p>
          ))}
        </li>
      ))}
      <input
        ref={inputRef}
        type="text"
        value={typedWord}
        onChange={handleInputChange}
        style={{ top: "-100px" }}
        className="absolute"
      />
    </div>
  );
};
export default TypingChecker;
