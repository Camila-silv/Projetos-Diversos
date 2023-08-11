import PropTypes from "prop-types";

export default function ContainerInput({label, placeholder}) {
    return (
        <div className="container-input">
            <label className="container-input__label" htmlFor="">{label}</label>
            <input className="container-input__input" type="text" placeholder={placeholder}/>
        </div>
    )
}

ContainerInput.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string
}