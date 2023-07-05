export default function ContactUs() {
  return (
    <section className="section-contact-us">
      <div className="section-contact-us__container-contact-us container-center">
        <h2 className="container-contact-us__title title-default">
          Contact us
        </h2>

        <span className="container-contact-us__label label-default">
          Our agency located in Melbourne, <br className="word-wrap" />{" "}
          Australia
        </span>

        <form className="container-contact-us__form-contact-us ">
          <div className="form-contact-us__container">
            <input
              className="form-contact-us__input"
              type="text"
              name=""
              id=""
              placeholder="Name"
            />

            <input
              className="form-contact-us__input"
              type="text"
              name=""
              id=""
              placeholder="E-mail"
            />
          </div>

          <input
            className="form-contact-us__input"
            type="text"
            name=""
            id=""
            placeholder="Subject"
          />

          <input
            className="form-contact-us__input"
            type="text"
            name=""
            id=""
            placeholder="MEssage"
          />

          <input
            className="form-contact-us__button button"
            type="button"
            name=""
            id=""
            value="send message"
          />
        </form>
      </div>
    </section>
  );
}
