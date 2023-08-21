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
        menu.style.transform="translateX(100rem)";
        menu.style.opacity= "0";  
    };

    /* Fechar o menu depois de ser clicado */
    menu.onclick = function () {
        menu.style.transition="0.5s";  
        menu.style.transform="translateX(100rem)";
        menu.style.opacity= "0";  
    };

     /* Fechar o menu se clicar fora dele */
     corpo.onclick = function () {
        menu.style.transition="0.5s";  
        menu.style.transform="translateX(100rem)";
        menu.style.opacity= "0";  
    };

    // Função para ser executada quando ocorrer o evento scroll.
    const seta = document.getElementById('seta');

    function handleScroll() {
        
        // Obtém a posição vertical do scroll.
        const scrollTop = window.scrollY;

        // Botão de subir aparecer e desaparecer com scroll.
        if (scrollTop > 560) {
            seta.style.display = "block";
        } else {
            seta.style.display = "none";
        }
    }
    // Adiciona o ouvinte de evento 'scroll' ao objeto window.
    window.addEventListener('scroll', handleScroll);

/*
    // Abrir e fechar o acordion
    let comentarios = document.querySelector("#comentarios-artigo h2");
    let icone = document.querySelector("#comentarios-artigo h2 i");
    var autor = document.getElementById("autor");

    comentarios.onclick = function () {
        
        if(autor.style.display == "block") {
            icone.classList.remove("fa-minus");
            icone.classList.add("fa-plus");
            autor.style.display = "none";
        }else{
            icone.classList.remove("fa-plus");
            icone.classList.add("fa-minus");
            autor.style.display = "block";
        }

    }
*/
    // Acordion 2
    const accordion = document.getElementsByClassName('title-coment');// Pega os 3 titulos h2
    
    for ( i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function(){ // fico ouvido caso seja clicado

            var pai = this.parentElement; // pego o pai
            var filho = pai.lastElementChild; // pego o ultimo filho do pai o irmão

            filho.classList.toggle('active');// adiciono a classe active para aparecer e desaparecer

        })
        
    }

    // Comentario 2

    let coments = document.getElementsByClassName("btn-enviar-comentario");
    

    for ( i = 0; i < accordion.length; i++) {
        coments[i].addEventListener('click', function(){
            //console.log("clicou");
            var cmt = this;
            var pai = cmt.parentElement;
            var avo = pai.parentElement;
            //console.log(avo);
            var filhos = avo.children;
           // console.log(filhos);

            var nome1; // irá recebe valor do input nome
            var coment1; // irá recebe valor do input tex-area

            for(filho of filhos){
                if(filho.name == 'nome'){
                    nome1=filho.value;                   
                }
                if(filho.name == 'text-area'){
                    coment1= filho.value;         
                }               
            }
          
            // Criar html e pegar div
            var bisavo = avo.parentElement;
            var alvo = bisavo.firstElementChild;
            //console.log(alvo);

            let div = document.createElement('div');
            div.classList.add("info-autor");
            div.innerHTML = `
            <img src="img/usuario.jpg" width="40" height="40" alt="foto usuario">
            <div id="coment-text">
                <h3>${nome1}</h3>
                <p>${coment1}</p>
            </div>`;

            // Adiciona no html
            alvo.appendChild(div);


            // limpa os campos do formulario
            for(filho of filhos){
                filho.value = "";
            }
             

        })
    }

/*
    let enviarComentario = document.querySelector("#btn-enviar-comentario");


    enviarComentario.onclick = function() {
        let nome = document.getElementById("nome").value;
        let comentario = document.getElementById("text-area").value;
        let areaComentarios = document.getElementById("autores");
       
        if(nome == ""){
            alert("Digite seu nome");    
        }
        if(comentario==""){
            alert("Digite seu comentário");   
        }else{
            
            // Criar comentario em html

            let div = document.createElement('div');
            div.classList.add("info-autor");
            div.innerHTML = `
            <img src="img/usuario.jpg" width="40" height="40" alt="foto usuario">
            <div id="coment-text">
                <h3>${nome}</h3>
                <p>${comentario}</p>
            </div>`;
            // Adiciona no html
            areaComentarios.appendChild(div);

            // limpa os campos do formulario
            document.getElementById("nome").value = "";
            document.getElementById("text-area").value = "";
        }

    }*/


}