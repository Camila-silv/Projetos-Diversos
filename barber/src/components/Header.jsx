import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header container">
      <nav className="header__header-navbar ">
        <div className="header-navbar__icons-navbar" data-aos="fade-down">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icons" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icons" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icons" />
          </a>
        </div>

        <div
          className="header-navbar__logo-navbar"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            src="public/Group 231.svg"
            alt="Logo da Barber"
            data-aos="flip-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          />
        </div>

        <a
          href="https://api.whatsapp.com/send?phone=5511000000000&text=Quero%20agendar%20um%20hor%C3%A1rio"
          target="_blank"
          rel="noopener noreferrer"
          className="header-navbar__link"
          data-aos="fade-down"
        >
          Agendar horário
        </a>
      </nav>

      <section
        className="header__featured-section"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <h1 className="featured-section__title">
          Estilo é um reflexo da sua <br /> atitude e sua personalizade.
        </h1>
        <span className="featured-section__label">
          Horário de funcionamento: 09:00 ás 19:00
        </span>

        <a
          href="https://api.whatsapp.com/send?phone=5511000000000&text=Quero%20agendar%20um%20hor%C3%A1rio"
          target="_blank"
          rel="noopener noreferrer"
          className="featured-section__link"
        >
          Agendar horário
        </a>
      </section>
    </header>
  );
}
