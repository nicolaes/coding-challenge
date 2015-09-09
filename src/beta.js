'use strict';

function solution(A) {
    if (A.length <= 1) return 0;

    var N = A.length;
    var intersections = 0;
    var maxReachList = [], allTimeMaxReach = 0;
    for (var i = 0; i < N; i++) {
        maxReachList.push(0);
    }

    for (var pos = 0; pos < N; pos++) {
        var rad = A[pos];

        var minReach = pos - rad;
        if (minReach < 0) minReach = 0;
        for (var i = minReach; i <= allTimeMaxReach; i++) {
            intersections += maxReachList[i];
            if (intersections > 10000000) return -1;
        }

        var maxReach = pos + rad;
        if (maxReach >= N) maxReach = N-1;
        if (maxReach > allTimeMaxReach) allTimeMaxReach = maxReach;
        maxReachList[maxReach]++;
    }

    return intersections;
}


var init = [1,5,2,1,4,0];

var large = [],
    size = 50000;
for (var i = 0; i < size; i++) {
    large.push(0);
}
//var large = [],
//    size = 10000, max = 214748;
//for (var i = 0; i < size; i++) {
//    var nr = Math.floor(Math.random() * max);
//    large.push(nr);
//}

module.exports = solution(large);
