function drawGift(size, symbol) {
  const edge = '#';
  const space = ' ';
  const cubeSize = size * 2 - 1;
  const halfSize = size - 1;

  let result = '';

  for (let i = 0; i < cubeSize; i++) {
    const isEdgeRow = [0, cubeSize - 1].includes(i);
    const rowDepth = Math.min(i, cubeSize - i - 1);
    const rowLength = rowDepth + size;

    result += i < size ? space.repeat(halfSize - rowDepth) : '';

    for (let j = 0; j < cubeSize; j++) {
      if (j < rowLength) {
        const isBorderOrCorner = isEdgeRow
          || (i === halfSize && j < size)
          || [0, halfSize, rowLength - 1].includes(j);
        result += isBorderOrCorner ? edge : symbol;
      }
    }
    result += '\n';
  }

  return result;
}