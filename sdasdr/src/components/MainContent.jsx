import { Section } from "./index";

export default function MainContet() {
  const workdsSeciton = {
    section: "workds-seciton",
    sectionContain: "workds-seciton_container-workds-seciton-seciton",
    label: "container-workds-seciton-seciton__label",
    title: "container-workds-seciton-seciton__title",
  };

  const ourServiceSeciton = {
    section: "our-service-seciton",
    sectionContain: "our-service-seciton__container-our-service-seciton",
    label: "container-our-service-seciton__label",
    title: "container-our-service-seciton__title",
  };

  const princingPlansSection = {
    section: "princing-plans-section",
    sectionContain: "princing-plans-section_container-princing-plans-section",
    label: "container-princing-plans-seciton__label",
    title: "container-princing-plans-seciton__title",
  };

  const showInformation = (e) => {
    const ElementId = parseInt(e.target.id);
    const informationCard =
      e.target.parentElement.parentElement.children[0].children[ElementId]
        .children[0];

    let count = 0;

    while (count < 3) {
      e.target.parentElement.parentElement.children[0].children[
        count
      ].children[0].classList.add(
        "our-best-projects-list-item__container-project--width"
      );

      e.target.parentElement.children[count].classList.remove(
        "container-scroll__item--selected"
      );

      count++;
    }

    informationCard.classList.remove(
      "our-best-projects-list-item__container-project--width"
    );
    e.target.parentElement.children[ElementId].classList.add(
      "container-scroll__item--selected"
    );
  };

  return (
    <main>
      <Section
        title="Our service"
        label="We shape the perfert solutions."
        className={ourServiceSeciton}
      >
        <div className="container-our-service-seciton__services-container">
          <ul className="services-container__services-list">
            <li className="services-list__item-services-list">
              <div className="item-services-list__container-img">
                <img
                  src="./public/icon-our-services.png"
                  alt=""
                  className="container-img__img"
                />
              </div>

              <div className="item-services-list__inf-container">
                <h3 className="inf-container__title">UI/UX Design</h3>

                <span className="inf-container__label">
                  Maintenance Update Services
                </span>
              </div>
            </li>

            <li className="services-list__item-services-list">
              <div className="item-services-list__container-img">
                <img
                  src="./public/icon-our-services.png"
                  alt=""
                  className="container-img__img"
                />
              </div>

              <div className="item-services-list__inf-container">
                <h3 className="inf-container__title">UI/UX Design</h3>

                <span className="inf-container__label">
                  Maintenance Update Services
                </span>
              </div>
            </li>

            <li className="services-list__item-services-list">
              <div className="item-services-list__container-img">
                <img
                  src="./public/icon-our-services.png"
                  alt=""
                  className="container-img__img"
                />
              </div>

              <div className="item-services-list__inf-container">
                <h3 className="inf-container__title">UI/UX Design</h3>

                <span className="inf-container__label">
                  Maintenance Update Services
                </span>
              </div>
            </li>

            <li className="services-list__item-services-list">
              <div className="item-services-list__container-img">
                <img
                  src="./public/icon-our-services.png"
                  alt=""
                  className="container-img__img"
                />
              </div>

              <div className="item-services-list__inf-container">
                <h3 className="inf-container__title">UI/UX Design</h3>

                <span className="inf-container__label">
                  Maintenance Update Services
                </span>
              </div>
            </li>

            <li className="services-list__item-services-list">
              <div className="item-services-list__container-img">
                <img
                  src="./public/icon-our-services.png"
                  alt=""
                  className="container-img__img"
                />
              </div>

              <div className="item-services-list__inf-container">
                <h3 className="inf-container__title">UI/UX Design</h3>

                <span className="inf-container__label">
                  Maintenance Update Services
                </span>
              </div>
            </li>

            <li className="services-list__item-services-list">
              <div className="item-services-list__container-img">
                <img
                  src="./public/icon-our-services.png"
                  alt=""
                  className="container-img__img"
                />
              </div>

              <div className="item-services-list__inf-container">
                <h3 className="inf-container__title">UI/UX Design</h3>

                <span className="inf-container__label">
                  Maintenance Update Services
                </span>
              </div>
            </li>
          </ul>
        </div>
      </Section>

      <Section
        title="Workds"
        label="Our Best Projects"
        className={workdsSeciton}
      >
        <div className="container-workds-seciton-seciton__container-our-best-projects">
          <ul className="container-our-best-projects__our-best-projects-list">
            <li className="our-best-projects-list__our-best-projects-list-item">
              <div
                className="our-best-projects-list-item__container-project"
                data-container-project
              >
                <div className="container-project__container">
                  <div className="container-project__container-img">
                    <img
                      src="./public/icon-workds.png"
                      alt=""
                      className="container-img__project-img"
                    />
                  </div>

                  <h3 className="container-project__title">Web Development</h3>

                  <p className="container-project__paragraphy">
                    We offer our customer prerty into to protection of liability
                    to the fint to a in brack to larong into the head infor the
                    their.
                  </p>

                  <a href="/" className="container-project__link">
                    See full Project
                  </a>
                </div>
              </div>
            </li>
            <li className="our-best-projects-list__our-best-projects-list-item">
              <div
                className="our-best-projects-list-item__container-project our-best-projects-list-item__container-project--width"
                data-container-project
              >
                <div className="container-project__container">
                  <div className="container-project__container-img">
                    <img
                      src="./public/icon-workds.png"
                      alt=""
                      className="container-img__project-img"
                    />
                  </div>

                  <h3 className="container-project__title">Web Development</h3>

                  <p className="container-project__paragraphy">
                    We offer our customer prerty into to protection of liability
                    to the fint to a in brack to larong into the head infor the
                    their.
                  </p>

                  <a href="/" className="container-project__link">
                    See full Project
                  </a>
                </div>
              </div>
            </li>
            <li className="our-best-projects-list__our-best-projects-list-item">
              <div
                className="our-best-projects-list-item__container-project our-best-projects-list-item__container-project--width"
                data-container-project
              >
                <div className="container-project__container">
                  <div className="container-project__container-img">
                    <img
                      src="./public/icon-workds.png"
                      alt=""
                      className="container-img__project-img"
                    />
                  </div>

                  <h3 className="container-project__title">Web Development</h3>

                  <p className="container-project__paragraphy">
                    We offer our customer prerty into to protection of liability
                    to the fint to a in brack to larong into the head infor the
                    their.
                  </p>

                  <a href="/" className="container-project__link">
                    See full Project
                  </a>
                </div>
              </div>
            </li>
          </ul>

          <div className="container-our-best-projects__container-scroll">
            <span
              className="container-scroll__item container-scroll__item--selected"
              id="0"
              onClick={(e) => showInformation(e)}
            ></span>
            <span
              className="container-scroll__item"
              id="1"
              onClick={(e) => showInformation(e)}
            ></span>
            <span
              className="container-scroll__item"
              id="2"
              onClick={(e) => showInformation(e)}
            ></span>
          </div>
        </div>
      </Section>

      <Section
        title="What Our Clientssays"
        label="Princing plans"
        className={princingPlansSection}
      >
        <div className="container-princing-plans-section__container-plans">
          <div className="container-plans__plan">
            <h3 className="plan__title">Basic Plan</h3>

            <span className="plan__label">
              Roofing mbrae change parthriving brace
            </span>

            <span className="plan__price">
              <span className="plan__price--position">$</span>
              <span className="plan__price--size">25.99</span>/month
            </span>

            <span className="plan__label-buy">Buy This</span>

            <ul className="plan__list-of-benefits">
              <li className="list-of-benefits__items">
                <img
                  src="./public/Icon-price.png"
                  alt=""
                  className="items__img-price"
                />
                32k Partners have worked us.
              </li>
              <li className="list-of-benefits__items">
                <img
                  src="./public/Icon-price.png"
                  alt=""
                  className="items__img-price"
                />
                Profsiona expernced are resources.
              </li>
              <li className="list-of-benefits__items">
                <img
                  src="./public/Icon-price.png"
                  alt=""
                  className="items__img-price"
                />
                Provide the best roof services
              </li>
              <li className="list-of-benefits__items">
                <img
                  src="./public/Icon-price.png"
                  alt=""
                  className="items__img-price"
                />
                Profsiona expernced are resources.
              </li>
              <li className="list-of-benefits__items">
                <img
                  src="./public/Icon-price.png"
                  alt=""
                  className="items__img-price"
                />
                Provide the best roof services
              </li>
            </ul>
          </div>

          <div className="container-plans__plan">
            <h3 className="plan__title">Basic Plan</h3>

            <span className="plan__label">
              Roofing mbrae change parthriving brace
            </span>

            <span className="plan__price">
              <span className="plan__price--position">$</span>
              <span className="plan__price--size">25.99</span>/month
            </span>

            <span className="plan__label-buy">Buy This</span>

            <ul className="plan__list-of-benefits">
              <li className="list-of-benefits__items">
                <img
                  src="./public/Icon-princing1.png"
                  alt=""
                  className="items__img-price"
                />
                32k Partners have worked us.
              </li>
              <li className="list-of-benefits__items">
                <img
                  src="./public/Icon-princing1.png"
                  alt=""
                  className="items__img-price"
                />
                Profsiona expernced are resources.
              </li>
              <li className="list-of-benefits__items">
                <img
                  src="./public/Icon-princing1.png"
                  alt=""
                  className="items__img-price"
                />
                Provide the best roof services
              </li>
              <li className="list-of-benefits__items">
                <img
                  src="./public/Icon-princing1.png"
                  alt=""
                  className="items__img-price"
                />
                Profsiona expernced are resources.
              </li>
              <li className="list-of-benefits__items">
                <img
                  src="./public/Icon-princing1.png"
                  alt=""
                  className="items__img-price"
                />
                Provide the best roof services
              </li>
            </ul>
          </div>
          <div className="container-plans__plan">
            <h3 className="plan__title">Basic Plan</h3>

            <span className="plan__label">
              Roofing mbrae change parthriving brace
            </span>

            <span className="plan__price">
              <span className="plan__price--position">$</span>
              <span className="plan__price--size">25.99</span>/month
            </span>

            <span className="plan__label-buy">Buy This</span>

            <ul className="plan__list-of-benefits">
              <li className="list-of-benefits__items">
                <img
                  src="./public/Icon-price.png"
                  alt=""
                  className="items__img-price"
                />
                32k Partners have worked us.
              </li>
              <li className="list-of-benefits__items">
                <img
                  src="./public/Icon-price.png"
                  alt=""
                  className="items__img-price"
                />
                Profsiona expernced are resources.
              </li>
              <li className="list-of-benefits__items">
                <img
                  src="./public/Icon-price.png"
                  alt=""
                  className="items__img-price"
                />
                Provide the best roof services
              </li>
              <li className="list-of-benefits__items">
                <img
                  src="./public/Icon-price.png"
                  alt=""
                  className="items__img-price"
                />
                Profsiona expernced are resources.
              </li>
              <li className="list-of-benefits__items">
                <img
                  src="./public/Icon-price.png"
                  alt=""
                  className="items__img-price"
                />
                Provide the best roof services
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <section className="about-us-section">
        <div className="about-us-section_container-about-us-section container content-standard">
          <img
            src="./public/Image-about-us.png"
            alt=""
            className="container-about-us-section__img"
          />

          <div className="container-about-us-section__container-additional-information">
            <h3 className="container-about-us-section__label content-standard__label">
              About us
            </h3>

            <h2 className="container-about-us-section__title content-standard__title">
              Our Best Digital <br />
              Marketing Services
            </h2>

            <p className="container-about-us-section__paragraphy">
              There are many variations of passages of Lorem Ipsum available,
              but the majori have suffered alteration in some form, by injected
              humour, or believableThere are many variation.
            </p>

            <ul className="container-about-us-section__list-of-statistics">
              <li>
                <img src="./public/Business Development.png" alt="" />
              </li>
              <li>
                <img src="./public/Business Analysis Data.png" alt="" />
              </li>
              <li>
                <img src="./public/Web Design Development@2x.png" alt="" />
              </li>
            </ul>

            <button className="container-about-us-section__button">
              Discover more
            </button>
          </div>
        </div>
      </section>

      <section className="our-blog-news-section">
        <div className="our-blog-news-section_container-our-blog-news-section container content-standard">
          <h3 className="container-our-blog-news-section__label content-standard__label">
            Our blog & news
          </h3>

          <h2 className="container-our-blog-news-section__title content-standard__title">
            Explore Our Latest News & Article
          </h2>

          <div className="container-our-blog-news-section__container-news">
            <article className="container-news__article">
              <header className="article__header"></header>
              <div className="article__main-content-article">
                <div className="main-content-article__inf-article">
                  <span className="inf-article__item">
                    <img src="./public/Icon-our-blog-news-section.png" alt="" />
                    By Admin
                  </span>
                  <span className="inf-article__item">
                    <img
                      src="./public/Icon(1)-our-blog-news-section.png"
                      alt=""
                    />
                    28 Mar 2023
                  </span>
                  <span className="inf-article__item">
                    <img
                      src="./public/Icon(2)-our-blog-news-section.png"
                      alt=""
                    />
                    2
                  </span>
                </div>
                <p className="main-content-article__paragraphy">
                  Five ways that can develop your business website
                </p>
                <a href=";" className="main-content-article__link-leran-more">
                  Learn More <img src="./public/arrow-right.png" alt="" />
                </a>
              </div>
            </article>

            <article className="container-news__article">
              <header className="article__header"></header>
              <div className="article__main-content-article">
                <div className="main-content-article__inf-article">
                  <span className="inf-article__item">
                    <img
                      src="./public/Icon-our-blog-news-section-preto.png"
                      alt=""
                    />
                    By Admin
                  </span>
                  <span className="inf-article__item">
                    <img
                      src="./public/Icon(1)-our-blog-news-section-preto.png"
                      alt=""
                    />
                    28 Mar 2023
                  </span>
                  <span className="inf-article__item">
                    <img
                      src="./public/Icon(2)-our-blog-news-section-preto.png"
                      alt=""
                    />
                    2
                  </span>
                </div>
                <p className="main-content-article__paragraphy">
                  Five ways that can develop your business website
                </p>
                <a href=";" className="main-content-article__link-leran-more">
                  Learn More <img src="./public/arrow-right-preto.png" alt="" />
                </a>
              </div>
            </article>

            <article className="container-news__article">
              <header className="article__header"></header>
              <div className="article__main-content-article">
                <div className="main-content-article__inf-article">
                  <span className="inf-article__item">
                    <img src="./public/Icon-our-blog-news-section.png" alt="" />
                    By Admin
                  </span>
                  <span className="inf-article__item">
                    <img
                      src="./public/Icon(1)-our-blog-news-section.png"
                      alt=""
                    />
                    28 Mar 2023
                  </span>
                  <span className="inf-article__item">
                    <img
                      src="./public/Icon(2)-our-blog-news-section.png"
                      alt=""
                    />
                    2
                  </span>
                </div>
                <p className="main-content-article__paragraphy">
                  Five ways that can develop your business website
                </p>
                <a href=";" className="main-content-article__link-leran-more">
                  Learn More <img src="./public/arrow-right.png" alt="" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
