import { useState } from "react";
import { PropTypes } from "prop-types";

export default function GamesListItem({ src, alt, title }) {
  const [rentedItem, setRentedItem] = useState(false);

  return (
    <li className="games-list__games-list-item">
      <div className="games-list-item__game-card">
        <div
          className={
            rentedItem === false
              ? "game-card__container-game-card-img"
              : "game-card__container-game-card-img overlay"
          }
        >
          <img src={src} alt={alt} className="container-game-card-img__img" />
        </div>
        <h3 className="game-card__game-title">{title}</h3>

        <button
          className={
            rentedItem === false
              ? "game-card__button"
              : "game-card__button button-rented"
          }
          onClick={() => setRentedItem(!rentedItem)}
        >
          {rentedItem === false ? "Alugar" : "Devolver"}
        </button>
      </div>
    </li>
  );
}

GamesListItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
};
