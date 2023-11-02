const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

var matrix1 = [
    [Infinity,5,Infinity,Infinity,Infinity,Infinity,Infinity,Infinity],
    [Infinity,Infinity,4,Infinity,Infinity,Infinity,Infinity,Infinity],
    [Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,9,Infinity],
    [Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,8],
    [Infinity,Infinity,8,Infinity,Infinity,Infinity,Infinity,Infinity],
    [Infinity,4,Infinity,Infinity,Infinity,Infinity,1,Infinity],
    [Infinity,Infinity,Infinity,Infinity,Infinity,4,Infinity,4],
    [Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,1,Infinity]
]

var expected1 = [
    [ 0, 5, 9, Infinity, Infinity, 22, 18, 22 ],
    [ Infinity, 0, 4, Infinity, Infinity, 17, 13, 17 ],
    [ Infinity, 17, 0, Infinity, Infinity, 13, 9, 13 ],
    [ Infinity, 17, 21, 0, Infinity, 13, 9, 8 ],
    [ Infinity, 25, 8, Infinity, 0, 21, 17, 21 ],
    [ Infinity, 4, 8, Infinity, Infinity, 0, 1, 5 ],
    [ Infinity, 8, 12, Infinity, Infinity, 4, 0, 4 ],
    [ Infinity, 9, 13, Infinity, Infinity, 5, 1, 0 ]
]

var matrix2 = [
    [Infinity,1,3,Infinity,8,Infinity,Infinity,Infinity],
    [Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,3,Infinity],
    [Infinity,Infinity,Infinity,Infinity,7,1,Infinity,Infinity],
    [Infinity,7,Infinity,Infinity,Infinity,Infinity,Infinity,Infinity],
    [Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,9,9],
    [Infinity,Infinity,Infinity,5,Infinity,Infinity,2,Infinity],
    [Infinity,Infinity,1,Infinity,Infinity,Infinity,Infinity,Infinity],
    [Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,Infinity]
]

var expected2 = [
    [0,1,3,9,8,4,4,17],
    [Infinity,0,4,10,11,5,3,20],
    [Infinity,13,0,6,7,1,3,16],
    [Infinity,7,11,0,18,12,10,27],
    [Infinity,23,10,16,0,11,9,9],
    [Infinity,12,3,5,10,0,2,19],
    [Infinity,14,1,7,8,2,0,17],
    [Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,Infinity,0]
];

var matrix3 = [[Infinity]]
var expected3 = [[0]]


assert(JSON.stringify(allPairsShortestPaths(matrix1)) == JSON.stringify(expected1)) 
assert(JSON.stringify(allPairsShortestPaths(matrix2)) == JSON.stringify(expected2)) 
assert(JSON.stringify(allPairsShortestPaths(matrix3)) == JSON.stringify(expected3)) 





