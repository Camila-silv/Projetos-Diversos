import PropTypes from "prop-types";

export default function Service({url, service, value, delay}) {
  return (
    <div
      className="container-section-services__container-services"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <img
        src={url}
        alt="Ilustração dos tipos de serviços"
        className="container-services__img"
      />

      <div className="container-services__container-services-inf">
        <span className="container-services-inf__label-service">
          {service}
        </span>
        <span className="container-services-inf__label-value">{value}</span>
      </div>
    </div>
  );
}

Service.propTypes = {
  url: PropTypes.string,
  service: PropTypes.string,
  value: PropTypes.string,
  delay: PropTypes.string,
}
