module.exports = {
    removeNewLines(str) {
        return str.replace(/(\r\n|\n|\r)/gm, " ");
    },
    fixAnchor(str) {
        return str.split('-').join('').toLowerCase()
    }
}