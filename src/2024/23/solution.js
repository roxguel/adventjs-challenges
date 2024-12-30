/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
    const max = Math.max(...nums);
    const missing = [];

    for (let i = 1; i <= max; i++) {
        if (!nums.includes(i)) {
            missing.push(i);
        }
    }
    
    return missing;
}

export default findMissingNumbers;