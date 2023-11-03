const tasksList = document.querySelector("[data-tasks-list]");
const buttonAddTask = document.querySelector("[data-button-add-task]");
const containerCreateTask = document.querySelector(
  "[data-container-created-task]"
);
const buttonCancelTaskCreation = document.querySelector(
  "[data-button-cancel-task-creation]"
);
const buttonSaveTask = document.querySelector("[data-button-save-task]");

const mytasks = [
  {
    name: "Estudar",
    status: false,
  },
  {
    name: "Lavar roupa",
    status: false,
  },
];

buttonAddTask.addEventListener("click", () => {
  containerCreateTask.classList.remove("hidden-content");
});

buttonCancelTaskCreation.addEventListener("click", () => {
  containerCreateTask.classList.add("hidden-content");
  clearField();
});

mytasks.forEach((task) => {
  createdTask(task.name);
});

buttonSaveTask.addEventListener("click", () => {
  const newTask = containerCreateTask.children[1].value;
  mytasks.push({
    name: newTask,
  });
  createdTask(newTask);
  clearField();
});

function createdTask(task) {
  const li = document.createElement("li");
  li.classList.add("list-of-created-tasks__created-tasks");
  li.dataset.status = false;

  const img = document.createElement("img");
  img.classList.add("created-tasks__icon");
  img.src = "./assets/images/Ícones/Check_branco.svg";

  const span = document.createElement("span");
  span.classList.add("created-tasks__task-name");
  span.innerText = task;

  const button = document.createElement("button");
  button.classList.add("created-tasks__button-edit");

  const imgButton = document.createElement("img");
  imgButton.classList.add("created-tasks__icon", "created-tasks__icon--custom");
  imgButton.src = "./assets/images/Ícones/edit (1).png";

  button.append(imgButton);

  li.append(img, span, button);
  tasksList.append(li);
}


function clearField() {
    containerCreateTask.children[1].value = "";
}