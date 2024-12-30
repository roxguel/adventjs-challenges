import findMissingNumbers from "./solution.js";
import assert from "node:assert/strict"
import test from "node:test";

const tests = [
    [[1, 2, 4, 6], [3, 5]],
    [[4, 8, 7, 2], [1, 3, 5, 6]],
    [[3, 2, 1, 1], []],
    [[5, 5, 5, 3, 3, 2, 1], [4]],
];

tests.forEach(([input, expected]) => {
    test(`findMissingNumbers([${input}]) === [${expected}]`, (t) => {
        assert.deepEqual(findMissingNumbers(input), expected)
    })
});


