const buttons = document.querySelectorAll(".section-game__button");
const players = document.querySelectorAll(".container__players");
let change = false;
const alertSection = document.querySelector(".main-content__alert-section");
const alert = document.querySelectorAll(".alert-section__alert");
const buttonAlert = document.querySelectorAll(".alert__close");
const lblAlert = document.querySelector(".lbl__player");
const buttonRestart = document.querySelector(
  ".main-content__container-restart-button"
);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent == "X" || button.textContent == "O") {
      displayAlert(1);
    } else {
      if (change == true) {
        button.textContent = "O";
        addStyle(1, 0);
        winningPlayer(0, 1, 2, "O");
        winningPlayer(3, 4, 5, "O");
        winningPlayer(6, 7, 8, "O");

        winningPlayer(0, 3, 6, "O");
        winningPlayer(1, 4, 7, "O");
        winningPlayer(2, 5, 8, "O");

        winningPlayer(0, 4, 8, "O");
        winningPlayer(2, 4, 6, "O");
        empate();
        lblAlert.textContent = "'O'";

        change = false;
      } else if (change == false) {
        button.textContent = "X";
        winningPlayer(0, 1, 2, "X");
        winningPlayer(3, 4, 5, "X");
        winningPlayer(6, 7, 8, "X");

        winningPlayer(0, 3, 6, "X");
        winningPlayer(1, 4, 7, "X");
        winningPlayer(2, 5, 8, "X");

        winningPlayer(0, 4, 8, "X");
        winningPlayer(2, 4, 6, "X");
        lblAlert.textContent = "'X'";
        change = true;
        empate();
        addStyle(0, 1);
      }
    }
  });
});

function addStyle(element0, element1) {
  players[element0].classList.remove("container__players--selected");
  players[element1].classList.add("container__players--selected");
}

function winningPlayer(element0, element1, element2, content) {
  if (
    buttons[element0].textContent == content &&
    buttons[element1].textContent == content &&
    buttons[element2].textContent == content
  ) {
    buttons.forEach((elements) => {
      elements.setAttribute("disabled", "disabled");
    });

    displayAlert(0);
  }
}

function displayAlert(element) {
  alertSection.classList.remove("hide-content");
  alert[element].classList.remove("hide-content");
}

function empate() {
  if (
    buttons[0].textContent != "" &&
    buttons[1].textContent != "" &&
    buttons[2].textContent != "" &&
    buttons[3].textContent != "" &&
    buttons[4].textContent != "" &&
    buttons[5].textContent != "" &&
    buttons[6].textContent != "" &&
    buttons[7].textContent != "" &&
    buttons[8].textContent != ""
  ) {
    displayAlert(2);
  }
}

function hideAlert(element) {
  buttonAlert[element].addEventListener("click", () => {
    alertSection.classList.add("hide-content");
    alert[element].classList.add("hide-content");
  });
}

hideAlert(0);
hideAlert(1);
hideAlert(2);

buttonRestart.addEventListener("click", () => {
  buttons.forEach((elements) => {
    elements.removeAttribute("disabled");
  });

  buttons.forEach((elements) => {
    elements.textContent = "";
  });
});


