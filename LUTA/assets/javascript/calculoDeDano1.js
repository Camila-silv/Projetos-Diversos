let botaoStart = document.querySelector(".conteudo-principal__botao");

let botaoMenuControleVoltar = document.querySelector(".menu-controle__voltar");

let botaoMenuControleStart = document.querySelector(".menu-controle__start");

let botaoVoltarContainerPrincipal = document.querySelector(".container-conteudo-principal__botao-voltar");

let botaoMenuControleAtaque = document.querySelector(".menu-controle__ataque");

let botaoMenuControleDefesa = document.querySelector(".menu-controle__defesa");

let botaoFecharAbaAlerta = document.querySelector(".alerta-preenchimento__botao-fechar");

let botaoFecharAbaElixir = document.querySelector(".alerta-elixir__botao-fechar");

let abaAlerta = document.querySelector(".painel-escolher-plays__alerta-preenchimento");

let conteudoPrincpal = document.querySelector(".conteudo-principal__container-conteudo-principal");

let containerPlayers = document.querySelector(".conteudo-principal__painel-escolher-plays");

let botaoInf = document.querySelector(".icon-informacao");

let caixaInf = document.querySelector(".caixa-inf__parag");

let botaoPadraoAlerta = document.querySelector(".botao-fechar-padrao");

let painelAlertaPadrao = document.querySelector(".tela-alerta-padrao");


//PEGAR DADOS

//PLAYER ATAQUE

let elementoNamePlayerAtaque = document.querySelector("#player-ataque");
let namePlayerAtaque = elementoNamePlayerAtaque.value;
let containerNameAtaque = document.querySelector("#container-name-player-ataque");

let elementoPoderDeAtaque = document.querySelector("#poder-de-ataque");
let poderDeAtaque = parseInt(elementoPoderDeAtaque.value);
let containerPoderAtaque = document.querySelector("#container-poder-ataque-player-ataque");


let elementoEnergiaPlayerAtaque = document.querySelector("#energia-ataque");
let energiaPlayerAtaque = parseInt(elementoEnergiaPlayerAtaque.value);
let containerPlayerAtaqueEnergia = document.querySelector("#container-energia-player-ataque");


//PLAYER DEFESA

let elementoNamePlayerDefesa = document.querySelector("#player-defesa");
let namePlayerDefesa = elementoNamePlayerDefesa.value;
let containerNameDefesa = document.querySelector("#container-name-player-defesa");

let elementoPoderDeDefesa = document.querySelector("#poder-de-defesa");
let poderDeDefesa = parseInt(elementoPoderDeDefesa.value);
let containerPoderDefesa = document.querySelector("#container-poder-defesa-player-defesa")


let elementoHpPlayerDefesa = document.querySelector("#hp-player-defesa");
let hpPlayerDefesa = parseInt(elementoHpPlayerDefesa.value);
let containerHpPlayerDefesa = document.querySelector("#container-hp-player-defesa");


let elementoEscudoPlayerDefesa = document.querySelector("#escudo-player-defesa");
let escudoPlayerDefesa = elementoEscudoPlayerDefesa.value;
let containerEscudo = document.querySelector("#container-escudo-player-defesa");

let elementoElixirPlayerDefesa = document.querySelector("#elixir-player-defesa");
let elixirPlayerDefesa = parseInt(elementoElixirPlayerDefesa.value);
let containerElixir = document.querySelector("#container-elixir-player-defesa");



let condificionalDePreenchimento = namePlayerAtaque == "" || poderDeAtaque == "NaN" || energiaPlayerAtaque == "NaN" || namePlayerDefesa == "" || poderDeDefesa == "NaN" || hpPlayerDefesa == "NaN" || escudoPlayerDefesa == "" || elixirPlayerDefesa == "NaN";

let condicionalDeValores = poderDeAtaque > "100" || energiaPlayerAtaque > "100" || poderDeDefesa > "100" || hpPlayerDefesa > "100" || escudoPlayerDefesa != "sim" && escudoPlayerDefesa != "nao" || elixirPlayerDefesa > "5";


let containerAlertaGanhador = document.querySelector(".container-conteudo-principal__alerta-vitoria");

let alertaPlayerAtaque = document.querySelector(".alerta-vitoria__player-ataque");
let alertaPlayerDefesa = document.querySelector(".alerta-vitoria__player-defesa");


let alertaElixir = document.querySelector(".container-conteudo-principal__alerta-elixir");

botaoMenuControleAtaque.addEventListener("click", function () {

    let descontoDePontos = 5;

    if (hpPlayerDefesa >= "0" && energiaPlayerAtaque >= "0") {
        containerHpPlayerDefesa.innerText = hpPlayerDefesa -= descontoDePontos;
    }

    if (energiaPlayerAtaque >= "0" && hpPlayerDefesa >= "0") {
        containerPlayerAtaqueEnergia.innerText = energiaPlayerAtaque -= descontoDePontos;
    }



    if (hpPlayerDefesa <= "0") {
        containerAlertaGanhador.classList.replace("container-conteudo-principal__alerta-vitoria", "mostrar-container-conteudo-principal__alerta-vitoria");

        alertaPlayerAtaque.classList.replace("alerta-vitoria__player-ataque", "mostrar-alerta-vitoria__player-ataque");
        containerHpPlayerDefesa.innerText = "0";
    }

    if (energiaPlayerAtaque <= "0") {

        containerAlertaGanhador.classList.replace("container-conteudo-principal__alerta-vitoria", "mostrar-container-conteudo-principal__alerta-vitoria");


        alertaPlayerDefesa.classList.replace("alerta-vitoria__player-defesa", "mostrar-alerta-vitoria__player-defesa");
        containerPlayerAtaqueEnergia.innerText = "0";
    }


})


botaoMenuControleDefesa.addEventListener("click", function () {
    let restaurarVida = 20;
    hpPlayerDefesa += restaurarVida;
    elixirPlayerDefesa -= 1;

    if (elixirPlayerDefesa > "0") {

        containerHpPlayerDefesa.innerText = hpPlayerDefesa;
        containerElixir.innerText = elixirPlayerDefesa;

    }

    if (elixirPlayerDefesa <= "0") {

        containerElixir.innerText = "0";
        alertaElixir.classList.replace("container-conteudo-principal__alerta-elixir", "mostrar-container-conteudo-principal__alerta-elixir");
    }




})


botaoFecharAbaElixir.addEventListener("click", function () {
    alertaElixir.classList.replace("mostrar-container-conteudo-principal__alerta-elixir", "container-conteudo-principal__alerta-elixir");
})


botaoStart.addEventListener("click", function () {

    botaoStart.classList.replace("conteudo-principal__botao", "esconder-conteudo");

    containerPlayers.classList.replace("conteudo-principal__painel-escolher-plays", "mostrar-conteudo-principal__painel-escolher-plays");

})


botaoMenuControleVoltar.addEventListener("click", function () {
    containerPlayers.classList.replace("mostrar-conteudo-principal__painel-escolher-plays", "conteudo-principal__painel-escolher-plays");

    botaoStart.classList.replace("esconder-conteudo", "conteudo-principal__botao");


})


containerPlayers.addEventListener("submit", function (ev) {

    ev.preventDefault();



    if (condificionalDePreenchimento) {

        abaAlerta.classList.replace("painel-escolher-plays__alerta-preenchimento", "mostrar-painel-escolher-plays__alerta-preenchimento");
        


    } else {

        if (condicionalDeValores) {

          
            painelAlertaPadrao.classList.replace("tela-alerta-padrao", "mostrar-tela-alerta-padrao");


        } else {


            if (poderDeAtaque > poderDeDefesa && escudoPlayerDefesa == "nao") {
                let danoCausado = poderDeDefesa - poderDeAtaque;
            
                hpPlayerDefesa += danoCausado;//(+y += -n) == + - = - 
                resultado();
            
            } else if (poderDeAtaque > poderDeDefesa && escudoPlayerDefesa == "sim") {
                let danoCausado = (poderDeDefesa - poderDeAtaque) / 2;
            
                hpPlayerDefesa += danoCausado;               
                resultado();
            
            } else if (poderDeAtaque <= hpPlayerDefesa) {
                let danoCausado = 0;
            
                hpPlayerDefesa += danoCausado;
                resultado();
            }
            

        }

    }


})

botaoVoltarContainerPrincipal.addEventListener("click", function () {


    conteudoPrincpal.classList.replace("mostrar-conteudo-principal__container-conteudo-principal", "conteudo-principal__container-conteudo-principal");


    containerPlayers.classList.replace("conteudo-principal__painel-escolher-plays", "mostrar-conteudo-principal__painel-escolher-plays");


})

botaoFecharAbaAlerta.addEventListener("click", function () {
    abaAlerta.classList.replace("mostrar-painel-escolher-plays__alerta-preenchimento", "painel-escolher-plays__alerta-preenchimento");
})

botaoPadraoAlerta.addEventListener("click", function () {
    painelAlertaPadrao.classList.replace("mostrar-tela-alerta-padrao", "tela-alerta-padrao");
})


//MANIPULACAO DE CSS

botaoInf.addEventListener("mouseover", function () {
    caixaInf.classList.replace("caixa-inf__parag", "mostrar-caixa-inf__parag");
})

botaoInf.addEventListener("mouseout", function () {
    caixaInf.classList.replace("mostrar-caixa-inf__parag", "caixa-inf__parag");
})


function resultado() {
    containerPlayers.classList.replace("mostrar-conteudo-principal__painel-escolher-plays", "conteudo-principal__painel-escolher-plays");

    conteudoPrincpal.classList.replace("conteudo-principal__container-conteudo-principal", "mostrar-conteudo-principal__container-conteudo-principal");



    //PLAYER ATAQUE
    containerNameAtaque.innerText = namePlayerAtaque;
    containerPoderAtaque.innerText = poderDeAtaque;
    containerPlayerAtaqueEnergia.innerText = energiaPlayerAtaque;

    //PLAYER DEFESA
    containerNameDefesa.innerText = namePlayerDefesa;
    containerPoderDefesa.innerText = poderDeDefesa;
    containerHpPlayerDefesa.innerText = hpPlayerDefesa;
    containerEscudo.innerText = escudoPlayerDefesa;
    containerElixir.innerText = elixirPlayerDefesa;
}



