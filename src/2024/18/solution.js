/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
function findInAgenda(agenda, phone) {
    const lines = agenda.split("\n");
    let recordFound = null;

    for (let line of lines) {
        const foundPhone = line.split(' ').find(x => x[0] === '+');

        if (foundPhone.includes(phone)) {
            if (recordFound !== null) return null;

            const startPos = line.indexOf('<') + 1;
            const endPos = line.indexOf('>', startPos);

            const name = line.substring(startPos, endPos);
            const address = line.replace(foundPhone, '')
                .replace(`<${name}>`, '')
                .trim();

            recordFound = { name, address, };
        }
    }

    return recordFound;
}

export default findInAgenda;