const addProductButton = document.querySelector("[data-add-product-button]");
const selectedProduct = document.getElementsByName("selectProduct")[0];
const amountInput = document.getElementById("amountInput");
const shoppingList = document.querySelector("[data-shopping-list]");
const cleanButton = document.querySelector("[data-clean-button]");
const totalAmountPayable = document.querySelector(
  "[data-total-amount-payable]"
);
let finalPurchasePrice = 0;

const products = [
  {
    name: "Oculus VR",
    value: 5000,
  },
  {
    name: "Celular",
    value: 1400,
  },
  {
    name: "Fone de ouvido",
    value: 100,
  },
];

addProductButton.addEventListener("click", (ev) => {
  ev.preventDefault();

  switch (selectedProduct.value) {
    case "Oculus VR":
      createElement(products[0], amountInput.value);
      break;
    case "Fone de ouvido":
      createElement(products[2], amountInput.value);
      break;
    case "Celular":
      createElement(products[1], amountInput.value);
      break;
  }
});

function createElement(product, amount) {
  const li = document.createElement("li");
  li.classList.add("shopping-list__shopping-list-item");

  const spanAmount = document.createElement("span");
  spanAmount.classList.add("shopping-list-item--color");
  spanAmount.innerText = `${amount}x `;

  const spanValue = document.createElement("span");
  spanValue.classList.add("shopping-list-item--color");
  spanValue.innerText = ` ${product.value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}`;

  li.append(spanAmount, product.name, spanValue);
  shoppingList.append(li);
  finalPurchasePrice += accountingForValues(product, parseInt(amount));
  totalAmountPayable.innerText = finalPurchasePrice.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  amountInput.value = "";
}

function accountingForValues(product, amount) {
  return product.value * amount;
}

cleanButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  let items = document.querySelectorAll(".shopping-list__shopping-list-item");
  items.forEach((item) => {
    item.remove();
  });
  finalPurchasePrice = 0;
  totalAmountPayable.innerText = "R$ --,--";
});
