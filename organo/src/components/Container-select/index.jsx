import PropTypes from "prop-types";

export default function ContainerSelect({
  label,
  children,
  obrigatorio,
  aoAlterado,
}) {
  const digitado = (ev) => {
    aoAlterado(ev.target.value);
  };

  return (
    <div>
      <label className="container-input__label">{label}</label>
      <select
        className="container-input__input"
        required={obrigatorio}
        onChange={digitado}
      >
        {children}
      </select>
    </div>
  );
}

ContainerSelect.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.array,
  obrigatorio: PropTypes.bool.isRequired,
  aoAlterado: PropTypes.func,
};
