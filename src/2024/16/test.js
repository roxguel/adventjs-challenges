import removeSnow from "./solution.js";
import assert from "node:assert/strict"
import test from "node:test";

test('Test #1: zxxzoz -> oz', (t) => {
    assert.equal(removeSnow('zxxzoz'), 'oz');
});

test('Test #2: abcdd -> abc', (t) => {
    assert.equal(removeSnow('abcdd'), 'abc');
});

test('Test #3: zzz -> z', (t) => {
    assert.equal(removeSnow('zzz'), 'z');
});

test('Test #4: a -> a', (t) => {
    assert.equal(removeSnow('a'), 'a');
});
