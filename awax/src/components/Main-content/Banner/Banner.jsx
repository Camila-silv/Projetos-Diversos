export default function Banner() {
  return (
    <section className="section-banner">
      <div className="section-banner__container-banner">
      
          <div className="container-banner__sliders">
            <div className="sliders__slider-banner">
              <h2 className="slider-banner__title">
                Design is about
                <br />
                <span className="title--color">communication</span>
              </h2>
              <div className="slider-banner__call-us">
                <span>Call us:</span>
                <span>+00 0 1234 5678</span>
              </div>
              <button className="slider-banner__button button">
                Get in touch!
              </button>
            </div>

           
          </div>
       

        <div className="container-default-scroll">
          <div className="scroll scroll--selected"></div>
          <div className="scroll"></div>
          <div className="scroll"></div>
        </div>
      </div>
    </section>
  );
}
