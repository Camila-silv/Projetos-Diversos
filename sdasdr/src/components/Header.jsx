export default function Header() {
  return (
    <header className="main-header">
      <div className="main-header__container-main-header container">
        <img
          src="./public/Logo.png"
          alt="logo da SDASDR"
          className="container-main-header__logo"
        />

        <nav className="container-main-header__main-navbar">
          <ul className="main-navbar__main-navbar-link-list">
            <li className="main-navbar-link-list__main-navbar-link-list-item">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="main-navbar-link-list-item__link"
                data-home
              >
                Home
              </a>
            </li>
            <li className="main-navbar-link-list__main-navbar-link-list-item">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="main-navbar-link-list-item__link"
              >
                Products
              </a>
            </li>
            <li className="main-navbar-link-list__main-navbar-link-list-item">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="main-navbar-link-list-item__link"
              >
                Pages
              </a>
            </li>
            <li className="main-navbar-link-list__main-navbar-link-list-item">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="main-navbar-link-list-item__link"
              >
                Blog
              </a>
            </li>
            <li className="main-navbar-link-list__main-navbar-link-list-item">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="main-navbar-link-list-item__link"
              >
                Testomonial
              </a>
            </li>
            <li className="main-navbar-link-list__main-navbar-link-list-item">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="main-navbar-link-list-item__link"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <button className="container-main-header__menu-hamburguer">
          <img
            src="./public/more.png"
            alt="icone do menu"
            className="menu-hamburguer__icon"
          />
        </button>
      </div>

      <button className="main-header__button default-button">
        Get a Quote
      </button>
    </header>
  );
}
