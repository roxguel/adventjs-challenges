/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
    const length = names.toSorted((a, b) => b.length - a.length)[0].length;

    let output = "*".repeat(length + 4) + "\n";

    names.forEach(x => output += "* " + x + " ".repeat(length - x.length) + " *\n");

    output += "*".repeat(length + 4);

    return output;
}