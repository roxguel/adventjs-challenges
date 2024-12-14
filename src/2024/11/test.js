import decodeFilename from "./solution.js";
import assert from "node:assert/strict"
import test from "node:test";

test('Test #1', (t) => {
    assert.equal(
        decodeFilename('2023122512345678_sleighDesign.png.grinchwa'), 
        "sleighDesign.png"
    );
});

test('Test #2', (t) => {
    assert.equal(
        decodeFilename('42_chimney_dimensions.pdf.hack2023'), 
        "chimney_dimensions.pdf"
    );
});

test('Test #3', (t) => {
    assert.equal(
        decodeFilename('987654321_elf-roster.csv.tempfile'), 
        "elf-roster.csv"
    );
});