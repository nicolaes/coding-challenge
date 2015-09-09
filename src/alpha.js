'use strict';

var init = [2,2,1,0,1];

function alpha(A) {
    if (A.length === 1) return 0;

    var appearances = {}, p = 0;
    for (var i = 0; i < A.length; i++) {
        if (typeof appearances[A[i]] === 'undefined') {
            p = i;
            appearances[A[i]] = true;
        }
    }

    return p;
}


module.exports = alpha(init);
