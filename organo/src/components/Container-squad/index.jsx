import PropTypes from "prop-types";
import Card from "../Card";

export default function ContainerSquad({ title, bg, color, members }) {
  return (
    <section
      className="container-squads"
      style={{ backgroundColor: bg }}
      onClick={() => {
        console.log(color);
      }}
    >
      <h3 className="container-squads__title">{title}</h3>
      <hr style={{ backgroundColor: color }} />
      <div className="container-squads__container-squad">
        {/* container que esconde */}
        <div className="container-squad__container-sliders">
          {/* container que guarda */}

          {members.map((member) => {
            console.log(members);
            return (
              <Card
                src={member.img}
                name={member.memberName}
                func={member.func}
                color={color}
                key={member.memberName}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

ContainerSquad.propTypes = {
  title: PropTypes.string,
  bg: PropTypes.string,
  color: PropTypes.string,
  members: PropTypes.array,
};
