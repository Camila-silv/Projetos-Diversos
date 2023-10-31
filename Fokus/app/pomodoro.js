const pomodoroTime = document.querySelector("[data-pomodoro-time]");
let intervaloId = null;

buttonPomodoro.addEventListener("click", () => {
  if (buttonPomodoro.dataset.active === "true") {
    buttonPomodoro.innerHTML = `<img
      src="./assets/images/Ícones/play_arrow.svg"
      alt=""
      class="button-start__icon"
      
    />Começar`;
    clearInterval(intervaloId);
    intervaloId = null;
    buttonPomodoro.dataset.active = "false";
    document.getElementById("stop-audio").play();
    return;
  }

  buttonPomodoro.innerHTML = `<img
      src="./assets/images/Ícones/pause.svg"
      alt=""
      class="button-start__icon"
      
    />Pause`;

  buttonPomodoro.dataset.active = "true";
  document.getElementById("play-audio").play();
  runPomodoro();
});

function runPomodoro() {
  intervaloId = setInterval(elapsedTimeInSeconds, 1000);
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

