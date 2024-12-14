/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
    const startPos = filename.indexOf('_');
    const endPos = filename.lastIndexOf('.');
    return filename.substring(startPos + 1, endPos);
}

export default decodeFilename;