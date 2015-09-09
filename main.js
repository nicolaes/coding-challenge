'use strict';

//demo: require('./src/demo'),
//mergeSort: require('./src/merge_sort'),
//bubbleSort: require('./src/bubble_sort'),
//alphaChallenge: require('./src/alpha')

var tests = [
    //'alpha',
    //'beta',
    //'code_1_1',
    //'code_1_2',
    'code_1_3'
];
var endResult = {};
for (var i = 0; i < tests.length; i++) {
    var test = tests[i];
    endResult[test] = {};

    var start = process.hrtime();
    endResult[test].result = require('./src/' + test);

    var elapsed = process.hrtime(start)[1] / 1000000;
    endResult[test].time = process.hrtime(start)[0] + " s , " + elapsed.toFixed(3) + " ms";
}


var fs = require('fs');
fs.writeFile('./output.json', JSON.stringify(endResult, null, 2));
