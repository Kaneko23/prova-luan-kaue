const prompt = require('prompt-sync')();
const push = require('./func');

let key
while (key != 5) {
    push.Menu();
    key = prompt("- ")
    let carteira = 0
    if (key == 1) {
        let keyCarteira
        while ( keyCarteira != 1){
            push.menuCarteira();
            console.log(carteira);
            break;
        }
    }
    if (key == 2) {
        let keyGerAtivos
        while (keyGerAtivos != 6) {
            push.menuGerAtivos();
            keyGerAtivos = prompt("- ")
        }
    }
}