const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    const result = line.split('')
    .reduce((acc, cur) => acc.length === 0 ?
            acc + cur :
            acc + '\n' + cur, '' );
    
    console.log(result)
})