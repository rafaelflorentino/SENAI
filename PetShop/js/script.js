/* Javascript */

/* Abrir e Fechar mennu Mobile*/

window.onload = function () {
    /* Abrir Menu mobile*/
    let btnMenu = document.getElementById("botao-menu");
    btnMenu.onclick = function () {
        menu.style.opacity= "1";    
        menu.style.transition="0.5s";  
        menu.style.transform="translateX(0rem)";
    };
    /* Fechar Menu mobile*/
    let btnFechar = document.getElementById("btn-close");
    let menu = document.getElementById("menu-mobile");
    let corpo = document.getElementById("corpo");

    btnFechar.onclick = function () {
        menu.style.transition="0.5s";  
        menu.style.transform="translateX(40rem)";
        menu.style.opacity= "0";  
    };

    /* Fechar o menu depois de ser clicado */
    menu.onclick = function () {
        menu.style.transition="0.5s";  
        menu.style.transform="translateX(40rem)";
        menu.style.opacity= "0";  
    };

     /* Fechar o menu se clicar fora dele */
     corpo.onclick = function () {
        menu.style.transition="0.5s";  
        menu.style.transform="translateX(40rem)";
        menu.style.opacity= "0";  
    };
    

}
