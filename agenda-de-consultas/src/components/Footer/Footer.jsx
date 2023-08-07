import {FiCalendar, FiUsers } from "react-icons/fi";
import {AiOutlineBarChart} from "react-icons/ai";
import {HiMenu} from "react-icons/hi";


export default function Footer() {
  return (
    <footer className="main-footer">
      <button className="main-footer__floating-button">+</button>
      <nav className="main-footer__nav-footer">
        <a href="/" className="nav-footer__links-nav-footer">
          <FiCalendar className="links-nav-footer__icon"/>
          <span>Consultas</span>
        </a>

        <a href="/" className="nav-footer__links-nav-footer">
          <FiUsers className="links-nav-footer__icon"/>
          <span>Clientes</span>
        </a>

        <a href="/" className="nav-footer__links-nav-footer">
          <AiOutlineBarChart className="links-nav-footer__icon"/>
          <span>Relatórios</span>
        </a>

        <a href="/" className="nav-footer__links-nav-footer">
          <HiMenu className="links-nav-footer__icon"/>
          <span>Menu</span>
        </a>
      </nav>
    </footer>
  );
}
