export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="main-footer__container-main-footer container">
        <div className="container-main-footer__banner-footer">
          <div className="banner-footer__container-img">
            <img src="./public/icon-footer-banner.png" alt="" />
          </div>
          <p className="banner-footer__paragraphy">
            Let’s Business Something Agency
          </p>
        </div>

        <div className="container-main-footer__container-footer-additional-inf">
          <div className="container-footer-additional-inf__container-footer-additional-inf-item">
            <h2 className="container-footer-additional-inf-item__title">
              <img
                src="./public/Logo-footer.png"
                alt="Logo da Digiboost"
                className="title__img-logo-footer"
              />
            </h2>

            <span className="container-footer-additional-inf-item__catchphrase">
              Want to Create Something <br />
              Great Together?
            </span>

            <p className="container-footer-additional-inf-item__text container-footer-additional-inf-item__text--font-family container-footer-additional-inf-item__text--margin">
              There are many variations of passages <br />
              ofth Lorem Ipsum available, but there <br />
              majori have suffered alteration.
            </p>

            <div className="container-footer-additional-inf-item__container-contact-footer">
              <img
                src="./public/Icon-phone-footer.png"
                alt="Icone de telefone"
                className="container-contact-footer__img"
              />
              <div className="container-contact-footer__container-phone">
                <span className="container-phone__label">Telephone</span>
                <span className="container-phone__phone">+(256) 2597 2456</span>
              </div>
            </div>
          </div>

          <div className="container-footer-additional-inf__container-footer-additional-inf-item">
            <h2 className="container-footer-additional-inf-item__title">
              Our Services
            </h2>

            <ul className="container-footer-additional-inf-item__list">
              <li className="container-footer-additional-inf-item__text">
                Single Ply Roofing
              </li>
              <li className="container-footer-additional-inf-item__text">
                Modified Roofing
              </li>
              <li className="container-footer-additional-inf-item__text">
                Built-Up Roofing
              </li>
              <li className="container-footer-additional-inf-item__text">
                Metal Roofing
              </li>
              <li className="container-footer-additional-inf-item__text">
                Vegetative Roofing
              </li>
              <li className="container-footer-additional-inf-item__text">
                Modifilied Rooling
              </li>
              <li className="container-footer-additional-inf-item__text">
                Specialty Metal
              </li>
            </ul>
          </div>

          <div className="container-footer-additional-inf__container-footer-additional-inf-item">
            <h2 className="container-footer-additional-inf-item__title">
              Useful Links
            </h2>

            <ul className="container-footer-additional-inf-item__list">
              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="container-footer-additional-inf-item__text"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="container-footer-additional-inf-item__text"
                >
                  Tax & Vat
                </a>
              </li>
              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="container-footer-additional-inf-item__text"
                >
                  Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="container-footer-additional-inf-item__text"
                >
                  Typically Solutions
                </a>
              </li>
              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="container-footer-additional-inf-item__text"
                >
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="container-footer-additional-inf-item__text"
                >
                  Refund policy
                </a>
              </li>
              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="container-footer-additional-inf-item__text"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="container-footer-additional-inf__container-footer-additional-inf-item">
            <h2 className="container-footer-additional-inf-item__title">
              Newsletter
            </h2>

            <p className="container-footer-additional-inf-item__text">
              Subsribe our newsletter to get our letter
              <br />
              updates & news
            </p>

            <form className="container-footer-additional-inf-item__form-footer">
              <input
                type="text"
                placeholder="Enter your email"
                className="form-footer__input"
              />
              <button className="form-footer__buton">Subscribe</button>
            </form>

            <ul className="container-footer-additional-inf-item__list-newsletter">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <li className="list-newsletter__item">
                  <img src="./public/Icon-footer-link.png" alt="" />
                </li>
              </a>

              <a href="http://" target="_blank" rel="noopener noreferrer">
                <li className="list-newsletter__item">
                  <img src="./public/Vector-footer-link.png" alt="" />
                </li>
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <li className="list-newsletter__item">
                  <img src="./public/Icon(1)-footer-link.png" alt="" />
                </li>
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <li className="list-newsletter__item">
                  <img src="./public/Icon(2)-footer-link.png" alt="" />
                </li>
              </a>
            </ul>
          </div>
        </div>

        <div className="container-main-footer__container-footer-copyright">
          <p className="container-footer-additional-inf-item__text">
            © Copyright 2022. All Right Reserved
          </p>

          <ul className="container-footer-copyright__container-links">
            <li>
              <a href="" className="container-footer-additional-inf-item__text">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="" className="container-footer-additional-inf-item__text">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
