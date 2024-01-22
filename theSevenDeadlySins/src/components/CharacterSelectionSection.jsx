import { CharacterCard } from "./index";
import PropTypes from "prop-types";

export default function CharacterSelectionSection({
  ListCharacters,
  confirmSelection,
  handleSetSelectedCharacterContainer,
  HandleSetSelectedCharacter,
  index,
  handleSetIndex,
}) {
  return (
    <section
      className={
        confirmSelection === true
          ? "character-selection-section character-selection-section--hidde"
          : "character-selection-section"
      }
    >
      <div className="character-selection-section__character-selection-container">
        <h2 className="character-selection-container__title">
          Selecione um personagem
        </h2>

        <div className="character-selection-container__container-characters">
          {ListCharacters.map((character) => {
            return (
              <CharacterCard
                src={character.bgImg}
                alt={character.name}
                key={character.id}
                id={character.id}
                index={index}
                handleSetIndex={handleSetIndex}
                characters={ListCharacters}
                handleSetSelectedCharacterContainer={
                  handleSetSelectedCharacterContainer
                }
                handleSetSelectedCharacter={HandleSetSelectedCharacter}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

CharacterSelectionSection.propTypes = {
  ListCharacters: PropTypes.array,
  confirmSelection: PropTypes.bool,
  handleSetSelectedCharacterContainer: PropTypes.func,
  HandleSetSelectedCharacter: PropTypes.func,
  index: PropTypes.number,
  handleSetIndex: PropTypes.func,
};
