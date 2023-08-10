import React, { useState } from "react";
import RandomWords from "./Components/RandomWords";
import MovingBar from "./Components/MovingBar";
interface coordinates {
  xfrom: number;
  xto: number;
  y: number;
}

function App() {
  const commonWords = [
    "the",
    "be",
    "to",
    "of",
    "and",
    "a",
    "in",
    "that",
    "have",
    "I",
    "it",
    "for",
    "not",
    "on",
    "with",
    "he",
    "as",
    "you",
    "do",
    "at",
    "this",
    "but",
    "his",
    "by",
    "from",
    "they",
    "we",
    "say",
    "her",
    "she",
    "or",
    "an",
    "will",
    "my",
    "one",
    "all",
    "would",
    "there",
    "their",
    "what",
    "so",
    "up",
    "out",
    "if",
    "about",
    "who",
    "get",
    "which",
    "go",
    "me",
    "when",
    "make",
    "can",
    "like",
    "time",
    "no",
    "just",
    "him",
    "know",
    "take",
    "person",
    "into",
    "year",
    "your",
    "good",
    "some",
    "could",
    "them",
    "see",
    "other",
    "than",
    "then",
    "now",
    "look",
    "only",
    "come",
    "its",
    "over",
    "think",
    "also",
    "back",
    "after",
    "use",
    "two",
    "how",
    "our",
    "work",
    "first",
    "well",
  ];
  const [count, setCount] = useState(0);
  const [currentWordCoordinate, setCurrentWordCoordinate] =
    useState<coordinates>();
  const handleClick = (wordCoordinates) => {
    setCount(count + 1);
    console.log(wordCoordinates);
    setCurrentWordCoordinate(wordCoordinates);
  };
  return (
    <>
      {currentWordCoordinate?.xfrom && (
        <div className="absolute ">
          <MovingBar
            xFrom={currentWordCoordinate?.xfrom}
            xTo={currentWordCoordinate?.xto}
            y={currentWordCoordinate?.y}
          />
        </div>
      )}
      <RandomWords
        words={commonWords}
        numWords={100}
        coordinateIndex={count}
        onButtonClick={handleClick}
      />
    </>
  );
}

export default App;
