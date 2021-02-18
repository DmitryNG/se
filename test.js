readln = require('readline-sync'); // подключаем модуль

let x = 6;
let y = 55;

function f (i)
{
    switch (i) {
        case '+':
            console.log(`Сумма =`, x+y);
            break;

        case '-':
                console.log(`Разность =`, x-y);
                break;
    
        case '*':
                console.log(`Произведение =`, x*y);
                break; 
        
        case '/':
                console.log(`Частное =`, x/y);
                break;   

        case 'exit':
            console.log(`Выход...`);
            break;   

        default:
            console.log('Фиг вам... Введите правильный оператор');
            break;
    }
} 
answer = String(readln.question('> ')); // читаем с консоли
//console.log(answer);
while(answer!=`exit`){
    

    console.log("Введите оператор (для выхода введите 'exit')");
    answer = String(readln.question('> ')); // читаем с консоли
    

    f(answer);
    //console.clear();
}