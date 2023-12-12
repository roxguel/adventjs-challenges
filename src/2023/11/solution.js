function getIndexsForPalindrome(word) {
  const length = word.length;
  const chars = word.split("");

  if (chars.join() === chars.reverse().join()) return [];
  chars.reverse();

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      [chars[i], chars[j]] = [chars[j], chars[i]];
      if (chars.every((x, i) => x === chars[length - i - 1])) return [i, j];
      [chars[i], chars[j]] = [chars[j], chars[i]];
    }
  }

  return null;
}