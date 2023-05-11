import ArticleCurses from "./ArticleCourses/ArticleCourses";

export default function MainContent() {
  return (
    <main className="main-content">
      <div className="main-content__container-main-content">
        <section className="container-main-content__section-start-now container">
          <img
            className="section-start-now__img"
            src="src/assets/images/hero-img.svg"
            alt="ilustração de uma banda de jazz tocando"
          />

          <div className="container-section-start-now">
            <h2 className="section-start-now__title mg-right mg-left">
              Crie algo <br />
              <span className="custom-word three-dashes">impactante</span>{" "}
              <br />
              com música
            </h2>
            <p className="section-start-now__parag mg-right mg-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              className="section-start-now__button button mg-right mg-left"
              href="/"
            >
              Comece agora
            </a>
          </div>
        </section>
        <section className="container-main-content__section-courses container">
          <ArticleCurses
            lbl={"Piano popular"}
            src={"src/assets/images/piano.png"}
            alt={"icone de piano"}
            className={"section-courses__article-courses"}
          />

          <ArticleCurses
            lbl={"Teoria muscial"}
            src={"src/assets/images/clef.png"}
            alt={"icone de uma cifra"}
            className={
              "section-courses__article-courses article-courses--pesonalizado"
            }
          />

          <ArticleCurses
            lbl={"Sax Alto"}
            src={"src/assets/images/sax.png"}
            alt={"icone de sax"}
            className={"section-courses__article-courses"}
          />

          <ArticleCurses
            lbl={"Bateria"}
            src={"src/assets/images/drums.png"}
            alt={"icone de bateria"}
            className={
              "section-courses__article-courses article-courses--pesonalizado"
            }
          />

          <h2 className="section-courses__title">
            E <span className="custom-word">vários</span> outros!
          </h2>
          <a href="/" className="section-courses__button button">
            Conhecer cursos
          </a>
        </section>
      </div>
    </main>
  );
}
