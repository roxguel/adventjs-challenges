/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
    reindeer.sort((a, b) => a - b);
    stables.sort((a, b) => a - b);
    let movementsCount = 0;
    for (let i = 0; i < reindeer.length; i++) {
        movementsCount += Math.abs(stables[i] - reindeer[i]);
    }

    return movementsCount
}

export default minMovesToStables;