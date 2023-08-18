import PropTypes from "prop-types";
import Card from "../Card";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

export default function ContainerSquad({ title, bg, color, members }) {
  return members.length > 0 ? (
    <section className="container-squads" style={{ backgroundColor: bg }}>
      <h3 className="container-squads__title">{title}</h3>
      <hr style={{ backgroundColor: color }} />
      <div className="container-squads__container-squad">
        <BsFillArrowLeftCircleFill className="arrow" />
        <div className="container-squad__container-slider">
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
        <BsFillArrowRightCircleFill className="arrow" />
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
