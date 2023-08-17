import PropTypes from "prop-types";

export default function Card({ name, func, src, color }) {
  return (
    <div className="card-squad">
      <div
        className="card-squad__container-header-card"
        style={{ backgroundColor: color }}
      ></div>
      <div className="card-squad__container-body-card">
        <img
          className="container-body-card__img"
          src={src}
          alt={`Imagem do membro, ${name}`}
        />
        <h4 className="container-body-card__member">{name}</h4>
        <span className="container-body-card__function">{func}</span>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  func: PropTypes.string,
  src: PropTypes.string,
  color: PropTypes.string,
};
