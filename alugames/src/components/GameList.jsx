import GamesListItem from "./GamesListItem";

export default function GameList() {
  const games = [
    {
      name: "Monopoly",
      alt: "Imagem do jogo monopoly",
      src: "public/monopoly.png",
    },
    {
      name: "Ticket to Ride",
      alt: "Imagem do jogo Ticket to Ride",
      src: "public/ticket_to_ride.png",
    },
    {
      name: "Takenoko",
      alt: "Imagem do jogo Takenoko",
      src: "public/takenoko.png",
    },
  ];

  return (
    <ul className="games-section__games-list">
      {games.map((item) => {
        return (
          <GamesListItem
            src={item.src}
            alt={item.alt}
            title={item.name}
            key={item.name}
          />
        );
      })}
    </ul>
  );
}
