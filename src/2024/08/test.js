import drawRace from "./solution.js";
import assert from "node:assert/strict"
import test from "node:test";

test('Test #1', (t) => {
    const expected = '  ~~~~~~~~~~ /1\n ~~~~~r~~~~ /2\n~~~~~~~r~~ /3';
    assert.equal(drawRace([0, 5, -3], 10), expected);
});

test('Test #2', (t) => {
    const expected = '   ~~r~~~~~ /1\n  ~~~~~~~r /2\n ~~~~~~~~ /3\n~~~~~r~~ /4';
    assert.equal(drawRace([2, -1, 0, 5], 8), expected);
});

test('Test #3', (t) => {
    const expected = '  ~~~r~~~~~~~~ /1\n ~~~~~~~r~~~~ /2\n~~~~~~~~~~r~ /3';
    assert.equal(drawRace([3, 7, -2], 12), expected);
});
