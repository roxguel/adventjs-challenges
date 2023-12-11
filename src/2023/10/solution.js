function createChristmasTree(ornaments, height) {
    let result = "";
    const SPACE = " "
    
    let k = 0;
    for (let i = 0; i < height; i++) {
        result += SPACE.repeat(height - i - 1);
        for (let j = 0; j <= i; j++) {
            result += ornaments[k++ % ornaments.length];
            if (j !== i) result += SPACE;
        }
        result += "\n"
    }
    
    return result + SPACE.repeat(height - 1) + "|\n";
}