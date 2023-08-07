import { FiCalendar, FiUsers } from "react-icons/fi";
import { AiOutlineBarChart } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { TbMapPin } from "react-icons/tb";
import { BsCameraVideo } from "react-icons/bs";
import { useState } from "react";
import ContainerFloating from "../Container-floating/ContainerFloating";

export default function Footer() {
  const [layout, setLayout] = useState(false);

  return (
    <footer className="main-footer">
      {layout === true ? (
        <div className="main-footer__container-floating-buttons">
          <ContainerFloating label="Nova consulta na casa do paciente">
            <TbMapPin />
          </ContainerFloating>

          <ContainerFloating label="Nova consulta por vídeo">
            <BsCameraVideo />
          </ContainerFloating>

          <button
            className="container-floating-buttons__floating-button button-floating-button"
            onClick={() => {
              setLayout(!layout);
            }}
          >
            +
          </button>
        </div>
      ) : (
        <button
          className="container-floating-buttons__floating-button button-floating-button"
          onClick={() => {
            setLayout(!layout);
          }}
        >
          +
        </button>
      )}

      <nav className="main-footer__nav-footer">
        <a href="/" className="nav-footer__links-nav-footer">
          <FiCalendar className="links-nav-footer__icon" />
          <span>Consultas</span>
        </a>

        <a href="/" className="nav-footer__links-nav-footer">
          <FiUsers className="links-nav-footer__icon" />
          <span>Clientes</span>
        </a>

        <a href="/" className="nav-footer__links-nav-footer">
          <AiOutlineBarChart className="links-nav-footer__icon" />
          <span>Relatórios</span>
        </a>

        <a href="/" className="nav-footer__links-nav-footer">
          <HiMenu className="links-nav-footer__icon" />
          <span>Menu</span>
        </a>
      </nav>
    </footer>
  );
}
