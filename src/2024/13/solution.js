/** @param {string} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
    const currentPos = [0, 0];
    const history = [];
    const directions = { U: [0, 1], R: [1, 0], D: [0, -1], L: [-1, 0] };
    const opposite = { U: 'D', R: 'L', D: 'U', L: 'R' };

    let nextModifier = '';
    for (let move of moves) {
        if (move === 'U' || move === 'R' || move === 'D' || move === 'L') {
            if (nextModifier === '*') {
                history.push(move);
                currentPos[0] += directions[move][0] * 2;
                currentPos[1] += directions[move][1] * 2;
            } else if (nextModifier === '!') {
                history.push(opposite[move]);
                currentPos[0] -= directions[move][0];
                currentPos[1] -= directions[move][1];
            } else if (nextModifier === '?') {
                if (history.indexOf(move) < 0) {
                    history.push(move);
                    currentPos[0] += directions[move][0];
                    currentPos[1] += directions[move][1];
                }
            } else {
                history.push(move);
                currentPos[0] += directions[move][0];
                currentPos[1] += directions[move][1];
            }

            nextModifier = '';
        } else {
            nextModifier = move;
        }
    }

    if (currentPos[0] === 0 && currentPos[1] === 0) return true;
    return currentPos;
}

export default isRobotBack;