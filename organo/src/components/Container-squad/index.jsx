import PropTypes from "prop-types";
import Card from "../Card";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useRef } from "react";

export default function ContainerSquad({ title, bg, color, members }) {
  const carrousel = useRef(null);

  const arrowLeft = () => {
    carrousel.current.scrollLeft -= carrousel.current.offsetWidth;
  };

  const arrowRight = () => {
   
    carrousel.current.scrollLeft += carrousel.current.offsetWidth;
  };

  return members.length > 0 ? (
    <section className="container-squads" style={{ backgroundColor: bg }}>
      <h3 className="container-squads__title">{title}</h3>
      <hr style={{ backgroundColor: color }} />
      <div className="container-squads__container-squad">
        <BsFillArrowLeftCircleFill className="arrow" onClick={arrowLeft} />

        <div className="container-squad__container-slider" ref={carrousel}>
          <div className="container-squad__container-sliders">
            {members.map((member) => {
              return (
                <Card
                  src={member.imagem}
                  name={member.nome}
                  func={member.cargo}
                  color={color}
                  key={member.nome}
                />
              );
            })}
          </div>
        </div>
        <BsFillArrowRightCircleFill className="arrow" onClick={arrowRight} />
      </div>
    </section>
  ) : null;
}

ContainerSquad.propTypes = {
  title: PropTypes.string,
  bg: PropTypes.string,
  color: PropTypes.string,
  members: PropTypes.array,
};
