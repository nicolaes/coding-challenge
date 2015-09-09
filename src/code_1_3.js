'use strict';

/**
 * Compute the minimal link strength for the sub-chains of A.
 * If result[index] = value, then value represents the minimum of A.slice(1, index)
 *
 * @param A
 * @returns {number[]}
 */
function computeListOfMinimumStrengthsForSubChains(A) {
    var N = A.length,
        listOfMinimals = [0],
        lastMinimum, current;
    for (var i = 1; i <= N - 4; i++) {
        current = A[i];

        // First iteration
        if (i === 1) {
            listOfMinimals.push(current);
            lastMinimum = current;
            continue;
        }

        // Compute the minimum based on the last iteration
        if (current < lastMinimum) {
            listOfMinimals.push(current);
            lastMinimum = current;
        } else {
            listOfMinimals.push(lastMinimum);
        }
    }
    return listOfMinimals;
}

/**
 * Iterate through the initial list to find the pair with smallest cost
 *
 * @param A
 * @param listOfMinimalStrengths
 * @returns number
 */
function computeMinimumBreakingCost(A, listOfMinimalStrengths) {
    var N = A.length,
        minumumCost, lastCost, currentCost;
    for (var i = N - 2; i >= 3; i--) {
        if (i === N - 2) {
            minumumCost = lastCost = listOfMinimalStrengths[i - 2] + A[i];
            continue;
        }

        currentCost = listOfMinimalStrengths[i - 2] + A[i];
        if (currentCost < lastCost) {
            minumumCost = lastCost = currentCost;
        }
    }

    return minumumCost;
}

function solution(A) {
    var listOfMinimals = computeListOfMinimumStrengthsForSubChains(A);
    return computeMinimumBreakingCost(A, listOfMinimals);
}


var init = [5, 2, 4, 6, 3, 7];

var large = [],
    size = 100000, max = 1000000000;
for (var i = 0; i < size; i++) {
    var nr = Math.ceil(Math.random() * max);
    large.push(nr);
}

module.exports = solution(large);
