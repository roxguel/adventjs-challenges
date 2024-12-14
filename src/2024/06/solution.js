/** @param {string[]} box
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
    for (let i in box) {
        let line = box[i].split('');
        for (let j in line) {
            let cell = line[j];
            if (cell === '*') {
                return j > 0 && j < line.length - 1
                    && i > 0 && i < box.length - 1;
            }
        }
    }
    return false;
}