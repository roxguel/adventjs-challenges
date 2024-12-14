/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
    let output = '';

    for (let i = 0; i < height; i++) {
        output += '_'.repeat(height - i - 1);
        output += ornament.repeat(i);
        output += ornament;
        output += ornament.repeat(i);
        output += '_'.repeat(height - i - 1);
        output += '\n';
    }

    output += '_'.repeat(height - 1);
    output += '#';
    output += '_'.repeat(height - 1);
    output += '\n';

    output += '_'.repeat(height - 1);
    output += '#';
    output += '_'.repeat(height - 1);

    return output;
}