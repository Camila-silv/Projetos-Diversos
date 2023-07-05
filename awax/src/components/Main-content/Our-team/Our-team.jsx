export default function OurTeam() {
  //passar alimpo, esse codigo e do cliente, mas tem como usar aqui
  const toggle = (e) => {
    const element = e.target.id;
    const sliders = document.querySelector(".container-collaborators__sliders-collaborators");
    const scroll = document.querySelector(".container-our-team__container-scroll");

    switch(element) {
      case "scroll01-our-team":
        sliders.style.left = "0px";
        sliders.style.transition = ".6s";
        scroll.children[1].classList.remove("scroll--selected");
        scroll.children[2].classList.remove("scroll--selected");
        scroll.children[0].classList.add("scroll--selected");
        break;
      case "scroll02-our-team":
        sliders.style.left = "-220px";
        sliders.style.transition = ".6s";
        scroll.children[0].classList.remove("scroll--selected");
        scroll.children[2].classList.remove("scroll--selected");
        scroll.children[1].classList.add("scroll--selected");
        break;
      case "scroll03-our-team":
        sliders.style.left = "-445px";
        sliders.style.transition = ".6s";
        scroll.children[0].classList.remove("scroll--selected");
        scroll.children[1].classList.remove("scroll--selected");
        scroll.children[2].classList.add("scroll--selected");
        break;
    }
  };


  return (
    <section className="section-our-team">
      <div className="section-our-team__container-our-team container-center">
        <h2 className="container-our-team__title title-default">
          Our team
        </h2>

        <span className="container-our-team__label label-default">
          Our co - workers
        </span>

        <div className="container-our-team__container-collaborators">
          
          <div className="container-collaborators__sliders-collaborators container-width-default">
            
            <div className="sliders-collaborators__slider-collaborators">
              <img
                className="slider-collaborators__img"
                src="src/assets/images/complementos/mulher1.png"
                alt=""
              />

              <span className="slider-collaborators__name">Jane Doe</span>
              <span className="slider-collaborators__function">
                Master Mind
              </span>

              <div className="slider-collaborators__network">
                <li>
                  <img src="src/assets/images/icones/twitter.png" alt="" />
                </li>
                <li>
                  <img src="src/assets/images/icones/linkedin.png" alt="" />
                </li>
                <li>
                  <img src="src/assets/images/icones/facebook.png" alt="" />
                </li>
                <li>
                  <img src="src/assets/images/icones/googleplus.png" alt="" />
                </li>
              </div>
            </div>

            <div className="sliders-collaborators__slider-collaborators">
              <img
                className="slider-collaborators__img"
                src="src/assets/images/complementos/homem1.png"
                alt=""
              />

              <span className="slider-collaborators__name">Mike Shiller</span>
              <span className="slider-collaborators__function">
                Creative head
              </span>

              <div className="slider-collaborators__network">
                <li>
                  <img src="src/assets/images/icones/twitter.png" alt="" />
                </li>
                <li>
                  <img src="src/assets/images/icones/linkedin.png" alt="" />
                </li>
                <li>
                  <img src="src/assets/images/icones/facebook.png" alt="" />
                </li>
                <li>
                  <img src="src/assets/images/icones/googleplus.png" alt="" />
                </li>
              </div>
            </div>

            <div className="sliders-collaborators__slider-collaborators">
              <img
                className="slider-collaborators__img"
                src="src/assets/images/complementos/mulher2.png"
                alt=""
              />

              <span className="slider-collaborators__name">Anna Johns</span>
              <span className="slider-collaborators__function">
                Technical lead
              </span>

              <div className="slider-collaborators__network">
                <li>
                  <img src="src/assets/images/icones/twitter.png" alt="" />
                </li>
                <li>
                  <img src="src/assets/images/icones/linkedin.png" alt="" />
                </li>
                <li>
                  <img src="src/assets/images/icones/facebook.png" alt="" />
                </li>
                <li>
                  <img src="src/assets/images/icones/googleplus.png" alt="" />
                </li>
              </div>
            </div>
          </div>
        </div>

        <div className="container-default-scroll container-our-team__container-scroll">
          <div id="scroll01-our-team" onClick={toggle} className="scroll scroll--selected container-scroll__scroll"></div>
          <div id="scroll02-our-team" onClick={toggle} className="scroll container-scroll__scroll"></div>
          <div id="scroll03-our-team" onClick={toggle} className="scroll container-scroll__scroll"></div>
        </div>
      </div>
    </section>
  );
}
