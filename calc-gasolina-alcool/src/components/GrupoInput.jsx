import PropTypes from "prop-types";

export default function GrupoInput({ valor, handleFunc, label, placeholder }) {
  return (
    <div className="grupo-input">
      <label className="form-conteudo-principal__lbl-form">
        {label} (preço por litro):
      </label>
      <input
        type="number"
        className="form-conteudo-principal__input"
        required
        placeholder={placeholder}
        value={valor}
        onChange={(e) => handleFunc(e.target.value)}
      />
    </div>
  );
}

GrupoInput.propTypes = {
  valor: PropTypes.string,
  handleFunc: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};
