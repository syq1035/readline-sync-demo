let readlineSync = require('readline-sync');
let inputNum = readlineSync.question('Please input a number!\n');

//create a random number!
function getRandomNum() {
    return Math.floor( Math.random()*10 );
}

//main
function match(inputNum, randomNum) {
    if(inputNum > randomNum){
        return true
    }else {
        return false;
    }
}

let randomNum = getRandomNum();
console.log(`The randomNum is ${randomNum}`);

console.log(match(inputNum, randomNum));