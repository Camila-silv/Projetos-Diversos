export default function Header() {
  return (
    <header className="main-header">
      <div className="main-header-img-container">
        <img
          src="./public/doguitoadm.svg"
          className="main-header-img-container__img"
          alt="Logo Doguito Petshop, um cachorro branco, com manchas em abos os olhos"
        />
      </div>

      <nav className="main-navbar">
        <ul className="navbar-list">
          <li className="navbar-list__navbar-iten">
            <a href="/" className="navbar-iten__link">
              Dashboard
            </a>
          </li>
          <li className="navbar-list__navbar-iten">
            <a href="/" className="navbar-iten__link">
              Produtos
            </a>
          </li>

          <li className="navbar-list__navbar-iten">
            <a href="/" className="navbar-iten__link">
              Clientes
            </a>
          </li>

          <li className="navbar-list__navbar-iten">
            <a href="/" className="navbar-iten__link">
              Pets
            </a>
          </li>

          <li></li>
        </ul>
      </nav>
    </header>
  );
}
