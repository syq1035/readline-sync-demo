let readlineSync = require('readline-sync');

function main() {
    let userInput = readlineSync.question(``);

    if( userInput.trim() === "" ){//if input is a 'space'
        console.log(`666`);
        main();
    }else {
        console.log(`999`);
    }

}

main();
