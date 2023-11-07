export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        <img
          src="public/logo.svg"
          alt="Logo da Alugames"
          className="title__img"
        />
      </h1>
      <section className="divisor">
        <div className="divisor__line"></div>
        <img src="public/fade_bar.svg" alt="" className="divisor__img" />
        <div className="divisor__line"></div>
      </section>
    </header>
  );
}
