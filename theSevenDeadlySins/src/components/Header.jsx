export default function Header() {
  return (
    <header className="main-header">
      <div className="container-main-header">
        <figure className="container-main-header__container-logo">
          <img
            className="container-logo__logo"
            src="./public/logo.png"
            alt="Logo The Seven Deadly Sins"
          />
          <figcaption className="container-logo__figcation" lang="en">
            Logo The Seven Deadly Sins
          </figcaption>
        </figure>
      </div>
    </header>
  );
}
