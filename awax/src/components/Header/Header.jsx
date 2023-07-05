export default function Header() {
  return (
    <header className="main-header">
      <div className="main-header__container-main-header container-width-default">
        <span className="container-main-header__logo"></span>

        <div className="container-main-header__container-nav-contact">
          <span className="container-nav-contact__contact">
            
          </span>

          <img
            className="container-nav-contact__icon-nav"
            src="./src/assets/images/icones/menu.png"
            alt=""
          />

          <nav className="container-nav-contact__main-nav ">
            <ul className="main-nav__list-links-main-nav">
              <li className="list-links-main-nav__items-links"><a href="http://">Home</a></li>
              <li className="list-links-main-nav__items-links"><a href="http://">About</a></li>
              <li className="list-links-main-nav__items-links"><a href="http://">Services</a></li>
              <li className="list-links-main-nav__items-links"><a href="http://">Our projects</a></li>
              <li className="list-links-main-nav__items-links"><a href="http://">Our team</a></li>
              <li className="list-links-main-nav__items-links"><a href="http://">Happy clients</a></li>
              <li className="list-links-main-nav__items-links"><a href="http://">Price</a></li>
              <li className="list-links-main-nav__items-links"><a href="http://">Some facts</a></li>
              <li className="list-links-main-nav__items-links"><a href="http://">Contacts</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
