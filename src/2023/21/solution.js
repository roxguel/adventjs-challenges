function findBalancedSegment(message) {
    let result = [];

    let mostLength = 0;
    for (let i = 0; i < message.length; i++) {
        let zeros = 0, ones = 0;
        for (let j = i; j < message.length; j++) {
            if (message[j] === 0) zeros++;
            else ones++;

            if (zeros === ones && zeros > mostLength) {
                mostLength = zeros;
                result = [i, j];
            }
        }
    }

    return result;
}