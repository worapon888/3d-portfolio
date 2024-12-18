import PropTypes from "prop-types";

const Button = ({ name, isBeam = false, containerClass }) => {
  return (
    <button className={`btn ${containerClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired, // 'name' is required and should be a string
  isBeam: PropTypes.bool, // 'isBeam' is optional and should be a boolean
  containerClass: PropTypes.string, // 'containerClass' is optional and should be a string
};
export default Button;
