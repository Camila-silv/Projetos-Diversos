export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="main-footer__container-main-footer container-center container-width-default">
        <form className="container-main-footer__form-subscribe">
          <input
            className="form-subscribe__input"
            type="email"
            placeholder="E-mail to subscribe"
          />
          <button className="form-subscribe__button button">Subscribe</button>
        </form>

        <div className="divider-container">
          <div className="container-main-footer__container-icons">
            <div className="container-icons__icons">
              <img src="src/assets/images/icones/twitter.png" alt="" />
            </div>
            <div className="container-icons__icons">
              <img src="src/assets/images/icones/linkedin.png" alt="" />
            </div>
            <div className="container-icons__icons">
              <img src="src/assets/images/icones/facebook.png" alt="" />
            </div>
            <div className="container-icons__icons">
              <img src="src/assets/images/icones/googleplus.png" alt="" />
            </div>

            <div className="container-icons__icons">
              <div className="icons__extra">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

          <span className="container-main-footer__label">Awax &copy; 2023</span>
        </div>

        <p className="container-main-footer__parag">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus vitae saepe quis eius accusamus odit totam inventore
          perspiciatis sequi amet ad, natus a libero, delectus corrupti
          consectetur voluptates sed sint nesciunt? Maxime quasi voluptatibus
          laboriosam labore blanditiis, animi sit excepturi iure sequi? Et
          aliquid harum ab deserunt ducimus. Ea, beatae.
        </p>
      </div>
    </footer>
  );
}
