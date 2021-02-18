let x = 0;
let y = 55;

var readline = require('readline');

var rl = readline.createInterface(
    {
    input: process.stdin,
    output: process.stdout
})

let lines = [];

rl.on('line', function(line){
    lines.push(line);
});

function f (i)
{
    if(i=='+')
    {
        console.log(`Сумма = ${a+b}`);
    }

    if(i=='-')
    {
        console.log(`Произведение = ${a+b}`);
    }

} 