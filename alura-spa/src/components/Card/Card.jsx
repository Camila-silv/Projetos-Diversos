export default function Card({title, paragraphy, img, alt}) {
  return (
    <div className="container-card__card">
      <div className="card__container-img">
        <img
          className="container-img__img"
          src={img}
          alt={alt}
        />
      </div>

      <h5 className="card__title">{title}</h5>
      <p className="card__paragraphy">
      {paragraphy}
      </p>
    </div>
  );
}
