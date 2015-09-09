'use strict';

var init = [5,7,3,4,9,0,8,1,6,2];

function bubbleSort(A) {
    var toFixIndex = A.length - 1;
    while (toFixIndex > 0) {
        for (var i = 0; i < toFixIndex; i++) {
            if (A[i] > A[i+1]) {
                var acc = A[i];
                A[i] = A[i+1];
                A[i+1] = acc;
            }
        }
        toFixIndex--;
    }
    return A;
}

module.exports = bubbleSort(init);
