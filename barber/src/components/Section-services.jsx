import { Service } from "./index";

export default function SectionServices() {
  return (
    <section className="section-services">
      <h2 className="section-services__title">Serviços</h2>
      <p className="section-services__paragraphy">
        Lorem ipsum dolor sit amet consectetur. Ornare eget pellentesque proin
        risus. Orci proin morbi vestibulum convallis leo vestibulum mus. Non
        duis augue eros mattis a quis sem sodales.
      </p>

      <div className="section-services__container-section-services container">
        <Service
          url="public/unsplash_ClilMdu189E.png"
          service="Corte cabelo"
          value="R$ 45,00"
          delay="150"
        />

        <Service
          url="public/unsplash_ClilMdu189E(1).png"
          service="Barba completa"
          value="R$ 35,00"
          delay="250"
        />

        <Service
          url="public/unsplash_ClilMdu189E(2).png"
          service="Cabelo e barba"
          value="R$ 70,00"
          delay="400"
        />
      </div>
    </section>
  );
}
