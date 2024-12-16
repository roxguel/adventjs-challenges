/**
  * @param {Array<Object>} data
  * @returns {string}
  */
function drawTable(data) {
    let output = "";

    if (data.length === 0) return "";

    const headers = Object.keys(data[0]);
    const colLen = Object.fromEntries(headers.map((key) => ([key, key.length])))

    for (let row of data) {
        for (let [key, value] of Object.entries(row)) {
            colLen[key] = Math.max(colLen[key], String(value).length);
        }
    }

    for (let header of headers) {
        output += '+' + '-'.repeat(colLen[header] + 2);
    }
    output += '+\n';
    for (let header of headers) {
        const headerCapitalized = header[0].toUpperCase() + header.substring(1);
        const repeatLength = colLen[header] - header.length;
        output += '|' + ` ${headerCapitalized}${' '.repeat(repeatLength)} `;
    }
    output += '|\n';
    for (let header of headers) {
        output += '+' + '-'.repeat(colLen[header] + 2);
    }
    output += '+\n';

    for (let row of data) {
        for (let header of headers) {
            const repeatLength = colLen[header] - String(row[header]).length;
            output += '|' + ` ${row[header]}${' '.repeat(repeatLength)} `;
        }
        output += '|\n';
    }
    for (let header of headers) {
        output += '+' + '-'.repeat(colLen[header] + 2);
    }
    output += '+';

    return output;
}

export default drawTable;