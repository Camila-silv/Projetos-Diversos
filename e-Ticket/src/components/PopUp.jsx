import PropTypes from "prop-types";

export default function PopUp({ setPopUp }) {
  return (
    <div className="container-popUp">
      <div className="container-popUp__popUp-purchase-made">
        <button
          className="popUp-purchase-made__button"
          onClick={() => setPopUp(false)}
        >
          x
        </button>
        <p className="popUp-purchase-made__alert">
          Compra efetuada com sucesso, bom show!!
        </p>
      </div>
    </div>
  );
}

PopUp.propTypes = {
  setPopUp: PropTypes.func,
}
