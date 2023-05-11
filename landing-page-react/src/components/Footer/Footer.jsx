export default function Footer() {
  return (
    <footer className="main-footer container">
      <div className="main-footer__divider-container">
        <img
          className="main-footer__img"
          src="src/assets/images/logo.svg"
          alt="Logo da escola de Jazz"
        />

        <p className="main-footer__parag">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <nav className="main-footer__navbar-footer">
        <a className="navbar-footer__link" href="http://">
          Início
        </a>
        <a className="navbar-footer__link" href="http://">
          Cursos
        </a>
        <a className="navbar-footer__link" href="http://">
          Eventos
        </a>
        <a className="navbar-footer__link" href="http://">
          Contato
        </a>
      </nav>

      <form className="main-footer__form">
        <label className="form__label">
          Receba materiais gratuitos no seu e-mail
        </label>
        <input className="form__input" type="text"></input>
        <button className="form__button button">Quero receber</button>
      </form>
    </footer>
  );
}
