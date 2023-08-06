export default function Footer() {
  return (
    <footer className="main-footer">
      <button className="main-footer__floating-button">+</button>
      <nav className="main-footer__nav-footer">
        <a href="/" className="nav-footer__items-nav-footer">
          icone
          <span>Consultas</span>
        </a>

        <a href="/" className="nav-footer__items-nav-footer">
          icone
          <span>Clientes</span>
        </a>

        <a href="/" className="nav-footer__items-nav-footer">
          icone
          <span>Relatórios</span>
        </a>

        <a href="/" className="nav-footer__items-nav-footer">
          icone
          <span>Menu</span>
        </a>
      </nav>
    </footer>
  );
}
