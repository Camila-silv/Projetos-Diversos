let alertBox = document.querySelectorAll(".list-alerts__alert-items");
let itemMenu = document.querySelectorAll(".list-menu__item-menu");
let buttonClose = document.querySelectorAll(".alert-tems__button-close");

let mainSection = document.querySelector(".main-content__main-section");
let sectionAlerts = document.querySelector(".main-content__section-alerts");

let buttonInitialize = document.querySelector(".initialize-program-section__startup_container");
let sectionProgramaInitialize = document.querySelector(".main-content__initialize-program-section");



displayAlert();
hidenContent();

function displayAlert() {

    for(let i = 0; i < itemMenu.length; i++){

        itemMenu[i].addEventListener("click", () => {
            mainSection.classList.add("hide-content");
            alertBox[i].classList.remove("hiden-alert");
            sectionAlerts.classList.remove("hiden-alert");
        })
    }
}

function hidenContent() {

    for(let i = 0; i < itemMenu.length; i++){

        if( i == 0 || i == 1 || i == 2){
            buttonClose[i].addEventListener("click", () => {
                alertBox[i].classList.add("hiden-alert");
                sectionAlerts.classList.add("hiden-alert");
                mainSection.classList.remove("hide-content");
            })
        } else {
            buttonClose[i].addEventListener("click", () => {
                alertBox[i].classList.add("hiden-alert");
                sectionAlerts.classList.add("hiden-alert");
                sectionProgramaInitialize.classList.remove("hide-content");
            })
        }

       
    }
    
}


buttonInitialize.addEventListener("click", () => {
    sectionProgramaInitialize.classList.add("hide-content");
    mainSection.classList.remove("hide-content");
})