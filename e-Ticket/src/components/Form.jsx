import { useState } from "react";
import PropTypes from "prop-types";

export default function Form({
  setPista,
  setCadeirInferior,
  setCadeiraSuperior,
  quantidadePista,
  quantidadeCadeiraSuperior,
  quantidadeCadeiraInferior,
  setPopUp,
}) {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("Cadeira superior");

  const buyTicket = (e) => {
    e.preventDefault();

    if (isNaN(parseInt(input))) {
      alert("Esse campo aceita apenas números.");

      setInput(" ");
      return;
    } else {
      switch (select) {
        case "Pista":
          checkQuantity(setPista, input, quantidadePista);
          break;
        case "Cadeira superior":
          checkQuantity(setCadeiraSuperior, input, quantidadeCadeiraSuperior);

          break;
        case "Cadeira inferior":
          checkQuantity(setCadeirInferior, input, quantidadeCadeiraInferior);
          break;
      }
    }

    setInput("");
  };

  const checkQuantity = (set, input, selectedQuantity) => {
    if (parseInt(input) > selectedQuantity) {
      alert(
        "Quantidade de ingressos maior que a quantidade disponivel para venda, escolha uma quantidade menor."
      );
      return;
    } else {
      set((selectedQuantity -= input));
      setPopUp(true);
    }
  };

  return (
    <form className="purchase-section__purchase-form">
      <div className="purchase-form__container-ticket-type input-group">
        <label htmlFor="" className="label">
          Escolha o tipo
        </label>

        <select
          name="select"
          className="container-ticket-type__select-ticket-type select"
          onChange={(e) => setSelect(e.target.value)}
        >
          <option value="Cadeira inferior">Cadeira inferior</option>
          <option value="Cadeira superior">Cadeira superior</option>
          <option value="Pista">Pista</option>
        </select>
      </div>
      <div className="purchase-form__container-amount input-group">
        <label htmlFor="inputAmount" className="label">
          Qtde.
        </label>
        <input
          type="number"
          className="container-amount__input-amount input"
          placeholder="00"
          value={input}
          id="inputAmount"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button className="purchase-form__button" onClick={buyTicket}>
        Comprar
      </button>
    </form>
  );
}

Form.propTypes = {
  setPista: PropTypes.func,
  setCadeirInferior: PropTypes.func,
  setCadeiraSuperior: PropTypes.func,
  setPopUp: PropTypes.func,
  quantidadePista: PropTypes.number,
  quantidadeCadeiraSuperior: PropTypes.number,
  quantidadeCadeiraInferior: PropTypes.number,
};
