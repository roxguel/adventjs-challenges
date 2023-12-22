function distributeGifts(weights) {
    const result = [];

    let i = -1;
    while (++i < weights.length) {
        result[i] = [];
        let j = -1;
        while (++j < weights[i].length) {
            let divisor = 0;
            result[i][j] = 0;
            if (weights[i][j] > 0) {
                result[i][j] += weights[i][j];
                divisor++;
            }
            if (weights[i + 1]?.[j] > 0) {
                result[i][j] += weights[i + 1][j];
                divisor++;
            }
            if (weights[i - 1]?.[j] > 0) {
                result[i][j] += weights[i - 1][j];
                divisor++;
            }
            if (weights[i][j + 1] > 0) {
                result[i][j] += weights[i][j + 1];
                divisor++;
            }
            if (weights[i][j - 1] > 0) {
                result[i][j] += weights[i][j - 1];
                divisor++;
            }
            result[i][j] = Math.round(result[i][j] / divisor)
        }
    }

    return result;
}