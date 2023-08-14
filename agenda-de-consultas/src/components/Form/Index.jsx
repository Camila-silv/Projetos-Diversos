import PropTypes from "prop-types";

export default function Form({closeForm, close}) {

  const submit = (ev) => {
    ev.preventDefault();
  }

  return (
    <form className="container-modal__form" onSubmit={submit}>
      <button
        className="container-modal__button-close button-default"
        onClick={() => closeForm(!close)}
      >
        x
      </button>
      <h2 className="form__title">Nova Consulta</h2>
      <div className="form__container-input">
        <label htmlFor="" className="container-input__label">
          Nome
        </label>
        <div className="container-input__container-full-name">
          <input type="text" name="" id="" className="container-input__input" />
          <input type="text" name="" id="" className="container-input__input" />
        </div>
      </div>

      <div className="form__container-input">
        <label htmlFor="" className="container-input__label">
          Tipo de Consulta
        </label>
        <div className="container-input__container-query-type">
          <div>
            <input type="radio" name="Tipo de Consulta" />
            <label htmlFor="" className="container-query-type__label">
              Consulta remota
            </label>
          </div>

          <div>
            <input type="radio" name="Tipo de Consulta" />
            <label htmlFor="" className="container-query-type__label">
              Consulta Presencial
            </label>
          </div>
        </div>
      </div>

      <div className="form__container-input">
        <label htmlFor="" className="container-input__label">
          Data
        </label>
        <input
          type="date"
          name=""
          id=""
          className="container-input__input input--date"
        />
      </div>

      <div className="form__container-input">
        <label htmlFor="" className="container-input__label">
          Hora
        </label>
        <input type="time" name="" id="" className="container-input__input" />
      </div>

      <div className="form__container-input">
        <label htmlFor="" className="container-input__label">
          Observações
        </label>
        <textarea
          name=""
          id=""
          cols="6"
          rows="6"
          className="container-input__input input--textarea"
        ></textarea>
      </div>

      <input
        type="submit"
        value="Salvar"
        className="form__button button-default"
      />
    </form>
  );
}

Form.propTypes = {
  closeForm: PropTypes.func,
  close: PropTypes.bool
}
