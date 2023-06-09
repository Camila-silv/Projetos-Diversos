import { useState } from "react";

export default function MainContent() {
  const [password, setPassword] = useState("");
  const characterList = [
    "a",
    "b",
    "c",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
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
    "A",
    "B",
    "C",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "-",
    "+",
    "_",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  const arrLength = characterList.length;

  const increment = () => {
    setPassword((currentPassword) => {
      currentPassword = " ";
      const buttons = document.querySelectorAll(".container-buttons__button");

      buttons[1].classList.remove("selected-button");
      buttons[0].classList.add("selected-button");

      for (let i = 0; i < 10; i++) {
        const randomNumber = parseInt(Math.random() * arrLength);
        currentPassword += characterList[randomNumber];
      }

      return currentPassword;
    });
  };

  const copy = () => {
    const buttons = document.querySelectorAll(".container-buttons__button");

    buttons[0].classList.remove("selected-button");
    buttons[1].classList.add("selected-button");

    navigator.clipboard.writeText(password);
  };

  return (
    <main className="main-content">
      <section className="main-content__section-main-content">
        <h1 className="section-main-content__title">Gerador de senhas</h1>

        <div className="section-main-content__container-buttons">
          <button
            className="container-buttons__button default-button"
            onClick={increment}
          >
            Gerar!
          </button>

          <button
            className="container-buttons__button default-button"
            onClick={copy}
          >
            Copiar
          </button>
        </div>

        <span className="section-main-content__generated-password">
          {password}
        </span>
      </section>
    </main>
  );
}
