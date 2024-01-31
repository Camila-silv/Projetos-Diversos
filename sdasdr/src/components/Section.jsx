import PropTypes from "prop-types";

export default function Section({ children, title, label, className }) {
  return (
    <section className={className.section}>
      <div className={`${className.sectionContain} container content-standard`}>
        <h3 className={`${className.label} content-standard__label`}>
          {title}
        </h3>

        <h2 className={`${className.title} content-standard__title`}>
          {label}
        </h2>

        {children}
      </div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.object,
  children: PropTypes.children,
};
