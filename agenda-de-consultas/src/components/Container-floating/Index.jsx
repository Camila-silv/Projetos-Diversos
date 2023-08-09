import { useState } from "react";
import PropTypes from "prop-types";


export default function ContainerFloating({label, children}) {
    const [displayE, setDisplayE] = useState(false);

  return (
    <div className="container-floating">
      {displayE === true ? (
        <span className="container-floating__span">
          {label}
        </span>
      ) : null}
      <button
        className="container-floating__floating-button floating-button"
        onMouseOver={() => {
          setDisplayE(true);
        }}
        onMouseOut={() => {
          setDisplayE(false);
        }}
      >

        {children}
      </button>
    </div>
  );
}

ContainerFloating.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}
