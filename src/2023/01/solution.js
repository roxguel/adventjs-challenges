function findFirstRepeated(gifts) {
  let out = -1;
  let numI = Infinity;
  for (let i = 0; i < gifts.length; i++) {
    const index = gifts.indexOf(gifts[i], i + 1);
    if (index >= 0 && index < numI) {
      numI = index;
      out = gifts[i];
    }
  }
  return out;
}
