export default function HappyClients() {
  const toggle = (e) => {
    const element = e.target.id;
    const sliders = document.querySelector(".container-clients__sliders-clients");
    const scroll = document.querySelector(".container-happy-clients__container-scroll");

    switch(element) {
      case "scroll01":
        sliders.style.left = "0px";
        sliders.style.transition = ".6s";
        scroll.children[1].classList.remove("scroll--selected");
        scroll.children[2].classList.remove("scroll--selected");
        scroll.children[0].classList.add("scroll--selected");
        break;
      case "scroll02":
        sliders.style.left = "-246px";
        sliders.style.transition = ".6s";
        scroll.children[0].classList.remove("scroll--selected");
        scroll.children[2].classList.remove("scroll--selected");
        scroll.children[1].classList.add("scroll--selected");
        break;
      case "scroll03":
        sliders.style.left = "-492px";
        sliders.style.transition = ".6s";
        scroll.children[0].classList.remove("scroll--selected");
        scroll.children[1].classList.remove("scroll--selected");
        scroll.children[2].classList.add("scroll--selected");
        break;
    }
  };

  return (
    <section className="section-happy-clients">
      <div className="section-happy-clients__container-happy-clients container-center">
        <h2 className="container-happy-clients__title title-default">
          Happy clients
        </h2>

        <span className="container-happy-clients__label label-default">
          Clients reviews
        </span>

        <div className="container-happy-clients__container-clients">
          <div className="container-clients__sliders-clients">
            <div className="sliders-clients__slider-clients">
              <img
                className="slider-clients__img"
                src="src/assets/images/complementos/homem2.png"
                alt=""
              />

              <span className="slider-clients__name">John Doe0</span>
              <span className="slider-clients__function">
                Head of PR Departament
              </span>

              <span className="slider-clients__decoration"></span>

              <p className="slider-clients__testimony">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                enim illum maiores, quo error eaque excepturi vitae sed
                voluptates nulla molestiae adipisci? Totam, hic! Ipsam beatae
                illum harum nam repellat.
              </p>
            </div>

            <div className="sliders-clients__slider-clients">
              <img
                className="slider-clients__img"
                src="src/assets/images/complementos/homem2.png"
                alt=""
              />

              <span className="slider-clients__name">John Doe1</span>
              <span className="slider-clients__function">
                Head of PR Departament
              </span>

              <span className="slider-clients__decoration"></span>

              <p className="slider-clients__testimony">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                enim illum maiores, quo error eaque excepturi vitae sed
                voluptates nulla molestiae adipisci? Totam, hic! Ipsam beatae
                illum harum nam repellat.
              </p>
            </div>

            <div className="sliders-clients__slider-clients">
              <img
                className="slider-clients__img"
                src="src/assets/images/complementos/homem2.png"
                alt=""
              />

              <span className="slider-clients__name">John Doe2</span>
              <span className="slider-clients__function">
                Head of PR Departament
              </span>

              <span className="slider-clients__decoration"></span>

              <p className="slider-clients__testimony">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                enim illum maiores, quo error eaque excepturi vitae sed
                voluptates nulla molestiae adipisci? Totam, hic! Ipsam beatae
                illum harum nam repellat.
              </p>
            </div>
          </div>
        </div>

        <div className="container-default-scroll container-happy-clients__container-scroll">
          <div
            onClick={toggle}
            id="scroll01"
            className="scroll scroll--selected"
          ></div>
          <div onClick={toggle} id="scroll02" className="scroll"></div>
          <div onClick={toggle} id="scroll03" className="scroll"></div>
        </div>
      </div>
    </section>
  );
}
