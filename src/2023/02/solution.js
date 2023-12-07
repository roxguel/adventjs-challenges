function manufacture(gifts, materials) {
    const out = [];
    for (let gift of gifts) {
        let allContains = true;
        for (let char of gift.split('')) {
            if (!materials.includes(char)) {
                allContains = false;
            }
        }
        if (allContains) {
            out.push(gift);
        }
    }
    return out;
}