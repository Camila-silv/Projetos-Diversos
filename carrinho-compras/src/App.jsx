import { useState } from "react";
import Form from "./components/Form";
import CartSection from "./components/CartSection";

let count = 0;
const increase = () => {
  return count++;
};
let finalPurchasePrice = 0;

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState("Fone de ouvido");
  const [amountInput, setAmountInput] = useState("");
  const [shoppingList, setShoppingList] = useState([]);
  const [totalAmountPayable, setTotalAmountPayable] = useState("--,--");

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

  const addProduct = (ev) => {
    ev.preventDefault();

    switch (selectedProduct) {
      case "Oculus VR":
        createElement(products[0], amountInput);
        break;
      case "Fone de ouvido":
        createElement(products[2], amountInput);
        break;
      case "Celular":
        createElement(products[1], amountInput);
        break;
    }
  };

  function createElement(product, amount) {
    const newItem = {
      name: product.name,
      volume: amount,
      value: product.value,
    };

    setShoppingList([...shoppingList, newItem]);
    finalPurchasePrice += accountingForValues(product, parseInt(amount));

    setTotalAmountPayable(
      finalPurchasePrice.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
    );

    setAmountInput("");
    return count++;
  }

  const accountingForValues = (product, amount) => {
    return product.value * amount;
  };

  const cleanButton = (ev) => {
    ev.preventDefault();

    setShoppingList([]);
    finalPurchasePrice = 0;
    setTotalAmountPayable("R$ --,--");
  };

  return (
    <>
      <main className="main-content">
        <div className="main-content__container-main-content">
          <div>
            <section className="container-main-content__shopping-section">
              <h1 className="shopping-section__shopping-section-title">
                Carrinho de
                <span className="shopping-section-title--color">compras</span>
              </h1>

              <Form
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
                amountInput={amountInput}
                setAmountInput={setAmountInput}
                addProduct={addProduct}
                cleanButton={cleanButton}
              />
            </section>
            <img
              src="public/oculos.png"
              alt="Imagem ilustrativa do produto Oculus"
              className="container-main-content__img"
            />
          </div>
          <CartSection
            shoppingList={shoppingList}
            increase={increase}
            totalAmountPayable={totalAmountPayable}
          />
        </div>
      </main>
    </>
  );
}
