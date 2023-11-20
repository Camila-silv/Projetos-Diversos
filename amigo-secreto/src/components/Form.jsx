import PropTypes from "prop-types";

export default function Form({
  friendNameInput,
  captureValue,
  startGame,
  toPlay,
  clear,
}) {
  return (
    <form className="secret-friend-section__secret-friend-form container">
      <div className="secret-friend-form__group-input">
        <label htmlFor="friend-name" className="group-input__label">
          Digite o nome de um amigo
        </label>
        <input
          type="text"
          placeholder="Nome do amigo"
          className="group-input__input"
          id="friend-name"
          value={friendNameInput}
          onChange={(e) => {
            captureValue(e.target.value);
          }}
        />
      </div>
      <div className="secret-friend-form__group-buttons">
        <button
          className="group-buttons__buttons"
          onClick={(e) => startGame(e)}
        >
          Adicionar
        </button>
        <button
          className="group-buttons__buttons"
          onClick={(e) => {
            toPlay(e);
          }}
        >
          Sortear
        </button>
        <button className="group-buttons__buttons" onClick={(ev) => clear(ev)}>
          Reiniciar
        </button>
      </div>
    </form>
  );
}

Form.propTypes = {
  friendNameInput: PropTypes.string,
  captureValue: PropTypes.func,
  startGame: PropTypes.func,
  toPlay: PropTypes.func,
  clear: PropTypes.func,
};
