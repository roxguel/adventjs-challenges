function checkIsValidCopy(original, copy) {
    const regex = /[#\+\:\.\s]/;
    return original.toLowerCase().split('')
        .every((x, i) => x === copy[i] || x !== " " && regex.test(copy[i]));
}