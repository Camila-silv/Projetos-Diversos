import GalleryItem from "./Gallery-item/Gallery-item.jsx";

export default function OurProjects() {

  

  return (
    <section className="section-our-projects">
      <div className="section-our-projects__container-our-projects container-center">
        <h2 className="container-our-projects__title title-default">
          Our projects
        </h2>

        <span className="container-our-projects__label label-default">
          What we create
        </span>

        <ul className="container-our-projects__project-menu">
          <li className="project-menu__menu-option">All</li>
          <li className="project-menu__menu-option">Photos</li>
          <li className="project-menu__menu-option">Branding</li>
          <li className="project-menu__menu-option">Adverts</li>
          <li className="project-menu__menu-option">Development</li>
          <li className="project-menu__menu-option">Misc</li>
        </ul>

        <ul className="container-our-projects__gallery container-width-default">
          <GalleryItem id="0" img="./src/assets/images/complementos/foto9.jpg" />

          <GalleryItem id="1" img="./src/assets/images/complementos/foto3.jpg" />

          <GalleryItem id="2" img="./src/assets/images/complementos/foto1.jpg" />

          <GalleryItem id="3" img="./src/assets/images/complementos/foto4.jpg" />

          <GalleryItem id="4" img="./src/assets/images/complementos/foto5.jpg" />

          <GalleryItem id="5" img="./src/assets/images/complementos/foto6.jpg" />

          <GalleryItem id="6" img="./src/assets/images/complementos/foto7.jpg" />

          <GalleryItem id="7" img="./src/assets/images/complementos/foto8.jpg" />
        </ul>

        <button className="container-our-projects__button button">
          More projects
        </button>
      </div>
    </section>
  );
}
