const input = document.querySelector("[data-friend-name-input]");
const addButton = document.querySelector("[data-add-button]");
const friends = document.querySelector("[data-friends]");
const playButton = document.querySelector("[data-play-button]");
const clearButton = document.querySelector("[data-clear-button]");
const chosenFriends = document.querySelector("[data-chosen-friends]");

addButton.addEventListener("click", (ev) => {
  ev.preventDefault();

  if (input.value === "") {
    alert("Necessario inserir o nome do amigo.");
    return;
  } else if (friends.innerHTML == "") {
    friends.innerHTML += `${input.value}`;
  } else {
    friends.innerHTML += `, ${input.value}`;
  }

  input.value = "";
});

playButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  const friendList = friends.innerHTML.split(",");

  if (chosenFriends.innerHTML !== "") {
    chosenFriends.innerHTML = "";
  }

  if (friends.innerHTML.split(",").length < 3) {
    alert("Precisamos de 4 ou mais amigos para iniciar o sorteio.");
    return;
  }

  for (let i = 0; i < friendList.length; i++) {
    if (i === friendList.length - 1) {
      chosenFriends.innerHTML += `${friendList[i]} -> ${friendList[0]}`;
      return;
    }

    chosenFriends.innerHTML += `${friendList[i]} -> ${friendList[i + 1]}<br/>`;
  }
});

clearButton.addEventListener("click", (ev) => {
  ev.preventDefault();

  friends.innerHTML = "";
  chosenFriends.innerHTML = "";
});
