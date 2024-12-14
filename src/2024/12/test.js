import calculatePrice from "./solution.js";
import assert from "node:assert/strict"
import test from "node:test";

const tests = [
    ['***', 3, '1 + 1 + 1'],
    ['*o', 4, '5 - 1'],
    ['o*', 6, '5 + 1'],
    ['*o*', 5, '-1 + 5 + 1'],
    ['**o*', 6, '1 - 1 + 5 + 1'],
    ['o***', 8, '5 + 3'],
    ['*o@', 94, '-5 - 1 + 100'],
    ['*#', 49, '-1 + 50'],
    ['@@@', 300, '100 + 100 + 100'],
    ['#@', 50, '-50 + 100'],
    ['#@Z', undefined, 'Z es desconocido'],
];

tests.forEach(([input, expected, comments]) => {
    test(`calculatePrice('${input}') === ${expected} (${comments})`, (t) => {
        assert.equal(calculatePrice(input), expected)
    })
});