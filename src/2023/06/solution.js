function maxDistance(movements) {
  let right = 0, left = 0, both = 0;

  for (let move of movements) {
    if (move === '>') right++;
    else if (move === '<') left++;
    else if (move === '*') both++;
  }

  return Math.abs(right - left) + both;
}