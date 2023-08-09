import React, { useRef, useState } from "react";
interface Props {
  words: string[];
}
const WordList = ({ words }: Props) => {
  const wordRefs = useRef(words.map(() => React.createRef()));
  const [focusedIndex, setFocusedIndex] = useState(null);

  const handleFocus = (index) => {
    wordRefs.current[index].current.focus();
    setFocusedIndex(index);
  };

  return (
    <div>
      <ul>
        {words.map((word, index) => (
          <li key={index}>
            <input
              type="text"
              value={word}
              ref={wordRefs.current[index]}
              className={index === focusedIndex ? "text-red-500" : ""}
            />
          </li>
        ))}
      </ul>
      <button onClick={() => handleFocus(0)}>Focus first word</button>
      <button onClick={() => handleFocus(words.length - 1)}>
        Focus last word
      </button>
    </div>
  );
};

export default WordList;
