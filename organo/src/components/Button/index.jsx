import PropTypes from "prop-types";


export default function Button({value}) {
  return (
    <button className="button-form">{value}</button>
  );
}

Button.propTypes = {
    value: PropTypes.string.isRequired
}
