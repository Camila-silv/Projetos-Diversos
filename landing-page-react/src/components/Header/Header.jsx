export default function Header() {
  return (
    <header className="main-header container">
      <div className="main-header__container-main-header">
        <img className="container-main-header__logo" src="src/assets/images/logo.svg" alt="Logo da escola de Jazz" />
        <h1 className="container-main-header__logo">Tom&rsquo;s</h1>
        <nav className="container-main-header__main-navbar">
          <a className="main-navbar__link" href="/">Início</a>
          <a className="main-navbar__link" href="/">Cursos</a>
          <a className="main-navbar__link" href="/">Eventos</a>
          <a className="main-navbar__link" href="/">Contato</a>
        </nav>

        <a className="container-main-header__button button" href="/">Se inscreva</a>
      </div>
    </header>
  );
}
