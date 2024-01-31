export default function Banner() {
  return (
    <section className="banner">
      <div className="banner__container-banner container">
        <div className="container-banner__container-img">
          <img
            src="./public/Image.png"
            alt=""
            className="container-img__img-banner"
          />
        </div>
        <div className="container-banner__container-company-presentation">
          <h1 className="container-company-presentation__title">
            Best Dising <br />
            Creative Agency
          </h1>

          <p className="container-company-presentation__paragraphy">
            Our passion for sustainability has driven us to refine our proce
            leaders in web sustainability and performance helping to shift
            towards a zero-carbon future.
          </p>
          <button className="container-company-presentation__button default-button">
            Get Started Now <img src="./public/arrow-right.png" alt="" />
          </button>
        </div>
      </div>

      <ul className="banner__contacts-list">
        <li className="contacts-list__contacts-list-item">
          <a href="" className="contacts-list-item__contacts-list-link"></a>
        </li>
        <li className="contacts-list__contacts-list-item">
          <a href="" className="contacts-list-item__contacts-list-link"></a>
        </li>
        <li className="contacts-list__contacts-list-item">
          <a href="" className="contacts-list-item__contacts-list-link"></a>
        </li>
        <li className="contacts-list__contacts-list-item">
          <a href="" className="contacts-list-item__contacts-list-link"></a>
        </li>
      </ul>
    </section>
  );
}
