export default function AdvantagesStamp({ src, alt, title, label, labelCont }) {
  return (
    <div className="container-advantages-stamp">
      <img className="container-advantages-stamp__img" src={src} alt={alt} />
      <h3 className="container-advantages-stamp__title">{title}</h3>
      <span className="container-advantages-stamp__label">
        {label} <br />
        {labelCont}
      </span>
    </div>
  );
}
