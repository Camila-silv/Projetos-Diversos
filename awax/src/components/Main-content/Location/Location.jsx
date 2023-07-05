export default function Location() {
  return (
    <section className="section-location">
      <div className="section-location__container-location">
        <div className="container-location__location">
          <div className="location__container-contact">
            <div>
              <img
                className="container-contact__img"
                src="src/assets/images/icones/carta.png"
                alt=""
              />
            </div>

            <span className="container-contact__label">
              PO box 16122 Collins Street West <br/>Victoria 8007 Australia
            </span>
          </div>

          <div className="location__container-contact">
            <div>
              <img
                className="container-contact__img"
                src="src/assets/images/icones/localizacao.png"
                alt=""
              />
            </div>
            <span className="container-contact__label">
              121 King Street, Melbourne VIctoria 3000 Australia
            </span>
          </div>

          <div className="location__container-contact">
            <div>
              <img
                className="container-contact__img"
                src="src/assets/images/icones/telefone.png"
                alt=""
              />
            </div>
            <span className="container-contact__label">+00 0 1234 5678</span>
          </div>

          <div className="location__container-contact">
            <div>
              <img
                className="container-contact__img"
                src="src/assets/images/icones/arroba.png"
                alt=""
              />
            </div>
            <span className="container-contact__label">
              bukindesign@gmail.com
            </span>
          </div>

          <div className="location__container-contact">
            <div>
              <img
                className="container-contact__img"
                src="src/assets/images/icones/web.png"
                alt=""
              />
            </div>
            <span className="container-contact__label">www.envato.com</span>
          </div>
        </div>

        <div className="container-location__maps">
          <span className="maps__icon"></span>

          <div className="maps__background">

          </div>
        </div>
      </div>
    </section>
  );
}

