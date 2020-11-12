'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function balancedSums(arr) {
    let right = arr;
    let left = [];
    let rightSum = arr.reduce((total, n) => total + n, 0);
    let leftSum = 0;
    let found = false;

    for (let i = arr.length - 1; i >= 0; i--) {
        let elem = right.pop();
        rightSum -= elem;

        if (rightSum === leftSum) {
            found = true;
            break;
        }

        left.push(elem);
        leftSum += elem;
    }

    return found ? 'YES' : 'NO';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const T = parseInt(readLine().trim(), 10);

    for (let TItr = 0; TItr < T; TItr++) {
        const n = parseInt(readLine().trim(), 10);
        const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
        const result = balancedSums(arr);

        ws.write(result + '\n');
    }

    ws.end();
}
