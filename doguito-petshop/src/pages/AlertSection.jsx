import PropTypes from "prop-types";

export default function AlertSection({ str }) {
  return (
    <section className="alert-section">
      <div className="alert-img-container">
        <img
          src="./public/checkmark.svg"
          alt=""
          className="alert-img-container__img"
        />
      </div>

      <span className="alert-section__alert">{str}</span>

      <a href="/" className="alert-section__link">
        Voltar para a aba clientes
      </a>
    </section>
  );
}

AlertSection.propTypes = {
  str: PropTypes.string,
};
