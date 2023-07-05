export default function GalleryItem({ img, id }) {
  function displayInf() {
    const containerAbot = document.querySelectorAll(
      ".gallery-item__container-about"
    );

    switch (parseInt(id)) {
      case 0:
        containerAbot[id].classList.add(
          "gallery-item__container-about--display-content"
        );
        break;
      case 1:
        containerAbot[id].classList.add(
          "gallery-item__container-about--display-content"
        );
        break;
      case 2:
        containerAbot[id].classList.add(
          "gallery-item__container-about--display-content"
        );
        break;
      case 3:
        containerAbot[id].classList.add(
          "gallery-item__container-about--display-content"
        );
        break;
      case 4:
        containerAbot[id].classList.add(
          "gallery-item__container-about--display-content"
        );
        break;
      case 5:
        containerAbot[id].classList.add(
          "gallery-item__container-about--display-content"
        );
        break;
      case 6:
        containerAbot[id].classList.add(
          "gallery-item__container-about--display-content"
        );
        break;
      case 7:
        containerAbot[id].classList.add(
          "gallery-item__container-about--display-content"
        );
        break;
    }

   
  }

  function hiddenInf() {
    const containerAbot = document.querySelectorAll(
      ".gallery-item__container-about"
    );

    switch (parseInt(id)) {
      case 0:
        containerAbot[id].classList.remove(
          "gallery-item__container-about--display-content"
        );
        break;
      case 1:
        containerAbot[id].classList.remove(
          "gallery-item__container-about--display-content"
        );
        break;
      case 2:
        containerAbot[id].classList.remove(
          "gallery-item__container-about--display-content"
        );
        break;
      case 3:
        containerAbot[id].classList.remove(
          "gallery-item__container-about--display-content"
        );
        break;
      case 4:
        containerAbot[id].classList.remove(
          "gallery-item__container-about--display-content"
        );
        break;
      case 5:
        containerAbot[id].classList.remove(
          "gallery-item__container-about--display-content"
        );
        break;
      case 6:
        containerAbot[id].classList.remove(
          "gallery-item__container-about--display-content"
        );
        break;
      case 7:
        containerAbot[id].classList.remove(
          "gallery-item__container-about--display-content"
        );
        break;
    }

  }

  return (
    <li
      className="gallery__gallery-item"
      id={id}
      onMouseOver={displayInf}
      onMouseOut={hiddenInf}
    >
      <img src={img} alt="/" />
      <div className="gallery-item__container-about">
        <h4 className="container-about__title-about">About</h4>
        <span className="container-about__lbl-about">
          Praesent metus urna, feugiata <br /> placerat elementum at leo
        </span>
      </div>
    </li>
  );
}
