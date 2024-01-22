import PropTypes from "prop-types";

export default function CharacterCard({
  src,
  alt,
  id,
  handleSetSelectedCharacterContainer,
  characters,
  index,
  handleSetIndex,
  handleSetSelectedCharacter,
}) {
  const focus = (e) => {
    const card = e.target.parentElement;
    const indexCard = parseInt(e.target.parentElement.id);

    card.style.boxShadow = `0 0 4rem ${characters[indexCard].color}`;

    handleSetSelectedCharacterContainer(
      <>
        <div className="selected-character-container_character-container">
          <img
            src={characters[id].img}
            alt=""
            className="character-container__img"
            data-character-img
          />
        </div>

        <span
          className="selected-character-container__character-name"
          data-character-name
        >
          {characters[id].name}
        </span>

        <p
          className="selected-character-container__character-bio"
          data-character-bio
        >
          {characters[id].bio}
        </p>
      </>
    );
  };

  const withoutFocus = (e) => {
    const card = e.target.parentElement;
    const selectedItem = card.classList.contains(
      "container-characters__container-character--selected"
    );

    handleSetSelectedCharacterContainer(null);

    if (!selectedItem) {
      card.style.boxShadow = `none`;
    }

    if (index !== null) {
      handleSetSelectedCharacterContainer(
        <>
          <div className="selected-character-container_character-container">
            <img
              src={characters[index].img}
              alt=""
              className="character-container__img"
              data-character-img
            />
          </div>

          <span
            className="selected-character-container__character-name"
            data-character-name
          >
            {characters[index].name}
          </span>

          <p
            className="selected-character-container__character-bio"
            data-character-bio
          >
            {characters[index].bio}
          </p>
        </>
      );
    }
  };

  const selectCard = (e) => {
    const indexCard = parseInt(e.target.parentElement.id);

    handleSetIndex(indexCard);
    const arr = e.target.parentElement.parentElement.childNodes;
    const card = e.target.parentElement;

    for (let item of arr) {
      item.style.boxShadow = "none";
      item.classList.remove(
        "container-characters__container-character--selected"
      );
    }

    card.style.boxShadow = `0 0 4rem ${characters[indexCard].color}`;
    card.classList.add("container-characters__container-character--selected");
    handleSetSelectedCharacter(true);
  };

  return (
    <div
      className="container-characters__container-character"
      id={id}
      onMouseOver={(e) => focus(e)}
      onMouseOut={(e) => withoutFocus(e)}
      onClick={(e) => selectCard(e)}
    >
      <img src={src} alt={alt} className="container-character__img" />
    </div>
  );
}

CharacterCard.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.number,
  handleSetSelectedCharacterContainer: PropTypes.func,
  characters: PropTypes.array,
  handleSetSelectedCharacter: PropTypes.func,
  handleSetIndex: PropTypes.func,
  index: PropTypes.number,
};
