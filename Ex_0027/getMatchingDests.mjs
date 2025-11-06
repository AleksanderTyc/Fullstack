function getMatchingDests(arr, keyword) {
    return arr.filter(
        (dest) => { return dest.description.toUpperCase().includes(keyword.toUpperCase()); }
    );
}

export { getMatchingDests };
// module.exports = { getMatchingDests };
