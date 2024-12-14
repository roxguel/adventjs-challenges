/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
    const result = {};

    for (let item of inventory) {
        if (result[item.category]) {
            if (result[item.category][item.name]) {
                result[item.category][item.name] += item.quantity;
            } else {
                result[item.category][item.name] = item.quantity;
            }
        } else {
            result[item.category] = { [item.name]: item.quantity }
        }
    }

    return result;
}