function organizeGifts(gifts) {
    let result = "";

    const arr = gifts.split(/([\d]+[\w])/);
    for (let el of arr) {
        if (el.length > 0) {
            const [_, count, gift] = el.split(/([\d]+)([\w])/);
            let remaining = Number(count);
            if (remaining >= 50) {
                result += `[${gift}]`.repeat(remaining / 50);
                remaining = remaining % 50;
            }
            if (remaining >= 10) {
                result += `{${gift}}`.repeat(remaining / 10);
                remaining = remaining % 10;
            }
            if (remaining > 0) {
                result += `(${gift.repeat(remaining)})`;
                remaining = 0;
            }
        }
    }

    return result;
}