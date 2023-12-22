function compile(code) {
    let result = 0;
    let i = -1;
    let percentIndex = -1;
    let skip = false;
    while (i++ < code.length - 1) {
        switch (true) {
            case code[i] === "?":
                skip = false;
                break;
            case skip: break;
            case code[i] === "+":
                result++;
                break;
            case code[i] === "-":
                result--;
                break;
            case code[i] === "*":
                result *= 2;
                break;
            case code[i] === "%":
                percentIndex = i;
                break;
            case code[i] === "¿":
                skip = result <= 0;
                break;
            case code[i] === "<" && percentIndex >= 0:
                [i, percentIndex] = [percentIndex, -1]
                break;
        }
    }

    return result;
}