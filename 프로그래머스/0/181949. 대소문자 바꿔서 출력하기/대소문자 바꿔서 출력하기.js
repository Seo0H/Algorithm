const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    const str = input[0].split('').reduce((acc,cur) => {
        const charCode = cur.charCodeAt(0);
        const isLowerCase = charCode > 90 ;
        
        if(isLowerCase) {
            return acc + String.fromCharCode(charCode - 32);
        }
        
        return acc + String.fromCharCode(charCode + 32);
    },'');
    
    console.log(str)
    
});