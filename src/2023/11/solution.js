function getIndexsForPalindrome(word) {
  const isPalindrome = (word) => word.split("").every((x, i) => x === word[word.length - i - 1]);
  if (isPalindrome(word)) return [];
  
  const wordArr = word.split("");
  for (let i = 0; i < wordArr.length; i++) {
      for (let j = i + 1; j < wordArr.length; j++) {
          const newWord = [...wordArr];
          newWord[i] = wordArr[j];
          newWord[j] = wordArr[i];
          if (isPalindrome(newWord.join(""))) return [i, j];
      }
  }

  return null;
}