const initialSection = document.querySelector(".main-content__initial-section");
const operationsSection = document.querySelector(".main-content__operations-section");
const btnMenuFunctions = document.querySelectorAll(".functions__button");
const containerOperationMenu = document.querySelector(".operations-container__operations-menu");
const performOperation = document.querySelector(".operations-container__perform-operation");
const containerOperation = document.querySelectorAll(".perform-operation__container-operation");
const btnClose = document.querySelectorAll(".container-operation__container-btn-close");
const btnCloseHeader = document.querySelector(".container-btn-close__btn-close");

let btnForm = document.querySelector(".input-form__button");
let inputName = document.querySelector(".container-name__input");
let inputValue = document.querySelector(".container-value__input");
let containerNameUser = document.querySelector(".user-container__user-name");
let containerValue = document.querySelector(".value__span");
let buttonOperations = document.querySelectorAll(".button-default");
let inputOperations = document.querySelectorAll(".container-operation__input");
let containerAppliedValue = document.querySelector(".applied-value__span");


let containerAlert = document.querySelector(".container-alert");
let boxAlert = document.querySelectorAll(".container-alert__box");
let buttonAlert = document.querySelectorAll(".button-alert-default");




let containerExtrato = document.querySelector(".container-operation__container-extrato");
let title;
let labelValor;
let valorOperacao;
let containerInf;
let img;
let container


displayContainerOperation(0);
displayContainerOperation(1);
displayContainerOperation(2);

hideContainerOperation(0);
hideContainerOperation(1);
hideContainerOperation(2);
hideAlert();

let userAlterado;

btnForm.addEventListener("click", (ev) => {
    ev.preventDefault();

    userAlterado = inputName.value;
    valorAlterado = inputValue.value;


    if (userAlterado == "") {
        displayContainerAlert(3);
    } else {


        containerNameUser.innerText = `${userAlterado[0].toUpperCase()}${userAlterado.slice(1).toLowerCase()}`;

        if (valorAlterado == "") {

            valorAlterado = 0;
            containerValue.dataset.value = 0;
            containerValue.innerText = valorAlterado.toLocaleString('pt-br', { minimumFractionDigits: 2 });
            initialSection.classList.add("hide-content");
            operationsSection.classList.remove("hide-content");
            



        } {
            containerValue.innerText = parseInt(valorAlterado).toLocaleString('pt-br', { minimumFractionDigits: 2 });
            containerValue.dataset.value = parseInt(valorAlterado);
            initialSection.classList.add("hide-content");
            operationsSection.classList.remove("hide-content");
           


        }
    }





})




btnCloseHeader.addEventListener("click", () => {

    inputName.value = "";
    inputValue.value = "";
    containerAppliedValue.innerText = "0,00"
    containerValue.dataset.value = 0;
    containerAppliedValue.dataset.appliedValue = 0;
    cleanContainer();



    initialSection.classList.remove("hide-content");
    operationsSection.classList.add("hide-content");
})



function displayContainerOperation(container) {
    btnMenuFunctions[container].addEventListener("click", () => {
        containerOperationMenu.classList.add("hide-content");
        performOperation.classList.remove("hide-content");
        containerOperation[container].classList.remove("hide-content");
    })
}


function hideContainerOperation(container) {
    btnClose[container].addEventListener("click", () => {



        performOperation.classList.add("hide-content");
        containerOperation[container].classList.add("hide-content");
        containerOperationMenu.classList.remove("hide-content");

        inputOperations[0].value = "";
        inputOperations[1].value = "";
    })
}



buttonOperations[1].addEventListener("click", () => {

    if (inputOperations[0].value == "") {


        displayContainerAlert(0);

    } else {

        valorAlterado = parseInt(inputOperations[0].value);
        let valorApresentado = parseInt(inputOperations[0].value).toLocaleString('pt-br', { minimumFractionDigits: 2 }); //deixar isso aqui mais bunito
        containerValue.dataset.value = parseInt(containerValue.dataset.value) + valorAlterado;
        let valorTotal = parseInt(containerValue.dataset.value);
        containerValue.innerText = valorTotal.toLocaleString('pt-br', { minimumFractionDigits: 2 });


        containerAppliedValue.dataset.appliedValue = parseInt(containerAppliedValue.dataset.appliedValue) + valorAlterado;
        let valorAplicado = parseInt(containerAppliedValue.dataset.appliedValue);
        containerAppliedValue.innerText = valorAplicado.toLocaleString('pt-br', { minimumFractionDigits: 2 });

        displayContainerAlert(2);
        criarBlocoExtrato("Deposito", valorApresentado, "./assets/images/icons/icone-deposito.png");

        inputOperations[0].value = "";
    }





})



buttonOperations[2].addEventListener("click", () => {

    let verificarSaldo = parseInt(containerValue.dataset.value);
    valorAlterado = parseInt(inputOperations[1].value);

    if (inputOperations[1].value == "") {

        displayContainerAlert(0);

    } else {

        if (verificarSaldo >= valorAlterado) {
            containerValue.dataset.value = parseInt(containerValue.dataset.value) - valorAlterado;
            let valorTotal = parseInt(containerValue.dataset.value);

            containerValue.innerText = valorTotal.toLocaleString('pt-br', { minimumFractionDigits: 2 });
            let valorApresentado = parseInt(inputOperations[1].value).toLocaleString('pt-br', { minimumFractionDigits: 2 });

            criarBlocoExtrato("Saque", valorApresentado, "./assets/images/icons/icone-saque.png");

            displayContainerAlert(2);
            inputOperations[1].value = "";
        } else {

            displayContainerAlert(1);
            inputOperations[1].value = "";
        }

    }





})


function criarBlocoExtrato(texto, valor, src) {

    
    
    

    container = document.createElement("div");
    container.classList.add("container-extrato__container");
    containerExtrato.append(container);

    containerInf = document.createElement("div");
    containerInf.classList.add("container__inf-extrato");
    container.append(containerInf);

    title = document.createElement("h3");
    title.classList.add("inf-extrato__title");
    title.innerText = texto;
    containerInf.append(title);

    labelValor = document.createElement("span");
    labelValor.classList.add("inf-extrato__valor-operacao");
    labelValor.innerText = "Valor da operação:"
    containerInf.append(labelValor);

    valorOperacao = document.createElement("div");
    valorOperacao.classList.add("valor-operacao__valor");
    valorOperacao.innerText = `R$ ${valor}`;
    labelValor.append(valorOperacao);

    img = document.createElement("img");
    img.classList.add("container__img");
    img.src = src;
    img.alt = "icone da operação realizada";
    container.append(img);


}

function cleanContainer() {

    let deleteContainer = document.querySelectorAll(".container-extrato__container");

    for(let i = 0; i < deleteContainer.length; i++) {
        deleteContainer[i].remove();
    }
   
}


function displayContainerAlert(element) {
    containerAlert.classList.remove("hide-content");
    boxAlert[element].classList.remove("hide-content");
}

function hideAlert() {

    for (let i = 0; i < boxAlert.length; i++) {
        buttonAlert[i].addEventListener("click", () => {
            containerAlert.classList.add("hide-content");
            boxAlert[i].classList.add("hide-content");
        })
    }

}


