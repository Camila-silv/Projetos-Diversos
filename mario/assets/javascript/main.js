let botaoFechar = document.querySelector(".trailer-video__botao-fechar");
let containerVideo = document.querySelector(".trailer-video");
let menuBar = document.querySelector(".navbar__container-menu");
let menuItens = document.querySelectorAll(".container-menu__barra");
let navbar = document.querySelector(".container-cabecalho__navbar");

let botaoAbrir = document.querySelector(".informacoes__botao-trailer");

botaoFechar.addEventListener("click", function() {
    containerVideo.classList.add("esconder-conteudo");
})

botaoAbrir.addEventListener("click", function() {
    containerVideo.classList.remove("esconder-conteudo");
})

menuBar.addEventListener("click", function() {
    menuItens[0].classList.toggle("ponteiro-1");
    menuItens[1].classList.toggle("ponteiro-2");
    menuItens[2].classList.toggle("ponteiro-3");

    navbar.classList.toggle("mostrar-navbar");
})