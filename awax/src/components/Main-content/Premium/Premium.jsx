export default function Premium() {
  return (
    <section className="section-premium">
      <div className="section-premium__container-premium container-center">
        <h2 className="container-premium__title title-default">
          Premium
        </h2>

        <span className="container-premium__label label-default">
          Even more features available
        </span>

        <div className="container-premium__container-packages">
          <img
            className="container-packages__img"
            src="src/assets/images/complementos/livros.png"
            alt=""
          />

          <ul className="container-packages__premium-plan-listed">
            <li className="premium-plan-listed__items-premium-plan-listed">
              <h3 className="items-premium-plan-listed__title">
                First feature
              </h3>

              <p className="items-premium-plan-listed__parag">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br className="word-wrap" />Magnam
                incidunt voluptatibus quas aliquid tempora,<br className="word-wrap"/> non laborum sapiente
                nulla laudantium saepe.
              </p>

              <ul className="items-premium-plan-listed__list-feature">
                <li className="list-feature__items">Feature One</li>
                <li className="list-feature__items">Feature two</li>
                <li className="list-feature__items">Feature three</li>
              </ul>
            </li>

            <li className="premium-plan-listed__items-premium-plan-listed">
              <h3 className="items-premium-plan-listed__title">
                First feature
              </h3>

              <p className="items-premium-plan-listed__parag">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, sequi?
              </p>
            </li>

            <li className="premium-plan-listed__items-premium-plan-listed">
              <h3 className="items-premium-plan-listed__title">
                Third feature
              </h3>

              <p className="items-premium-plan-listed__parag">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, sequi?
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="section-premium__container-scroll-premium">
        <div className="container-scroll-premium container-default-scroll">
          <div className="scroll scroll--selected"></div>
          <div className="scroll"></div>
          <div className="scroll"></div>
        </div>

        <button className="container-scroll__button button">
          Get in touth
        </button>
      </div>
    </section>
  );
}
