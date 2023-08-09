import React, { useEffect, useRef } from "react";
import { useState } from "react";
import RandomWords from "./Components/RandomWords";
import MyComponent from "./Components/TheComponent";
import MovingBar from "./Components/MovingBar";

function App() {
  const screenWidth = window.innerWidth;
  console.log(screenWidth);
  return (
    <>
      <MyComponent />
      <MovingBar />{" "}
    </>
  );

  // const commonWords = [
  //   "the",
  //   "be",
  //   "to",
  //   "of",
  //   "and",
  //   "a",
  //   "in",
  //   "that",
  //   "have",
  //   "I",
  //   "it",
  //   "for",
  //   "not",
  //   "on",
  //   "with",
  //   "he",
  //   "as",
  //   "you",
  //   "do",
  //   "at",
  //   "this",
  //   "but",
  //   "his",
  //   "by",
  //   "from",
  //   "they",
  //   "we",
  //   "say",
  //   "her",
  //   "she",
  //   "or",
  //   "an",
  //   "will",
  //   "my",
  //   "one",
  //   "all",
  //   "would",
  //   "there",
  //   "their",
  //   "what",
  //   "so",
  //   "up",
  //   "out",
  //   "if",
  //   "about",
  //   "who",
  //   "get",
  //   "which",
  //   "go",
  //   "me",
  //   "when",
  //   "make",
  //   "can",
  //   "like",
  //   "time",
  //   "no",
  //   "just",
  //   "him",
  //   "know",
  //   "take",
  //   "person",
  //   "into",
  //   "year",
  //   "your",
  //   "good",
  //   "some",
  //   "could",
  //   "them",
  //   "see",
  //   "other",
  //   "than",
  //   "then",
  //   "now",
  //   "look",
  //   "only",
  //   "come",
  //   "its",
  //   "over",
  //   "think",
  //   "also",
  //   "back",
  //   "after",
  //   "use",
  //   "two",
  //   "how",
  //   "our",
  //   "work",
  //   "first",
  //   "well",
  // ];
  // return (
  //   <div className="flex h-screen w-screen p-[15%]">
  //     <div className="justify-center align-middle scrollable-div max-h-60 overflow-y-scroll border scroll border-gray-300 p-4 rounded-lg"></div>
  //   </div>
  // );
}

export default App;
