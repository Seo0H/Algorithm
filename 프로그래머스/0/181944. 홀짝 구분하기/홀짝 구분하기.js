const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const n = Number(input[0]);
    const nIsEven = n % 2 === 0;
    nIsEven ? console.log(`${n} is even`) : console.log(`${n} is odd`)
});