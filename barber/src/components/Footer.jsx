import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container-icons">
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
      <div className="footer__container-img">
        <img src="public/Group 231.svg" alt="Logo da Barber" />
      </div>
      <p className="footer__paragraphy">Copyright&#169; 2023 | Dev Barbearia - Todos os direitos reservados.</p>
    </footer>
  );
}
