import { useState } from "react";
import { Button, CharacterSelectionSection } from "./index";

export default function MainContent() {
  const [selectedCharacterContainer, setSelectedCharacterContainer] =
    useState(null);
  const [index, setIndex] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(false);
  const [confirmSelection, setConfirmSelection] = useState(false);
  const [showCharger, setShowCharger] = useState(false);

  const characters = [
    {
      id: 0,
      name: "Ban",
      bio: "Como membro dos Sete Pecados Capitais, Ban é muito poderoso. Sua velocidade e força superam em muito a de um ser humano comum, e sua especialidade é usar sua velocidade em conjunção com sua habilidade, Snatch, para arrancar os órgãos do oponente, de preferência seus corações.",
      img: "./public/ban.png",
      bgImg: "./public/ban-card.jpg",
      color: "#F1CA27",
    },
    {
      id: 1,
      name: "Diane",
      bio: "Diane é o pecado capital da inveja da Serpente. Faz parte do clã de gigantes, possui um enorme poder físico e uma conexão profunda com a terra. Ela é confiante, pavio curto e fará qualquer coisa para proteger uma vida inocente.",
      img: "./public/diane.png",
      bgImg: "./public/diane-card.png",
      color: "#92D050",
    },
    {
      id: 2,
      name: "Gowther",
      bio: "Gowther é um membro dos Sete Pecados Capitais e é conhecido como o Pecado da Cabra da Luxúria. Foi revelado que ele é um boneco, criado por um grande bruxo e que é um membro dos Dez Mandamentos.",
      img: "./public/gowther.png",
      bgImg: "./public/gowther-card.png",
      color: "#2F6597",
    },
    {
      id: 3,
      name: "Hawk",
      bio: "Hawk é um porco falante e companheiro de Meliodas. Ele trabalha no Chapéu de Javali limpando os restos de comida que as cervejas deixam na taberna. Possui muita autoestima e autodenomina-se Capitão das Sobras.",
      img: "./public/hawk.png",
      bgImg: "./public/hawk-card.png",
      color: "#F7BCB6",
    },
    {
      id: 4,
      name: "King",
      bio: "King é um membro dos Sete Pecados Capitais e é conhecido como o Pecado da Preguiça do Urso. Seu nome verdadeiro é Rei das Fadas Harlequin, ele protege a Floresta do Rei das Fadas e o resto do Reino das Fadas. Seu Tesouro Sagrado é a Lança Espiritual Chastiefol, que ele utiliza em conjunto com seu poder, Disaster.",
      img: "./public/king.png",
      bgImg: "./public/king-card.jpg",
      color: "#5FBDAD",
    },
    {
      id: 5,
      name: "Meliodas",
      bio: "Meliodas, é o líder dos Sete Pecados Capitais e atual Rei de Liones, carregando o título de Pecado da Ira do Dragão. Ele é o proprietário do renomado bar Chapéu de Javali, e o principal protagonista da primeira parte da série.",
      img: "./public/meliodas.png",
      bgImg: "./public/meliodas-card.png",
      color: "#B82222",
    },
    {
      id: 6,
      name: "Merlin",
      bio: "Merlin é um membro dos sete pecados capitais além de ser considerada o maga mais poderosa de toda a Britânia, Merlin foi abençoada pela Grande Divindade e pelo Rei Demônio, assim ela conseguiu imunidade aos mandamentos.",
      img: "./public/merlin.png",
      bgImg: "./public/merlin-card.jpg",
      color: "#ED7D31",
    },
    {
      id: 7,
      name: "Scanor",
      bio: "Escanor é o membro mais jovem dos Sete Pecados Capitais. À noite, ele é conhecido por ter o mais baixo nível de poder não apenas de todos os Cavaleiros Sagrados da Britânia, mas menor do que o valor registrado de qualquer outra pessoa. Escanor não gosta de sair durante o dia devido à sua mudança de personalidade.",
      img: "./public/scanor.png",
      bgImg: "./public/scanor-card.jpg",
      color: "#70478D",
    },
  ];

  const characterSelectionMade = (e) => {
    const mainContent = e.target.parentElement;

    if (selectedCharacter === true) {
      setConfirmSelection(true);
      setTimeout(() => {
        mainContent.classList.add("main-content--displacement");
      }, 1000 * 1);

      return;
    }

    alert("Nenhum personagem selecionado.");
  };

  const returnToCharacterSelection = (e) => {
    setConfirmSelection(false);

    const selectedCharacterSection = e.target.parentElement.children[1];
    const characterSelectionSection = e.target.parentElement.children[0];
    const mainContent = e.target.parentElement;
    const button = e.target.parentElement.children[2];

    selectedCharacterSection.style.display = "none";
    characterSelectionSection.style.display = "none";
    button.style.display = "none";

    setShowCharger(true);

    setTimeout(() => {
      setShowCharger(false);
      selectedCharacterSection.style.display = "block";
      characterSelectionSection.style.display = "block";
      button.style.display = "block";
      mainContent.classList.remove("main-content--displacement");
    }, 1000 * 3);
  };

  return (
    <main className="main-content">
      {showCharger === true ? <div className="c-loader"></div> : null}

      <CharacterSelectionSection
        ListCharacters={characters}
        confirmSelection={confirmSelection}
        handleSetSelectedCharacterContainer={setSelectedCharacterContainer}
        HandleSetSelectedCharacter={setSelectedCharacter}
        index={index}
        handleSetIndex={setIndex}
      />

      <section className="selected-character-section">
        <div className="selected-character-section__selected-character-container">
          {selectedCharacterContainer}
        </div>
      </section>

      {confirmSelection === false ? (
        <Button
          label="Confirmar escolha"
          onClick={(e) => characterSelectionMade(e)}
        />
      ) : (
        <Button label="Voltar" onClick={(e) => returnToCharacterSelection(e)} />
      )}
    </main>
  );
}
