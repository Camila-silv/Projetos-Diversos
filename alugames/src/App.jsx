import GameList from "./components/GameList";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />

      <main className="main-content">
        <h2 className="main-content__title">
          Aluguel <br className="line-break" />
          de <span className="title--color">boardgames</span>
        </h2>
        <div className="main-content__container-games">
          <section className="container-games__games-section">
            <GameList />
          </section>
          <img
            src="public/hachuras.svg"
            alt=""
            className="container-games__hachuras"
          />
        </div>
      </main>

      <footer className="footer">
        &#169; 2023 &#124; Desenvolvido por Camila Silva
      </footer>
    </>
  );
}
