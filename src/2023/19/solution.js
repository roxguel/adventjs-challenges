function revealSabotage(store) {
    const result = Array(store.length);

    for (let i = 0; i < store.length; i++) {
        result[i] = Array(store[i].length);
        for (let j = 0; j < store[i].length; j++) {
            if (store[i][j] === "*") {
                result[i][j] = "*";
                continue;
            }

            result[i][j] = 0;
            for (let ii = -1; ii < 2; ii++) {
                for (let jj = -1; jj < 2; jj++) {
                    if ((ii !== 0 || jj !== 0) && store[i + ii]?.[j + jj] === '*') {
                        result[i][j]++;
                    }
                }
            }
            result[i][j] = result[i][j] > 0 ? "" + result[i][j] : " ";
        }
    }

    return result;
}