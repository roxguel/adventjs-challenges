import findInAgenda from "./solution.js";
import assert from "node:assert/strict"
import test from "node:test";

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`;

test('Test #1', (t) => {
    const result = findInAgenda(agenda, '34-600-123-456');
    const expected = { name: "Juan Perez", address: "Calle Gran Via 12" };
    assert.deepEqual(result, expected);
})

test('Test #2', (t) => {
    const result = findInAgenda(agenda, '600-987');
    const expected = { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" };
    assert.deepEqual(result, expected);
})

test('Test #3', (t) => {
    const result = findInAgenda(agenda, '111');
    const expected = null;
    assert.deepEqual(result, expected);
})

test('Test #4', (t) => {
    const result = findInAgenda(agenda, '1');
    const expected = null;
    assert.deepEqual(result, expected);
})