/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
    let result = s;

    let newResult;

    do {
        newResult = result;

        for (let i = 1; i < newResult.length; i++) {
            if (newResult[i] === newResult[i - 1]) {
                result = newResult.substring(0, i - 1) + newResult.substring(i + 1);
            }
        }
    } while (newResult !== result);
    
    return result;
}


export default removeSnow;