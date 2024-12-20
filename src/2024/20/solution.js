/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
    const missing = {};
    const extra = {};
    const lastFoundGiftsIndex1 = {};
    const lastFoundGiftsIndex2 = {};

    for (let gift of expected) {
        const lastIndex = lastFoundGiftsIndex1[gift] ?? 0;
        const foundIndex = received.indexOf(gift, lastIndex);
        if (foundIndex >= 0) {
            lastFoundGiftsIndex1[gift] = foundIndex + 1;
        } else {
            if (!missing[gift]) missing[gift] = 0;
            missing[gift]++;
        }
    }

    for (let gift of received) {
        const lastIndex = lastFoundGiftsIndex2[gift] ?? 0;
        const foundIndex = expected.indexOf(gift, lastIndex);
        if (foundIndex >= 0) {
            lastFoundGiftsIndex2[gift] = foundIndex + 1;
        } else {
            if (!extra[gift]) extra[gift] = 0;
            extra[gift]++;
        }
    }
    
    return { missing, extra };
}

export default fixGiftList;
