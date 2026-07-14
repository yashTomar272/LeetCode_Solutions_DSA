/**
 * @param {string} s
 * @return {string}
 */
 
var reverseOnlyLetters = function(s) {
   s = s.split("")

    const isLetter = ch => /[a-zA-Z]/.test(ch);

    let i = 0, j = s.length - 1;

    while (i < j) {
        if (!isLetter(s[i])) i++;
        else if (!isLetter(s[j])) j--;
        else {
            [s[i], s[j]] = [s[j], s[i]];
            i++;
            j--;
        }
    }

    return s.join("");
};