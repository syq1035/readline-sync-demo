let readlineSync = require('readline-sync');

//printKM
function printKM() {
    console.log(`--------KM--------`);
}

//printBL
function printBL() {
    console.log(`--------BL--------`);
}

function main() {
    console.log(`1. printKM
2. printBL
3. EXIT
Please Input Your Choose(1-3)`);

    readlineSync.promptCLLoop({
        1: printKM,
        2: printBL,
        3: function() { return true; }
    });
    console.log('Exited');
}

main();