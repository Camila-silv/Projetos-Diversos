
let opcaoConversao = document.querySelectorAll(".escolha-conversao__opcao-escolha");
let opcaoEscolhida;
let botaoFechar = document.querySelector(".container-resultado__botao-fechar");


let backgroundResult = document.querySelector(".esconder-background");
let backgroundPrincipal = document.querySelector(".container-conversor__background");
let conteudoPrincipal = document.querySelector(".conteudo-principal__conversor");
let conteudoResultado = document.querySelector(".esconder-resultado");
let botaoConverter = document.querySelector(".form-conversor__botao-converter");

let containerForm = document.querySelector(".form-conversor__escolha-conversao");

let alerta = document.querySelectorAll(".esconder-alerta");
let fecharAlerta = document.querySelectorAll(".alerta-padrao__botao-fechar");


botaoConverter.addEventListener("click", function (ev) {

    ev.preventDefault();


    validacao();


})

botaoFechar.addEventListener("click", function () {


    backgroundResult.classList.replace("container-resultado__background", "esconder-background");
    conteudoResultado.classList.replace("conteudo-principal__resultado", "esconder-resultado");

    backgroundPrincipal.classList.replace("esconder-background", "container-conversor__background");
    conteudoPrincipal.classList.replace("esconder-conversor", "conteudo-principal__conversor");

    retirarSelecao();

    document.querySelector(".form-conversor__input-entrada").value = "";


})

fecharAlerta[0].addEventListener("click", function () {
    alerta[0].classList.replace("alerta-padrao", "esconder-alerta");
})


adicionarSelecao();


function retirarSelecao() {

    for (let i = 0; i < opcaoConversao.length; i++) {

        opcaoConversao[i].classList.replace("escolha-conversao__opcao-escolha--selecionado", "escolha-conversao__opcao-escolha");

    }

}

function adicionarSelecao() {

    for (let i = 0; i < opcaoConversao.length; i++) {



        opcaoConversao[i].addEventListener("click", function () {

            retirarSelecao();

            opcaoConversao[i].classList.replace("escolha-conversao__opcao-escolha", "escolha-conversao__opcao-escolha--selecionado");


        })



    }
}

function validacao() {

    let entradaInput = document.querySelector(".form-conversor__input-entrada").value;

  
    if (entradaInput != "") {

        let numeroEscolhido = parseInt(entradaInput);


        for (let i = 0; i < opcaoConversao.length; i++) {

            let opcaoEscolhida = opcaoConversao[i].classList.contains("escolha-conversao__opcao-escolha--selecionado");


            if (opcaoEscolhida) {

                let guardarDado = opcaoConversao[i].getAttribute("data-value");
                let resultadoFinal;
                let containerNumeroEscolhido = document.querySelector(".resultado__parag");
                let containerResultado = document.querySelector(".resultado__unidade-conversao");


                switch (guardarDado) {
                    case "mm":
                        resultadoFinal = numeroEscolhido * 1000;
                        containerNumeroEscolhido.innerText = numeroEscolhido + "M"
                        containerResultado.innerText = resultadoFinal + "mm";

                        break;
                    case "cm":
                        resultadoFinal = numeroEscolhido * 100;
                        containerNumeroEscolhido.innerText = numeroEscolhido + "M"
                        containerResultado.innerText = resultadoFinal + "cm";
                        break;
                    case "dm":
                        resultadoFinal = numeroEscolhido * 10;
                        containerNumeroEscolhido.innerText = numeroEscolhido + "M"
                        containerResultado.innerText = resultadoFinal + "dm";
                        break;
                    case "dam":
                        resultadoFinal = numeroEscolhido / 10;
                        containerNumeroEscolhido.innerText = numeroEscolhido + "M"
                        containerNumeroEscolhido.innerText = resultadoFinal + "dam";

                        break;
                    case "hm":
                        resultadoFinal = numeroEscolhido / 100;
                        containerNumeroEscolhido.innerText = numeroEscolhido + "M"
                        containerResultado.innerText = resultadoFinal + "hm";

                        break;
                    case "km":

                        resultadoFinal = numeroEscolhido / 1000;
                        containerNumeroEscolhido.innerText = numeroEscolhido + "M"
                        containerResultado.innerText = resultadoFinal + "km";
                        break;

                }

                backgroundPrincipal.classList.replace("container-conversor__background", "esconder-background");
                conteudoPrincipal.classList.replace("conteudo-principal__conversor", "esconder-conversor");

                backgroundResult.classList.replace("esconder-background", "container-resultado__background");
                conteudoResultado.classList.replace("esconder-resultado", "conteudo-principal__resultado");




            }




        }
    }
    else {
        alerta[0].classList.replace("esconder-alerta", "alerta-padrao");
    }
}