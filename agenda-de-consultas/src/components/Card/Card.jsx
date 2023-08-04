import { VscComment } from "react-icons/vsc";
import { PiVideoCamera } from "react-icons/pi";

export default function Card() {
  return (
    <div className="container-appointments__appointment-information">
      <div className="appointment-information__container-patient">
        <img
          className="container-patient__img"
          src="public/perfil-2.jpg"
          alt=""
        />
        <div className="container-patient__patient">
          <span className="patient__name">Luciana Dias</span>
          <span className="patient__query-modality">
            <PiVideoCamera className="query-modality__icon" />
            Consulta remota
          </span>
        </div>
        <span className="container-patient__container-icon">
          <VscComment className="container-icon__icon" />
        </span>
      </div>

      <div className="appointment-information__container-hour">
        <span className="container-hour__hour">
          14:00 - 15:00 &#40;1 hora&#41;
        </span>
        <div className="container-hour__query-modality">
          <button className="query-modality__video button-default">
            Ligar por vídeo
          </button>
          <button className="query-modality__audio button-default">
            Ligar por áudio
          </button>
        </div>
      </div>
    </div>
  );
}
