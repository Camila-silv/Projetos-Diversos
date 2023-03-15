let hours = document.querySelector(".watch-container__watch-hr");
let minutes = document.querySelector(".watch-container__watch-min");
const arrow = document.querySelectorAll(".container__arrow");
const patientList = document.querySelector(".waiting-section__patient-list");
let input = document.querySelector(".form-add-patient__input");
const addPatientButton = document.querySelector(".form-add-patient__button");
let contador = 0;
let incrementador = 0;
let decremento = 0;
let slider = document.querySelector(".waiting-section__patient-list");
let hrs;
let min;
const relogio = setInterval(() => {
  let dateToday = new Date();
  hrs = dateToday.getHours();
  min = dateToday.getMinutes();

  hours.textContent = hrs;
  hours.dataset.hours = hrs;
  minutes.textContent = min;
  minutes.dataset.min = min;
});

let item;
let pacient;
let containerHrs;
let spanHrs;
let spanmins;

let patientName;
let attendPtient = document.querySelector(".patient-call__button");

let label = document.querySelectorAll(".call-box__label");

addPatientButton.addEventListener("click", (ev) => {
  ev.preventDefault();

  patientName = input.value;
  let changedPatientName = `${patientName[0].toUpperCase()}${patientName
    .slice(1)
    .toLowerCase()}`;

  addItem(changedPatientName);
  input.value = "";
});

function addItem(patientsName) {
  item = document.createElement("li");
  item.classList.add("patient-list__items");
  patientList.append(item);

  pacient = document.createElement("span");
  pacient.classList.add("items__patient");
  pacient.id = `patient0${incrementador}`;
  pacient.textContent = patientsName;
  item.append(pacient);

  containerHrs = document.createElement("div");
  containerHrs.classList.add("items__hours");
  item.append(containerHrs);

  spanHrs = document.createElement("span");
  spanHrs.classList.add("hours__hrs");
  spanHrs.textContent = `${hours.getAttribute("data-hours")}:`;
  containerHrs.append(spanHrs);

  spanmins = document.createElement("span");
  spanmins.classList.add("hours__hrs");
  spanmins.textContent = `${minutes.getAttribute("data-min")}`;
  containerHrs.append(spanmins);

  incrementador++;
}


function dynamicArrow(element) {
  arrow[element].addEventListener("click", () => {
    console.log(contador > -1000);
    switch (element) {
      case 0:
        if (contador < 0) {
          contador += 30;
          slider.style.left = `${contador}px`;
        }
        return;
      case 1:
        if (contador > -1000) {
          contador -= 30;
          slider.style.left = `${contador}px`;
        }
        return;
    }
  });
}

dynamicArrow(0);
dynamicArrow(1);

attendPtient.addEventListener("click", () => {


  let displayName = document.getElementById(`patient0${decremento}`);
  label[0].textContent = displayName.innerText;
  label[1].textContent =`00${parseInt(Math.random(1, 7) * 10)}`;

  
  decremento++;
  deleteElement();

});

function deleteElement() {
  
  let deleteItem = document.querySelector(".patient-list__items");

  deleteItem.remove();
}


