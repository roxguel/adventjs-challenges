/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
    /**
     * @type {{ size: number, type: 'I' | 'R' }[]} pairs
     */
    let pairs = [];
    const results = [];

    for (let shoe of shoes) {
        const pairIndex = pairs.findIndex(x =>
            x.size === shoe.size && x.type !== shoe.type
        );

        if (pairIndex > -1) {
            pairs.splice(pairIndex, 1)
            results.push(shoe.size)
        } else {
            pairs.push(shoe);
        }
    }

    return results;
}