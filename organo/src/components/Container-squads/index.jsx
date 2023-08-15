import PropTypes from "prop-types";
import Card from "../Card";

export default function ContainerSquads({ title }) {
  return (
    <div className="container-squads">
      <h3 className="container-squads__title">{title}</h3>
      <div className="container-squads__container-squad">
        {/* container que esconde */}
        <div className="container-squad__container-sliders">
          {/* container que guarda */}
          <Card
            src="public/avatar-1.png"
            name="Juliana Amoasei"
            func="Desenvolvedora de software e instrutora"
          />

          <Card
            src="public/avatar-1.png"
            name="Juliana Amoasei"
            func="Desenvolvedora de software e instrutora"
          />

          <Card
            src="public/avatar-1.png"
            name="Juliana Amoasei"
            func="Desenvolvedora de software e instrutora"
          />

          <Card
            src="public/avatar-1.png"
            name="Juliana Amoasei"
            func="Desenvolvedora de software e instrutora"
          />
        </div>
      </div>
    </div>
  );
}

ContainerSquads.propTypes = {
  title: PropTypes.string,
};
