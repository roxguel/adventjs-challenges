function findNaughtyStep(original, modified) {
  for (let i in modified) {
    if (modified[i] !== original[i]) {
      return modified.length > original.length ? modified[i] : original[i];
    }
  }
  return '';
}