import PropTypes from "prop-types";

export default function Button({ label, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};
