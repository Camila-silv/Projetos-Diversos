let chosenNumber = document.querySelectorAll(".chosen-number");
let containerResult = document.querySelectorAll(".container-result");
let containerSliders = document.querySelector(
  ".container-multiplication-table__sliders "
);
let inputButton = document.querySelector(".container-input__button");
let input = document.querySelector(".container-input__input");
let arrows = document.querySelectorAll(".section-multiplication-table__button");
let buttonAlert = document.querySelector(".invalid-input__button");
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let containerAlert = document.querySelector(".container-alerts");
let invalidInput = document.querySelector(".container-alerts__invalid-input");

clickOnArrow();
buttonInput();

function clickOnArrow() {
  arrows[0].addEventListener("click", () => {
    containerSliders.classList.remove("arrow-right");
    containerSliders.classList.add("arrow-left");
  });

  arrows[1].addEventListener("click", () => {
    containerSliders.classList.remove("arrow-left");
    containerSliders.classList.add("arrow-right");
  });
}

function buttonInput() {
  inputButton.addEventListener("click", () => {
    let inputValue = input.value;

    for (let i = 0; i < inputValue.length; i++) {
      if (numbers.includes(inputValue[i])) {
        for (let i = 0; i < chosenNumber.length; i++) {
          chosenNumber[i].textContent = inputValue;
          input.value = "";
        }

        for (let i = 0; i < containerResult.length; i++) {
          containerResult[i].innerText = parseInt(inputValue) * i;
        }
      } else {
        displayAlert();
        input.value = "";
      }
    }
  });
}

buttonAlert.addEventListener("click", () => {
  containerAlert.classList.add("hide-content");
  invalidInput.classList.add("hide-content");
});

function displayAlert() {
  containerAlert.classList.remove("hide-content");
  invalidInput.classList.remove("hide-content");
}
