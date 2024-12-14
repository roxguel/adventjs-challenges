/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
    const prices = {
        "*": 1,
        "o": 5,
        "^": 10,
        "#": 50,
        "@": 100,
    };

    const length = ornaments.split("").length;

    let i = length - 1;
    let amount = prices[ornaments[i]];

    do {
        const current = ornaments[--i];
        const previous = ornaments[i + 1];

        if (prices[current] < prices[previous]) amount -= prices[current];
        else amount += prices[current];

        if (Number.isNaN(amount)) return;
    } while (i > 0);

    return amount;
}

export default calculatePrice;