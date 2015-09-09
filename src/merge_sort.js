'use strict';

var init = [5,7,3,4,9,0,8,1,6,2];

function mergeSort(A) {
    if (!A instanceof Array) return [];
    if (A.length <= 1) return A;

    var middle = parseInt(A.length / 2);
    return merge(
        mergeSort(A.slice(0,middle)),
        mergeSort(A.slice(middle))
    );
};

function merge(A1, A2) {
    var merged = [],
        N = A1.length + A2.length;

    while (merged.length < N) {
        if (A1.length === 0) {
            merged.push(A2.shift());
        } else
        if (A2.length === 0) {
            merged.push(A1.shift());
        } else
        if (A1[0] < A2[0]) {
            merged.push(A1.shift());
        } else {
            merged.push(A2.shift());
        }
    }
    return merged;
};

module.exports = mergeSort(init);
