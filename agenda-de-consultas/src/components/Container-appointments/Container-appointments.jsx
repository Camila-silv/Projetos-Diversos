import PropTypes from "prop-types";

export default function ContainerAppointments({ title, children, mClass }) {
  const modifiedClass = `section-scheduled-appointments__container-appointments container ${mClass}`;

  return (
    <div className={modifiedClass}>
      <h2 className="container-appointments__date">{title}</h2>
      <div className="container-appointments__container-slider">
        <div className="container-slider__sliders">{children}</div>
      </div>
    </div>
  );
}

ContainerAppointments.propTypes = {
  title: PropTypes.string.isRequired,
  mClass: PropTypes.string,
  children: PropTypes.element.isRequired,
};
