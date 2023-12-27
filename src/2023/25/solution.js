function travelDistance(map) {
    let result = 0;
    const positions = {};
    const santaPos = [0, 0];
    let x = 0, y = 0;

    for (let i in map) {
        if (map[i] === "\n") {
            x = -1;
            y++;
        } else if (map[i] === 'S') {
            santaPos[0] = y;
            santaPos[1] = x;
        } else if (map[i] !== '.') {
            positions[map[i]] = [y, x];
        }
        x++;
    }

    for (let i in positions) {
        result += Math.abs(santaPos[0] - positions[i][0]);
        result += Math.abs(santaPos[1] - positions[i][1]);
        santaPos[0] = positions[i][0];
        santaPos[1] = positions[i][1];
    }

    return result;
}