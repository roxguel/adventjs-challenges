function drawClock(time) {
    const digits = {
        0: [
            ["*", "*", "*"],
            ["*", " ", "*"],
            ["*", " ", "*"],
            ["*", " ", "*"],
            ["*", " ", "*"],
            ["*", " ", "*"],
            ["*", "*", "*"],
        ],
        1: [
            [" ", " ", "*"],
            [" ", " ", "*"],
            [" ", " ", "*"],
            [" ", " ", "*"],
            [" ", " ", "*"],
            [" ", " ", "*"],
            [" ", " ", "*"],
        ],
        2: [
            ["*", "*", "*"],
            [" ", " ", "*"],
            [" ", " ", "*"],
            ["*", "*", "*"],
            ["*", " ", " "],
            ["*", " ", " "],
            ["*", "*", "*"],
        ],
        3: [
            ["*", "*", "*"],
            [" ", " ", "*"],
            [" ", " ", "*"],
            ["*", "*", "*"],
            [" ", " ", "*"],
            [" ", " ", "*"],
            ["*", "*", "*"],
        ],
        4: [
            ["*", " ", "*"],
            ["*", " ", "*"],
            ["*", " ", "*"],
            ["*", "*", "*"],
            [" ", " ", "*"],
            [" ", " ", "*"],
            [" ", " ", "*"],
        ],
        5: [
            ["*", "*", "*"],
            ["*", " ", " "],
            ["*", " ", " "],
            ["*", "*", "*"],
            [" ", " ", "*"],
            [" ", " ", "*"],
            ["*", "*", "*"],
        ],
        6: [
            ["*", "*", "*"],
            ["*", " ", " "],
            ["*", " ", " "],
            ["*", "*", "*"],
            ["*", " ", "*"],
            ["*", " ", "*"],
            ["*", "*", "*"],
        ],
        7: [
            ["*", "*", "*"],
            [" ", " ", "*"],
            [" ", " ", "*"],
            [" ", " ", "*"],
            [" ", " ", "*"],
            [" ", " ", "*"],
            [" ", " ", "*"],
        ],
        8: [
            ["*", "*", "*"],
            ["*", " ", "*"],
            ["*", " ", "*"],
            ["*", "*", "*"],
            ["*", " ", "*"],
            ["*", " ", "*"],
            ["*", "*", "*"],
        ],
        9: [
            ["*", "*", "*"],
            ["*", " ", "*"],
            ["*", " ", "*"],
            ["*", "*", "*"],
            [" ", " ", "*"],
            [" ", " ", "*"],
            ["*", "*", "*"],
        ],
    };

    return [
        [
            digits[time[0]][0][0],
            digits[time[0]][0][1],
            digits[time[0]][0][2],
            " ",
            digits[time[1]][0][0],
            digits[time[1]][0][1],
            digits[time[1]][0][2],
            " ",
            " ",
            " ",
            digits[time[3]][0][0],
            digits[time[3]][0][1],
            digits[time[3]][0][2],
            " ",
            digits[time[4]][0][0],
            digits[time[4]][0][1],
            digits[time[4]][0][2],
        ],
        [
            digits[time[0]][1][0],
            digits[time[0]][1][1],
            digits[time[0]][1][2],
            " ",
            digits[time[1]][1][0],
            digits[time[1]][1][1],
            digits[time[1]][1][2],
            " ",
            " ",
            " ",
            digits[time[3]][1][0],
            digits[time[3]][1][1],
            digits[time[3]][1][2],
            " ",
            digits[time[4]][1][0],
            digits[time[4]][1][1],
            digits[time[4]][1][2],
        ],
        [
            digits[time[0]][2][0],
            digits[time[0]][2][1],
            digits[time[0]][2][2],
            " ",
            digits[time[1]][2][0],
            digits[time[1]][2][1],
            digits[time[1]][2][2],
            " ",
            "*",
            " ",
            digits[time[3]][2][0],
            digits[time[3]][2][1],
            digits[time[3]][2][2],
            " ",
            digits[time[4]][2][0],
            digits[time[4]][2][1],
            digits[time[4]][2][2],
        ],
        [
            digits[time[0]][3][0],
            digits[time[0]][3][1],
            digits[time[0]][3][2],
            " ",
            digits[time[1]][3][0],
            digits[time[1]][3][1],
            digits[time[1]][3][2],
            " ",
            " ",
            " ",
            digits[time[3]][3][0],
            digits[time[3]][3][1],
            digits[time[3]][3][2],
            " ",
            digits[time[4]][3][0],
            digits[time[4]][3][1],
            digits[time[4]][3][2],
        ],
        [
            digits[time[0]][4][0],
            digits[time[0]][4][1],
            digits[time[0]][4][2],
            " ",
            digits[time[1]][4][0],
            digits[time[1]][4][1],
            digits[time[1]][4][2],
            " ",
            "*",
            " ",
            digits[time[3]][4][0],
            digits[time[3]][4][1],
            digits[time[3]][4][2],
            " ",
            digits[time[4]][4][0],
            digits[time[4]][4][1],
            digits[time[4]][4][2],
        ],
        [
            digits[time[0]][5][0],
            digits[time[0]][5][1],
            digits[time[0]][5][2],
            " ",
            digits[time[1]][5][0],
            digits[time[1]][5][1],
            digits[time[1]][5][2],
            " ",
            " ",
            " ",
            digits[time[3]][5][0],
            digits[time[3]][5][1],
            digits[time[3]][5][2],
            " ",
            digits[time[4]][5][0],
            digits[time[4]][5][1],
            digits[time[4]][5][2],
        ],
        [
            digits[time[0]][6][0],
            digits[time[0]][6][1],
            digits[time[0]][6][2],
            " ",
            digits[time[1]][6][0],
            digits[time[1]][6][1],
            digits[time[1]][6][2],
            " ",
            " ",
            " ",
            digits[time[3]][6][0],
            digits[time[3]][6][1],
            digits[time[3]][6][2],
            " ",
            digits[time[4]][6][0],
            digits[time[4]][6][1],
            digits[time[4]][6][2],
        ],
    ];
}