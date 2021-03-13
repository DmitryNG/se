const { Console } = require('console');
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', function(line){
    lines.push(line);
});

rl.on('close', () => {
       let n = parseInt(lines[0]);
        console.log(lines
            .splice(1)
            .map(item => item.split(';'))
            .sort((a, b) => +(b[1]) - +a[1]) [n-1][0]);
            
});