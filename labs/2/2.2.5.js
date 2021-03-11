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
        console.log(
            lines
            .splice(1, +lines[0])
            .map(x=>+x)
            .filter(x=>x%10==3)
            .sort((a, b) => a - b)
            .splice(0, 1)
            .join(' ')
            )
});