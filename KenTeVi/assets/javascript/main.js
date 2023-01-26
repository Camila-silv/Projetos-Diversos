let listaMenu = document.querySelector(".menu-principal__lista-menu");
let menuPrincipal = document.querySelector(".menu-principal");
let body = document.querySelector(".conteudo-completo");
let botaoTwittar = document.querySelector(".container-twittar__botao");



botaoTwittar.addEventListener("click", function(ev) {
    ev.preventDefault();
})

menuPrincipal.addEventListener("mouseover", function () {
    menuPrincipal.classList.add("mostrar-menu");
    listaMenu.classList.add("mostrar-lista-menu");
})


menuPrincipal.addEventListener("mouseout", function () {
    menuPrincipal.classList.remove("mostrar-menu");
    listaMenu.classList.remove("mostrar-lista-menu");
})






