export default function AboutUs() {
  return (
    <section className="section-about-us">
      <div className="section-about-us__container-about-us container-center">
        <h2 className="container-about-us__title title-default">About us</h2>

        <span className="container-about-us__lbl label-default">
          Who we are?
        </span>

        <div className="container-width-default">
          <div>
            <p className="container-about-us__parag">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              nemo, laudantium quis modi ipsa reiciendis commodi inventore
              eligendi ea iusto adipisci ab repudiandae consectetur maxime?
              Ratione quo, rerum aut provident iste repellendus vitae
              perspiciatis laudantium ea magni. Numquam praesentium unde
              cupiditate dolor distinctio, suscipit impedit possimus optio quis
              tenetur beatae, dicta omnis perspiciatis in! Dolore consectetur
              autem corrupti rem quas!
            </p>

            <button className="container-about-us__button button">
              Learn more
            </button>
          </div>

          <div className="container-about-us__video">
            <iframe
              src="https://www.youtube.com/embed/N-YuSKeFMxY"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
