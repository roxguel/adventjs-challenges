import fixGiftList from "./solution.js";
import assert from "node:assert/strict"
import test from "node:test";

test('Test #1', (t) => {
    const result = fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball']);
    const expected = {
        missing: { ball: 1 },
        extra: { car: 1 }
    };
    assert.deepEqual(result, expected);
});

test('Test #2', (t) => {
    const result = fixGiftList(
        ['book', 'train', 'kite', 'train'],
        ['train', 'book', 'kite', 'ball', 'kite']
    );
    const expected = {
        missing: { ball: 1, kite: 1 },
        extra: { train: 1 }
    };
    assert.deepEqual(result, expected);
});

test('Test #3', (t) => {
    const result = fixGiftList(
        ['bear', 'bear', 'car'],
        ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
    );
    const expected = {
        missing: { puzzle: 1, car: 2 },
        extra: {}
    };
    assert.deepEqual(result, expected);
});

test('Test #4', (t) => {
    const result = fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear']);
    const expected = {
        missing: {},
        extra: {}
    };
    assert.deepEqual(result, expected);
});
