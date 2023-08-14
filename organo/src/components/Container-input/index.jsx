import PropTypes from "prop-types";

export default function ContainerInput({
  label,
  placeholder,
  htmlFor,
  id,
  obrigatorio,
  valor,
  aoAlterado
}) {

  const digitado = (ev) => {
    aoAlterado(ev.target.value);
  };

  

  return (
    <div className="container-input">
      <label className="container-input__label" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className="container-input__input"
        type="text"
        placeholder={placeholder}
        id={id}
        onChange={digitado}
        value={valor}
        required={obrigatorio}
      />
    </div>
  );
}

ContainerInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  valor: PropTypes.string,
  obrigatorio: PropTypes.bool,
  aoAlterado: PropTypes.func.isRequired
};
