let readlineSync = require('readline-sync');

//printKM
function printKM() {
    console.log(`--------KM--------`);
}

//printBL
function printBL() {
    console.log(`--------BL--------`);
}

//getUserInput
function getUserInput() {
    return parseInt(readlineSync.question(`1. printKM
2. printBL
3. EXIT
Please Input Your Choose(1-3)`));
}

//main
function main() {
    switch(getUserInput())
    {
        case 1:
            printKM();
            main();
            break;
        case 2:
            printBL();
            main();
            break;
        case 3:
            console.log('EXIT');
            break;
    }
}

main();