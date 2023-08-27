export default function SectionAbout() {
  return (
    <section className="section-about container">
      <div className="section-about__container-img-section-about">
        <img src="public/images.svg" alt="Imagens de alguns serviços oferecidos pela Barber" className="container-img-section-about__img"
        data-aos="zoom-in"
        data-aos-delay="100"
        />
      </div>
      <div className="section-about__container-section-about"
      data-aos="zoom-in-left"
      data-aos-delay="250"
      >
        <h2 className="container-section-about__title">Sobre</h2>
        <p className="container-section-about__paragraphy">
          Lorem ipsum dolor sit amet consectetur. Ornare eget pellentesque proin
          risus. Orci proin morbi vestibulum convallis leo vestibulum mus. Non
          duis augue eros mattis a quis sem sodales.
        </p>
        <span className="container-section-about__label">
          Horário de funcionamento: 09:00 ás 19:00
        </span>
      </div>
    </section>
  );
}
