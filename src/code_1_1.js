'use strict';

/**
 * Should contain at least an upper case character and no digits.
 * Assuming only alphanumeric characters.
 *
 * @param string
 * @return boolean Returns true if the string adheres to the rules
 */
function validateString(string) {
    if (/^[a-zA-Z]+$/.test(string) && /[A-Z]+/.test(string)) {
        return true;
    } else {
        return false;
    }
}

function solution(S) {
    var N = S.length;

    // Iterate over all sub-strings, including the initial string
    var maxLength = 0, // the length of longest valid string
        substring;
    for (var i = 0; i < N; i++) {
        for (var j = N; j > i; j--) {
            substring = S.slice(i, j);
            if (validateString(substring)) {
                if (substring.length > maxLength) maxLength = substring.length;
            }
        }
    }

    return (maxLength > 0) ? maxLength : -1;
}


var init = 'a0Ba';


module.exports = solution(init);
