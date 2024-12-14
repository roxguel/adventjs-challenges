import isRobotBack from "./solution.js";
import assert from "node:assert/strict"
import test from "node:test";

const tests = [
    ['R', [1, 0]],
    ['RL', true],
    ['RLUD', true],
    ['*RU', [2, 1]],
    ['R*U', [1, 2]],
    ['LLL!R', [-4, 0]],
    ['R?R', [1, 0]],
    ['U?D', true],
    ['R!L', [2, 0]],
    ['U!D', [0, 2]],
    ['R?L', true],
    ['U?U', [0, 1]],
    ['*U?U', [0, 2]],
    ['U?D?U', true],
    ['R!U?U', [1, 0]],
    ['UU!U?D', [0, 1]],
];

tests.forEach(([input, expected]) => {
    test(`isRobotBack('${input}') === ${expected}`, (t) => {
        assert.deepEqual(isRobotBack(input), expected)
    })
});


