const sectionAlerts = document.querySelector(".main-content__section-alerts");
const containersAlerts = document.querySelectorAll(
  ".section-alerts__container-alert"
);
const wordInput = document.querySelector(".container__input");
const reverseWordButton = document.querySelector(".container__button");
const buttonClose = document.querySelectorAll(".container-alert__button-close");
let newWord = "";
let words = document.querySelectorAll(".label__name");

const wordFilter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "m",
  "ç",
  "n",
  "o",
  "p",
  "l",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function reverseWord() {
  reverseWordButton.addEventListener("click", () => {
    let value = wordInput.value;

    let contador = value.length;

    for (let j = 0; j < value.length; j++) {
      if (wordFilter.includes(value[j].toLowerCase()) == false) {
        newWord = "";
        wordInput.value = "";
        return displayAlert(2);;
      }
    }

    for (let i = contador - 1; i >= 0; i--) {
      newWord += value[i];
    }

    if (newWord == value) {
      displayAlert(0);
    } else {
      displayAlert(1);
      words[0].innerText = value;
      words[1].innerText = newWord;
    }
  });
}

function closeAlertBoxButton() {
  for (let i = 0; i < buttonClose.length; i++) {
    buttonClose[i].addEventListener("click", () => {
      sectionAlerts.classList.add("hide-content");
      containersAlerts[i].classList.add("hide-content");
      newWord = "";
      wordInput.value = "";
    });
  }
}

function displayAlert(element) {
  sectionAlerts.classList.remove("hide-content");
  containersAlerts[element].classList.remove("hide-content");
}

reverseWord();
closeAlertBoxButton();
