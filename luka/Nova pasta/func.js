function Menu() {
    console.log("Bem vindo(a)!");
    console.log("=-=-=-=-=--=-=-=");
    console.log("o que deseja fazer?");
    console.log("1 - Minha carteira");
    console.log("2 - Gerenciar Ativos");
    console.log("3 - Rendimentos");
    console.log("4 - Tipos de Ativos");
    console.log("5 - Sair");
}

function menuCarteira(prompt){
    console.log("Menu - Carteira");
    console.log("=-=-=-=-=-=-=-=-=");
    console.log("Acões Compradas: ");
    
}

function menuGerAtivos() {
    console.log("Menu - Gerenciar Ativos");
    console.log("=-=-=-=-=-=-=-=-=");
    console.log("1 - Comprar");
    console.log("2 - Vender");
    console.log("3 - Desdobramento");
    console.log("4 - Agrupar");
    console.log("5 - Bonificar");
    console.log("6 - Voltar");
}

module.exports = {
    Menu,
    menuGerAtivos,
    menuCarteira
}