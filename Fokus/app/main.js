const availabilityOptions = document.querySelectorAll(
  "[data-availability-options]"
);
const containerBannerTitle = document.querySelector(
  "[data-container-banner-title]"
);
const bannerImg = document.querySelector("[data-banner-img]");
const root = document.getElementById("root");
const pomodoroTime = document.querySelector("[data-pomodoro-time]");
const musicStartControl = document.querySelector("[data-option-control]");
const buttonPomodoro = document.querySelector("[data-startpomodoro]");
let tempoDecorrido = 1500;

availabilityOptions.forEach((button) => {
  button.addEventListener("click", () => {
    for (let i = 0; i < availabilityOptions.length; i++) {
      availabilityOptions[i].dataset.active = "false";
    }
    availabilityOptions.forEach((button) => {
      button.classList.remove("button-availability-options--selected");
    });
    if (button.id === "foco") {
      containerBannerTitle.innerHTML = `<h2 class="container-banner-title__banner-title">
            Otimize sua produtividade,
            <strong class="banner-title--strong"
              >mergulhe no que importa</strong
            >
          </h2>`;
      bannerImg.src = "./assets/images/Imagem foco.png";
      root.classList.remove("short-rest");
      root.classList.remove("long-rest");
      root.classList.add("focus");
      button.classList.add("button-availability-options--selected");
      pomodoroTime.textContent = "25:00";
      tempoDecorrido = 1500;
    } else if (button.id === "descanso-curto") {
      containerBannerTitle.innerHTML = `<h2 class="container-banner-title__banner-title">
        Que tal dar uma respirada?
        <strong class="banner-title--strong"
          >Faça uma pausa curta!</strong
        >
      </h2>`;
      bannerImg.src = "./assets/images/Imagem descanso curto.png";
      root.classList.remove("long-rest");
      root.classList.remove("focus");
      root.classList.add("short-rest");
      button.classList.add("button-availability-options--selected");
      pomodoroTime.textContent = "05:00";
      tempoDecorrido = 300;
    } else {
      containerBannerTitle.innerHTML = `<h2 class="container-banner-title__banner-title">
        Hora de voltar à superfície.
        <strong class="banner-title--strong"
          >Faça uma pausa longa.</strong
        >
      </h2>`;
      bannerImg.src = "./assets/images/Imagem descanso longo.png";
      root.classList.remove("focus");
      root.classList.remove("short-rest");
      root.classList.add("long-rest");
      button.classList.add("button-availability-options--selected");
      pomodoroTime.textContent = "15:00";
      tempoDecorrido = 900;
    }
  });
});

musicStartControl.addEventListener("click", () => {
  musicStartControl.classList.toggle("option-control--disabled");
  musicStartControl.children[0].classList.toggle("control--disabled");
  console.log(musicStartControl.children[0]);
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

// ----------------------------------- parte pomodoro ----------------------------------

buttonPomodoro.addEventListener("click", () => {
  runPomodoro();
});

function runPomodoro() {
  setInterval(elapsedTimeInSeconds, 1000);
}

function elapsedTimeInSeconds() {
  const time = new Date(tempoDecorrido * 1000);
  const formattedTime = time.toLocaleTimeString("pt-Br", {
    minute: "2-digit",
    second: "2-digit",
  });
  pomodoroTime.innerHTML = `${formattedTime}`;

  tempoDecorrido--;
}
