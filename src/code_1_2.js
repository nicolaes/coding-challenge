'use strict';

function solution(A) {
    var N = A.length;

    // Single-element arrays are already sorted.
    // Any array with 2 elements can be sorted with a single swap.
    if (N <= 2) return true;

    // Sort the array and expect that a maximum of 2 elements are displaced
    var originalArray = A.slice(0); // keep a shallow copy, as sorting is done in-place
    A.sort(function (a, b) {
        return a - b;
    });
    var displacedElementsCount = 0;
    for (var i = 0; i < N; i++) {
        if (A[i] !== originalArray[i]) {
            displacedElementsCount++;

            // Quickly drop whenever the count is greater than 2
            if (displacedElementsCount > 2) return false;
        }
    }

    // If this line is executed, it means displacedElementsCount never reached a value over 2
    return true;
}


var init = [1, 5, 3, 3, 7];

module.exports = solution(init);
