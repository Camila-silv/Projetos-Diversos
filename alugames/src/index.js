const buttons = document.querySelectorAll("[data-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const validation = button.classList.contains("button-rented");
    const card = button.parentNode.childNodes[1];
    if (validation) {
      modifyClass(button, card);
    } else {
      modifyClass(button, card);
    }
  });
});

function modifyClass(button, card) {
  button.classList.toggle("button-rented");
  card.classList.toggle("overlay");
  button.innerText == "Alugar"
    ? (button.innerText = "Devolver")
    : (button.innerText = "Alugar");
}
