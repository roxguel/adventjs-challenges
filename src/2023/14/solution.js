/// Generated by ChatGTP
function maxGifts(houses) {
    let n = houses.length;
    if (n === 0) return 0;
    if (n === 1) return houses[0];

    let maxGiftsAtI = new Array(n).fill(0);
    maxGiftsAtI[0] = houses[0];
    maxGiftsAtI[1] = Math.max(houses[0], houses[1]);

    for (let i = 2; i < n; i++) {
        maxGiftsAtI[i] = Math.max(
            maxGiftsAtI[i - 1],
            houses[i] + maxGiftsAtI[i - 2]
        );
    }

    return maxGiftsAtI[n - 1];
}