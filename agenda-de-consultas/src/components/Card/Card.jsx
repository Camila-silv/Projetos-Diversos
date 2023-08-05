import { VscComment } from "react-icons/vsc";
import { PiVideoCamera } from "react-icons/pi";
import {CiLocationOn } from "react-icons/ci";
import PropTypes from "prop-types";

export default function Card({ name, modality, hour, photo, icon }) {
  return (
    <div className="container-appointments__appointment-information">
      <div className="appointment-information__container-patient">
        <img
          className="container-patient__img"
          src={photo}
          alt="Foto de perfil do usuário"
        />
        <div className="container-patient__patient">
          <span className="patient__name">{name}</span>
          <span className="patient__query-modality">
            {icon === "Consulta remota" ?  <PiVideoCamera className="query-modality__icon" /> : <CiLocationOn className="query-modality__icon"/>}
            
            {modality}
          </span>
        </div>
        <span className="container-patient__container-icon">
          <VscComment className="container-icon__icon" />
        </span>
      </div>

      <div className="appointment-information__container-hour">
        <span className="container-hour__hour">{hour}</span>
        <div className="container-hour__query-modality">
          {modality === "Consulta remota" ? (
            <>
              <button className="query-modality__video button-default">
                Ligar por vídeo
              </button>
              <button className="query-modality__audio button-default">
                Ligar por áudio
              </button>
            </>
          ) : <button className="button-default button-address" >Ver endereço</button> }
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  modality: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};
