/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
  const result = [];

  for (let i = 0; i < grid.length; i++) {
    result.push([]);
    for (let j = 0; j < grid[i].length; j++) {
      result[i].push(0);
      if (grid[i - 1]?.[j - 1]) result[i][j] += 1;
      if (grid[i - 1]?.[j]) result[i][j] += 1;
      if (grid[i - 1]?.[j + 1]) result[i][j] += 1;
      if (grid[i][j - 1]) result[i][j] += 1;
      if (grid[i][j + 1]) result[i][j] += 1;
      if (grid[i + 1]?.[j - 1]) result[i][j] += 1;
      if (grid[i + 1]?.[j]) result[i][j] += 1;
      if (grid[i + 1]?.[j + 1]) result[i][j] += 1;
    }
  }

  return result;
}

export default detectBombs;