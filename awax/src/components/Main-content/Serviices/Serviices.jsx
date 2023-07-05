import AdvantagesStamp from "./Advantages-stamp/Advantages-stamp";

export default function Serviices() {
  return (
    <section className="section-services">
      <div className="section-services__container-services container-center">
        <h2 className="container-services__title title-default">
          Services
        </h2>

        <span className="container-services__lbl label-default">
          Services that we people
        </span>

        <div className="container-services__items container-width-default">
          <AdvantagesStamp
            src="./src/assets/images/icones/medalha.png"
            alt="Icone de medalha"
            title="High quality design"
            label="Praesent metus urna"
            labelCont="feugiata placerat elementum"
          />

          <AdvantagesStamp
            src="./src/assets/images/icones/estrela.png"
            alt="Icone de estrela"
            title="Modern design"
            label="Praesent metus urna"
            labelCont="feugiat"
          />

          <AdvantagesStamp
            src="./src/assets/images/icones/relogio.png"
            alt="Icone de relogio"
            title="Regular updates"
            label="Praesent metus urna,"
            labelCont="feugiata placerat elementum"
          />

          <AdvantagesStamp
            src="./src/assets/images/icones/balao.png"
            alt="Icone de balao"
            title="Fast and free support"
            label="Praesent metus urna,"
            labelCont="feugiata placerat elementum"
          />
        </div>
      </div>
    </section>
  );
}
