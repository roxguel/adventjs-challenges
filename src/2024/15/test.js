import drawTable from "./solution.js";
import assert from "node:assert/strict"
import test from "node:test";

// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+
test('Test #1', (t) => {
    const result = drawTable([
        { name: 'Alice', city: 'London' },
        { name: 'Bob', city: 'Paris' },
        { name: 'Charlie', city: 'New York' }
    ]);
    const expected = "+---------+----------+\n| Name    | City     |\n+---------+----------+\n| Alice   | London   |\n| Bob     | Paris    |\n| Charlie | New York |\n+---------+----------+";
    assert.equal(result, expected);
});

// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+
test('Test #2', (t) => {
    const result = drawTable([
        { gift: 'Doll', quantity: 10 },
        { gift: 'Book', quantity: 5 },
        { gift: 'Music CD', quantity: 1 }
    ]);
    const expected = "+----------+----------+\n| Gift     | Quantity |\n+----------+----------+\n| Doll     | 10       |\n| Book     | 5        |\n| Music CD | 1        |\n+----------+----------+";
    assert.equal(result, expected);

});