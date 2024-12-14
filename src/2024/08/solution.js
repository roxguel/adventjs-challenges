/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
    let output = '';

    for (let i = 0; i < indices.length; i++) {
        const pos = indices[i];

        output += ' '.repeat(indices.length - 1 - i);
      
        if (pos > 0) {
            output += '~'.repeat(indices[i]);
            if (indices[i] > 0) output += 'r';
            output += '~'.repeat(length - indices[i] - 1);
        } else if (pos < 0) {
            output += '~'.repeat(length + indices[i]);
            output += 'r';
            output += '~'.repeat(-1 * indices[i] - 1);
        } else {
            output += '~'.repeat(length);
        }

        output += ` /${i + 1}`;
        if (i < indices.length - 1) {
            output += '\n'
        }
    }

    return output;
}

export default drawRace;