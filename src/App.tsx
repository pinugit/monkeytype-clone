import React, { useState } from "react";
import RandomWords from "./Components/RandomWords";
import MovingBar from "./Components/MovingBar";
interface cordinates {
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
  const [currentWordCordinate, setCurrentWordCordinate] =
    useState<cordinates>();
  const handleClick = (wordCordinates) => {
    setCount(count + 1);
    console.log(wordCordinates);
    setCurrentWordCordinate(wordCordinates);
  };
  return (
    <>
      {currentWordCordinate?.xfrom && (
        <div className="absolute ">
          <MovingBar
            xFrom={currentWordCordinate?.xfrom}
            xTo={currentWordCordinate?.xto}
            y={currentWordCordinate?.y}
          />
        </div>
      )}
      <RandomWords
        words={commonWords}
        numWords={100}
        cordinateIndex={count}
        onButoonClick={handleClick}
      />
    </>
  );
}

export default App;
