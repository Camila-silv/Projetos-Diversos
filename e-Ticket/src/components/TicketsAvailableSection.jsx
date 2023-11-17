import PropTypes from "prop-types";

export default function TicketsAvailableSection({
  quantidadePista,
  quantidadeCadeiraSuperior,
  quantidadeCadeiraInferior
  
}) {
  return (
    <div className="eTicket-section__tickets-available-section">
      <h2 className="tickets-available-section__available-tickets-section-title">
        Quantidade disponível
      </h2>
      <div className="tickets-available-section__list-of-available-tickets">
        <div className="list-of-available-tickets__items-of-available-tickets">
          <span className="items-of-available-tickets__label">Pista</span>
          <span className="items-of-available-tickets__amount">
            {quantidadePista}
          </span>
        </div>
        <div className="list-of-available-tickets__items-of-available-tickets">
          <span className="items-of-available-tickets__label">
            Cadeira superior
          </span>
          <span
            className="items-of-available-tickets__amount"
          >
            {quantidadeCadeiraSuperior}
          </span>
        </div>
        <div className="list-of-available-tickets__items-of-available-tickets">
          <span className="items-of-available-tickets__label">
            Cadeira inferior
          </span>
          <span
            className="items-of-available-tickets__amount"
          >
            {quantidadeCadeiraInferior}
          </span>
        </div>
      </div>
      <img
        src="public/PNG/Ingresso.png"
        alt="Imagem do e-Ticket"
        className="tickets-available-section__img"
      />
    </div>
  );
}

TicketsAvailableSection.propTypes = {
  quantidadePista: PropTypes.number,
  quantidadeCadeiraSuperior: PropTypes.number,
  quantidadeCadeiraInferior: PropTypes.number,
}
