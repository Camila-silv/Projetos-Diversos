import PropTypes from "prop-types";

export default function Form({
  selectedProduct,
  setSelectedProduct,
  amountInput,
  setAmountInput,
  addProduct,
  cleanButton,
}) {
  return (
    <form className="shopping-section__shopping-section-form">
      <div className="shopping-section-form__group-input">
        <label htmlFor="selectProduct" className="group-input__label">
          Produto
        </label>
        <select
          name="selectProduct"
          id="selectProduct"
          className="group-input__select"
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
        >
          <option
            value="Fone de ouvido"
            className="group-input__select--font-family"
          >
            Fone de ouvido - R$100,00
          </option>
          <option value="Celular" className="group-input__select--font-family">
            Celular - R$1.400,00
          </option>
          <option
            value="Oculus VR"
            className="group-input__select--font-family"
          >
            Oculus VR - R$5.000,00
          </option>
        </select>
      </div>

      <div className="shopping-section-form__group-input">
        <label htmlFor="amountInput" className="group-input__label">
          Qtde.
        </label>
        <input
          type="number"
          id="amountInput"
          placeholder="100"
          className="group-input__input"
          value={amountInput}
          onChange={(ev) => setAmountInput(ev.target.value)}
        />
      </div>

      <div className="shopping-section-form__container-buttons">
        <button
          className="container-buttons__buttons"
          onClick={addProduct}
        >
          Adicionar
        </button>
        <button
          className="container-buttons__buttons"
          onClick={(ev) => cleanButton(ev)}
        >
          Limpar
        </button>
      </div>
    </form>
  );
}

Form.propTypes = {
  selectedProduct: PropTypes.string,
  setSelectedProduct: PropTypes.func,
  amountInput: PropTypes.string,
  setAmountInput: PropTypes.func,
  addProduct: PropTypes.func,
  cleanButton: PropTypes.func,
};
