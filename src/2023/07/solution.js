export function drawGift(size, symbol) {
  const sizeAlt = size - 1;
  const cubeSize = size * 2 - 1;
  const cubeSizeAlt = cubeSize - 1;
  const edge = "#";
  const space = " ";

  let result = "";
  for (let i = 0; i < cubeSize; i++) {
    result += "".padStart(sizeAlt - i, space);
    const relativeSize = Math.min(i, cubeSize - i - 1) + sizeAlt;
    for (let j = 0; j < cubeSize; j++) {
      const drawEdge = (j < size && [0, cubeSizeAlt, sizeAlt].includes(i))
        || [0, sizeAlt].includes(j)
        || j === relativeSize;

      const drawFace = j < relativeSize;

      if (drawEdge) result += edge;
      else if (drawFace) result += symbol;
    }
    result += "\n";
  }

  return result;
}