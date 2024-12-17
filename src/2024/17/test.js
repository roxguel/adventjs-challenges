import detectBombs from "./solution.js";
import assert from "node:assert/strict"
import test from "node:test";

test('Test #1', (t) => {
    const result = detectBombs([
        [true, false, false],
        [false, true, false],
        [false, false, false]
    ]);

    const expected = [
        [1, 2, 1],
        [2, 1, 1],
        [1, 1, 1]
    ];

    assert.deepEqual(result, expected);
});

test('Test #2', (t) => {
    const result = detectBombs([
        [true, false],
        [false, false]
    ]);

    const expected = [
        [0, 1],
        [1, 1]
    ];

    assert.deepEqual(result, expected);
});

test('Test #3', (t) => {
    const result = detectBombs([
        [true, true],
        [false, false],
        [true, true]
    ]);

    const expected = [
      [1, 1],
      [4, 4],
      [1, 1]
    ];

    assert.deepEqual(result, expected);
});