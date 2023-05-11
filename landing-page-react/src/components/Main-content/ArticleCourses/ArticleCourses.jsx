export default function ArticleCurses({src, alt, lbl, className}) {
  return (
    <article className={className}>
      <img
        className="article-courses__img"
        src={src}
        alt={alt}
      />
      <label className="article-courses__label">{lbl}</label>
      <p className="article-courses__parag">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna
        aliqua.
      </p>
      <a className="article-courses__link" href="/">
        <img src="src/assets/images/arrow-right.svg" alt="seta para direita" />
      </a>
    </article>
  );
}
