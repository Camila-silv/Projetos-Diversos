import PropTypes from "prop-types";


export default function ContainerAppointments({title, children, mClass}) {

    const modifiedClass = `section-scheduled-appointments__container-appointments container ${mClass}`;

    return (
        <div className={modifiedClass}>
          <h2 className="container-appointments__date">{title}</h2>
            {children}
        </div>
    )
}

ContainerAppointments.propTypes = {
    title: PropTypes.string.isRequired,
    mClass: PropTypes.string,
    children: PropTypes.element.isRequired
};