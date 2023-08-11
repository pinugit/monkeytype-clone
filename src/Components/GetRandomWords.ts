const getRandomWords = (numWords: number, words) => {
  const result = [""];
  for (let i = 0; i < numWords; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    result.push(words[randomIndex]);
    
  }
  return result.splice(1);
};

export default getRandomWords;