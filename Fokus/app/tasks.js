const tasksList = document.querySelector("[data-tasks-list]");
const buttonAddTask = document.querySelector("[data-button-add-task]");
const containerCreateTask = document.querySelector(
  "[data-container-created-task]"
);
const buttonCancelTaskCreation = document.querySelector(
  "[data-button-cancel-task-creation]"
);
const buttonSaveTask = document.querySelector("[data-button-save-task]");
const buttonEditTask = document.querySelectorAll("[data-button-edit]");
const buttonDelete = document.querySelector("[data-button-delete]");

const mytasks = JSON.parse(localStorage.getItem("myTasks")) || [];

buttonAddTask.addEventListener("click", () => {
  const title = containerCreateTask.children[0];
  containerCreateTask.classList.remove("hidden-content");
  title.innerText = "Adicionando tarefa";
});

buttonCancelTaskCreation.addEventListener("click", () => {
  const buttonEditTask = document.querySelectorAll("[data-button-edit]");
  containerCreateTask.classList.add("hidden-content");
  buttonEditTask.forEach((button) => {
    button.dataset.activeModification = false;
  });

  clearField();
});

mytasks.forEach((task) => {
  createdTask(task.name);
  
});

buttonSaveTask.addEventListener("click", () => {
  const title = containerCreateTask.children[0].innerText;
  const newTask = containerCreateTask.children[1].value;

  if (title === "Modificando tarefa") {
    if (newTask === "") {
      alert("A tarefa precisa ter um nome.");
      return;
    } else {
      newTaskName();
    }
  } else if (newTask === "") {
    alert("Necessario escrever uma tarefa.");
  } else {
    mytasks.push({
      name: newTask,
      status: false,
    });
    createdTask(newTask);
    clearField();
  }

  console.log("cheguei")
  localStorage.setItem("myTasks", JSON.stringify(mytasks));
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
  button.dataset.buttonEdit = "";
  button.dataset.activeModification = false;
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-button-edit]").forEach((item) => {
      item.dataset.activeModification = false;
    });
    const title = containerCreateTask.children[0];
    containerCreateTask.classList.remove("hidden-content");
    title.innerText = "Modificando tarefa";
    button.dataset.activeModification = true;
  });

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

buttonEditTask.forEach((button) => {
  button.addEventListener("click", () => {
    buttonEditTask.forEach((item) => {
      item.dataset.activeModification = false;
    });
    console.log(buttonEditTask);
    const title = containerCreateTask.children[0];
    containerCreateTask.classList.remove("hidden-content");
    title.innerText = "Modificando tarefa";
    button.dataset.activeModification = true;
  });
});

buttonDelete.addEventListener("click", (ev) => {
  const title = ev.target.parentNode.parentNode.children[0].innerText;

  if (title === "Modificando tarefa") {
    document.querySelectorAll("[data-button-edit]").forEach((item) => {
      if (item.dataset.activeModification === "true") {
        for (let i = 0; i < mytasks.length; i++) {
          if (mytasks[i].name === item.parentNode.children[1].innerText) {
            mytasks.splice(i, 1);
            localStorage.setItem("myTasks", JSON.stringify(mytasks));
          }
        }

        item.parentNode.remove();
        containerCreateTask.classList.add("hidden-content");
      }
    });
  }
});

function newTaskName() {
  document.querySelectorAll("[data-active-modification]").forEach((item) => {
    const newTaskName = document.querySelector("[data-input]").value;
    if (item.dataset.activeModification === "true") {
      mytasks.forEach((task) => {
        if (task.name == item.parentNode.children[1].innerText) {
          task.name = newTaskName;
          localStorage.setItem("myTasks", JSON.stringify(mytasks));
          return;
        }
      });

      item.parentNode.children[1].innerText = newTaskName;
      document.querySelector("[data-input]").value = "";
      containerCreateTask.classList.add("hidden-content");

      return;
    }
  });
}
