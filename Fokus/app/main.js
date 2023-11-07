import { showBannerContent, modifyStyle } from "./showContent.js";

const availabilityOptions = document.querySelectorAll(
  "[data-availability-options]"
);
const musicStartControl = document.querySelector("[data-option-control]");
const focusMusic = document.getElementById("audio-focus-music");
const bannerContent = [
  {
    title: `<h2 class="container-banner-title__banner-title">
    Otimize sua produtividade,
    <strong class="banner-title--strong"
      >mergulhe no que importa</strong
    >
  </h2>`,
    img: "./assets/images/Imagem foco.png",
    time: "25:00",
  },
  {
    title: `<h2 class="container-banner-title__banner-title">
    Que tal dar uma respirada?
    <strong class="banner-title--strong"
      >Faça uma pausa curta!</strong
    >
  </h2>`,
    img: "./assets/images/Imagem descanso curto.png",
    time: "05:00",
  },
  {
    title: `<h2 class="container-banner-title__banner-title">
    Hora de voltar à superfície.
    <strong class="banner-title--strong"
      >Faça uma pausa longa.</strong
    >
  </h2>`,
    img: "./assets/images/Imagem descanso longo.png",
    time: "15:00",
  },
];
const buttonClearTasks = document.querySelector("[data-button-clear-tasks]");
const containeClearTasks = document.querySelector("[data-container-clear-tasks]");

buttonClearTasks.addEventListener("click", () => {
  containeClearTasks.classList.toggle("hide-content");
});

availabilityOptions.forEach((button) => {
  button.addEventListener("click", () => {
    availabilityOptions.forEach((button) => {
      button.classList.remove("button-availability-options--selected");
    });

    switch (button.id) {
      case "focus":
        showBannerContent(
          bannerContent[0].title,
          bannerContent[0].img,
          bannerContent[0].time
        );

        modifyStyle("focus");
        tempoDecorrido = 1500;
        break;
      case "short-rest":
        showBannerContent(
          bannerContent[1].title,
          bannerContent[1].img,
          bannerContent[1].time
        );

        modifyStyle("short-rest");
        tempoDecorrido = 300;
        break;
      case "long-rest":
        showBannerContent(
          bannerContent[2].title,
          bannerContent[2].img,
          bannerContent[2].time
        );

        modifyStyle("long-rest");
        tempoDecorrido = 900;
        break;
    }
  });
});

musicStartControl.addEventListener("click", () => {
  musicStartControl.classList.toggle("option-control--active");
  musicStartControl.children[0].classList.toggle("control--active");

  if (musicStartControl.classList.contains("option-control--active")) {
    focusMusic.play();
    focusMusic.loop = "true";
  } else {
    focusMusic.pause();
  }
});

document
  .querySelector("[data-button-add-task]")
  .addEventListener("mouseover", () => {
    document.querySelector("[data-button-image]").src =
      "./assets/images/Ícones/Add_branco.png";
  });

document
  .querySelector("[data-button-add-task]")
  .addEventListener("mouseout", () => {
    document.querySelector("[data-button-image]").src =
      "./assets/images/Ícones/Add_lilás.png";
  });

