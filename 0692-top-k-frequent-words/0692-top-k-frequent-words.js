/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let map = new Map();

    for (let word of words) {
        map.set(word, (map.get(word) || 0) + 1);
    }

    let arr = [...map];

    arr.sort((a, b) => {
        if (a[1] !== b[1]) {
            return b[1] - a[1];
        } else {
            return a[0] < b[0] ? -1 : 1;
        }
    });

    return arr.slice(0, k).map(item => item[0]);
};