export default function Discount() {
  return (
    <section className="section-discount">
      <h4 className="section-discount__title">
        Inscreva-se para ganhar descontos!
      </h4>

      <div className="section-discount__container-input">
        <input className="section-discount__input" type="text" />
      </div>

      <input
        className="section-discount__button button-default"
        type="submit"
        value="Enviar!"
      />
    </section>
  );
}
