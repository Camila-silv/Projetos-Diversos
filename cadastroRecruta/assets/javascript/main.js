let botaoCadastrados = document.querySelector(".menu-abas__cadastrados");

let botaoCadastro = document.querySelector(".menu-abas__cadastro");

let conteudoForm = document.querySelector(".conteudo-abas__form");

let conteudoCadastrados = document.querySelector(".conteudo-abas__inf-recruta-cadastrado");

let botaoInputCadastro = document.querySelector(".container-botao-contato__botao-cadastro");



let abas = document.querySelectorAll(".menu-abas__abas");

let divRecrutaCadastrado = document.querySelector(".inf-recruta-cadastrado__container-recrutas");

let contador = 0;

let incremento = false;




let nome = "";

let sobrenome = "";

let campoEstudo = "";

let anoNascimento = "";

let idade = "";





let botaoAlerta = document.querySelectorAll(".alerta-padrao__botao-fechar");

let alerta = document.querySelectorAll(".alerta-padrao");





botaoInputCadastro.addEventListener("click", function (ev) {

    ev.preventDefault();
    
    let condicionalCamposPreenchidos = conteudoForm.children[0].value == "" || conteudoForm.children[1].value == "" || conteudoForm.children[2].value == "" || conteudoForm.children[3].value == "";


    if(condicionalCamposPreenchidos) {
        alerta[2].classList.replace("alerta-padrao", "mostrar-alerta-padrao");
    } else {
        incremento = true;
        novoRecruta();
        while (incremento) {
            contador++;
            incremento = false;
        }
    
    
        alerta[0].classList.replace("alerta-padrao", "mostrar-alerta-padrao");
    
        nome = conteudoForm.children[0].value = "";
        sobrenome = conteudoForm.children[1].value = "";
        campoEstudo = conteudoForm.children[2].value = "";
        anoNascimento = conteudoForm.children[3].value = "";
        
    }


})


botaoCadastrados.addEventListener("click", function () {

    conteudoForm.classList.replace("conteudo-abas__form", "esconder-conteudo-abas__form");

    conteudoCadastrados.classList.replace("conteudo-abas__inf-recruta-cadastrado", "mostrar-conteudo-abas__inf-recruta-cadastrado");


    removeClasseSelecionado();
    botaoCadastrados.classList.add("menu-abas__abas--selecionado");

})

botaoCadastro.addEventListener("click", function () {

    conteudoCadastrados.classList.replace("mostrar-conteudo-abas__inf-recruta-cadastrado", "conteudo-abas__inf-recruta-cadastrado");

    conteudoForm.classList.replace("esconder-conteudo-abas__form", "conteudo-abas__form");

    removeClasseSelecionado();
    botaoCadastro.classList.add("menu-abas__abas--selecionado");

})



botaoAlerta[0].addEventListener("click", function () {

    alerta[0].classList.replace("mostrar-alerta-padrao", "alerta-padrao");


})

botaoAlerta[1].addEventListener("click", function () {
    alerta[1].classList.replace("mostrar-alerta-padrao", "alerta-padrao")
})


botaoAlerta[2].addEventListener("click", function () {
    alerta[2].classList.replace("mostrar-alerta-padrao", "alerta-padrao")
})


function removeClasseSelecionado() {


    for (let i = 0; i < abas.length; i++) {

        let consulta = abas[i].classList.contains("menu-abas__abas--selecionado");

        if (consulta) {

            abas[i].classList.remove("menu-abas__abas--selecionado");
        }
    }


}



function novoRecruta() {


    nome = conteudoForm.children[0].value;

    sobrenome = conteudoForm.children[1].value;

    campoEstudo = conteudoForm.children[2].value;

    anoNascimento = conteudoForm.children[3].value;
    parseInt(anoNascimento);

    idade = 2023 - anoNascimento;


    let divId = document.createElement("div");
    divId.classList.add("campo-inf__id");
    divId.innerText = contador;

    let divNomeCompleto = document.createElement("div");
    divNomeCompleto.classList.add("campo-inf__nome-completo");
    divNomeCompleto.innerText = nome + " " + sobrenome;

    let divCampoEstudo = document.createElement("div");
    divCampoEstudo.classList.add("campo-inf__campo-estudo");
    divCampoEstudo.innerText = campoEstudo;

    let divIdade = document.createElement("div");
    divIdade.classList.add("campo-inf__idade");
    divIdade.innerText = idade;



    let novoLista = document.createElement("ul");
    novoLista.classList.add("container-recrutas__container-recruta");
    novoLista.id = "Recruta" + divId.innerText;

    let idRecruta = document.createElement("h2");
    idRecruta.classList.add("container-recruta__campo-inf");
    idRecruta.innerText = "Dev Id: " + divId.innerText;

    let nomeRecruta = document.createElement("li");
    nomeRecruta.classList.add("container-recruta__campo-inf");
    nomeRecruta.innerText = "Nome Completo: " + divNomeCompleto.innerText;

    let campoEstudoRecruta = document.createElement("li");
    campoEstudoRecruta.classList.add("container-recruta__campo-inf");
    campoEstudoRecruta.innerText = "Campo de Estudo: " + divCampoEstudo.innerText;

    let idadeRecruta = document.createElement("li");
    idadeRecruta.classList.add("container-recruta__campo-inf");
    idadeRecruta.innerText = "Idade: " + divIdade.innerText;

    let campoDelete = document.createElement("div");
    campoDelete.classList.add("container-recruta__container-remover");

    let botaoDelete = document.createElement("button");
    botaoDelete.classList.add("container-remover__botao-deletar");
    botaoDelete.classList.add("botao-padrao");
    botaoDelete.innerText = "Deletar Recruta";
    botaoDelete.name = "Recruta" + divId.innerText;
    botaoDelete.id = "Recruta" + divId.innerText + "input";
    campoDelete.appendChild(botaoDelete);

    novoLista.append(idRecruta, nomeRecruta, campoEstudoRecruta, idadeRecruta, campoDelete);

    divRecrutaCadastrado.appendChild(novoLista);

    botaoInputDelete = document.getElementById("Recruta" + divId.innerText + "input");


    botaoInputDelete.addEventListener("click", function (ev) {


        conteudoPai = ev.currentTarget.parentNode.parentNode;
        conteudoPai.remove(idRecruta, nomeRecruta, campoEstudoRecruta, idadeRecruta, campoDelete);

        alerta[1].classList.replace("alerta-padrao", "mostrar-alerta-padrao");
    })




}


let conteudoPai = "";

let botaoInputDelete = "";



