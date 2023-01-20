let opcaoBanner = document.querySelectorAll(".menu-slide__item");
let containerSliders = document.querySelector(".sliders__container-sliders");

let containerForm = document.querySelector(".sec-abas__container-form");
let containerVisitadas = document.querySelector(".sec-abas__cidades-visitadas");

let trocarAba = document.querySelectorAll(".item__img-icone");


let botaoValidar = document.querySelector("#input-validar");


let campoNome;
let ultimoNome;
let campoCidadeVisitada;
let campoObservacao;
let incremento = 0;



let alertaPreenchimento = document.querySelector(".alertas__preenchimento");
let botaoFechar = document.querySelector(".preenchimento__botao-fechar");



botaoValidar.addEventListener("click", function (evento) {
    evento.preventDefault();

    criarAbaVisitado();
})

botaoFechar.addEventListener("click", function(){
    alertaPreenchimento.classList.add("esconder-alerta");
})

clickOpcaoBanner(0);
clickOpcaoBanner(1);
clickOpcaoBanner(2);

clickMenuAba(0);
clickMenuAba(1);
clickMenuAba(2);




function validarOpcao(opcao) {


    if (opcaoBanner[opcao].classList.contains("menu-slide__item--ativo") == true) {

        return;

    } else {

        for (let i = 0; i < opcaoBanner.length; i++) {

            opcaoBanner[i].classList.remove("menu-slide__item--ativo");
        }

        opcaoBanner[opcao].classList.add("menu-slide__item--ativo");
    }


}

function clickOpcaoBanner(opcao) {


    opcaoBanner[opcao].addEventListener("click", function () {

        validarOpcao(opcao);
        switch (opcao) {
            case 0:

                (containerSliders.style.left == "0px") ? null : containerSliders.style.left = "0px";
                break;
            case 1:
                (containerSliders.style.left == "-1383px") ? null : containerSliders.style.left = "-1383px";
                break;
            case 2:
                (containerSliders.style.left == "-2766px") ? null : containerSliders.style.left = "-2766px";
                break;
        }

    })
}


function clickMenuAba(opcao) {

    trocarAba[opcao].addEventListener("click", function () {

        for (let i = 0; i < trocarAba.length; i++) {
            trocarAba[i].classList.remove("item__img-icone--ativo");
        }

        trocarAba[opcao].classList.add("item__img-icone--ativo");

        switch (opcao) {
            case 0:

                containerVisitadas.classList.add("esconder-container");
                containerForm.classList.remove("esconder-container");

                break;
            case 1:

                containerForm.classList.add("esconder-container");
                containerVisitadas.classList.remove("esconder-container");
                break;
            case 2:

                containerForm.classList.add("esconder-container");
                containerVisitadas.classList.add("esconder-container");
                break;
        }


    })



}


function criarAbaVisitado() {


    campoNome = document.querySelectorAll(".container-inputs-nome-compl__input");
    campoObservacao = document.querySelector("#observacao");
    campoCidadeVisitada = document.querySelector("#cidades-visitadas");

    let nome = campoNome[0].value;
    let ultimoNome = campoNome[1].value;
    let observacao = campoObservacao.value;
    let cidadeVisitada = campoCidadeVisitada.value;
    nomeCompleto = `${nome} ${ultimoNome}`;



    if (nome == "" || ultimoNome == "" || cidadeVisitada == "") {

        alertaPreenchimento.classList.remove("esconder-alerta");
        return;

    } else if (observacao == "") {
        observacao = "N/A";
    }


    //container

    let corpo = document.createElement("div");
    corpo.classList.add("cidades-visitadas__corpo-conteudo");
    corpo.id = "usuario-" + incremento;
    containerVisitadas.append(corpo);

    //cabecalho

    let cabecalho = document.createElement("header");
    cabecalho.classList.add("corpo-conteudo__cabecalho-cid");

    let containerHeader = document.createElement("div");
    containerHeader.classList.add("cabecalho-cid__container-cabecalho-cid");


    let nomePessoa = document.createElement("h2");
    nomePessoa.classList.add("container-cabecalho-cid__titulo");
    nomePessoa.innerText = nomeCompleto;

    let imagem = document.createElement("i");
    imagem.classList.add("container-cabecalho-cid__img");
    containerHeader.append(nomePessoa, imagem);
    cabecalho.append(containerHeader);


    //corpo

    let corpoContainer = document.createElement("div");
    corpoContainer.classList.add("corpo-conteudo__corpo-cid");


    let conteudoInterno = document.createElement("div");
    conteudoInterno.classList.add("corpo-cid__container-corpo-cid")

    let listInf = document.createElement("ul");
    listInf.classList.add("container-corpo-cid__list-inf");

    let botaoDeletar = document.createElement("input");
    botaoDeletar.classList.add("botao-padrao");
    botaoDeletar.value = "Deletar";
    botaoDeletar.type = "submit";
    botaoDeletar.id = "usuario-del-" + incremento;

    let itemInf = document.createElement("li");
    itemInf.classList.add("list-inf__item-inf");

    let tituloVisitada = document.createElement("h3");
    tituloVisitada.classList.add("item-inf__titulo");
    tituloVisitada.innerText = "Cidade visitada:";


    let paragCidade = document.createElement("p");
    paragCidade.classList.add("item-inf_parag");
    paragCidade.innerText = cidadeVisitada;


    let tituloObs = document.createElement("h3");
    tituloObs.classList.add("item-inf__titulo");
    tituloObs.innerText = "Observação:";

    let paragObs = document.createElement("p");
    paragObs.classList.add("item-inf_parag");
    paragObs.innerText = observacao;


    itemInf.append(tituloVisitada, paragCidade);
    itemInf.append(tituloObs, paragObs);
    listInf.append(itemInf, itemInf);
    conteudoInterno.append(listInf, botaoDeletar);
    corpoContainer.append(conteudoInterno);
    corpo.append(cabecalho, corpoContainer);





    botaoDeletar.addEventListener("click", function () {

        containerVisitadas.removeChild(corpo);
    })




    campoNome[0].value = "";
    campoNome[1].value = "";
    campoObservacao.value = "";
    campoCidadeVisitada.value = "";
    incremento++;



}





