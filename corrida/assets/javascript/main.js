let botao = document.querySelectorAll(".botao-padrao");
let jogadores = document.querySelectorAll(".aba-start__jogador");
let entradaValores = document.querySelectorAll(".jogadores__container-input");

let alerta = document.querySelectorAll(".alerta-padrao");
let botoAlerta = document.querySelectorAll(".alerta-padrao__botao-fechar");


let acelerar = false;
let resetar = false;


let velocidadeAtualPlay1 = 0;
let velocidadeAtualPlay2 = 0;

let addVelocidadePlay1 = 0;
let addVelocidadePlay2 = 0;
let velocidadeJogadores = 0;

let abaVelocidade = document.querySelector(".container-principal__container-velocidade");
let abaJogo = document.querySelector(".container-principal__container-conteudo-principal");


let botaoAudio = document.querySelector(".botao-audio");
let audio = document.querySelector(".audio");




botaoAudio.addEventListener("click", function () {

    if (audio.paused == false) {
        
        botaoAudio.classList.replace("fa-microphone", "fa-microphone-slash");
        audio.pause()
    } else {
        
        botaoAudio.classList.replace("fa-microphone-slash", "fa-microphone");
        audio.play()
    }
    
})




//botao acelerar
botao[0].addEventListener("click", function () {


    if (velocidadeAtualPlay1 >= 1050) {

        mostrarAlerta(0);

    } else if (velocidadeAtualPlay2 >= 1050) {

        mostrarAlerta(1);

    } else {

        movimentarCarro(0, 1)

    }



})

//botao start
botao[1].addEventListener("click", function () {

    addVelocidades();

    let condicionalPreenchimento = addVelocidadePlay1 == "" || addVelocidadePlay2 == "";


    if (condicionalPreenchimento) {

        alerta[2].classList.replace("alerta-padrao", "mostrar-alerta-padrao");

    } else {

        velocidadeAtualPlay1 = 0;
        velocidadeAtualPlay2 = 0;
        addVelocidadePlay1 = 0;
        addVelocidadePlay2 = 0;

        abaVelocidade.classList.replace("container-principal__container-velocidade", "esconder-container-velocidade");

        abaJogo.classList.replace("container-principal__container-conteudo-principal", "mostrar-container-conteudo-principal");

    }



})

botoAlerta[2].addEventListener("click", function () {


    alerta[2].classList.replace("mostrar-alerta-padrao", "alerta-padrao");


})

fecharAlerta(0);
fecharAlerta(1);

function movimentarCarro(play1, pla2) {

    acelerar = true;


    addVelocidades();



    while (acelerar) {


        velocidadeAtualPlay1 += + addVelocidadePlay1;
        velocidadeAtualPlay2 += + addVelocidadePlay2;



        jogadores[play1].style.left = velocidadeAtualPlay1 + "px";
        jogadores[pla2].style.left = velocidadeAtualPlay2 + "px";
        acelerar = false;


    }

}

function addVelocidades() {
    velocidadeJogadores = document.querySelectorAll(".container-input__input-velocidade");

    addVelocidadePlay1 = velocidadeJogadores[0].value;
    addVelocidadePlay2 = velocidadeJogadores[1].value;


}


function resetarJogo(play1, play2) {

    abaJogo.classList.replace("mostrar-container-conteudo-principal", "container-principal__container-conteudo-principal");

    abaVelocidade.classList.replace("esconder-container-velocidade", "container-principal__container-velocidade");


    jogadores[play1].style.left = "0px";
    jogadores[play2].style.left = "0px";

    velocidadeJogadores[0].value = "";
    velocidadeJogadores[1].value = "";

}


function fecharAlerta(player) {

    botoAlerta[player].addEventListener("click", function () {
        resetarJogo(0, 1);
        alerta[player].classList.replace("mostrar-alerta-padrao", "alerta-padrao");
    }
    )
}


function mostrarAlerta(player) {

    alerta[player].classList.replace("alerta-padrao", "mostrar-alerta-padrao");
}



