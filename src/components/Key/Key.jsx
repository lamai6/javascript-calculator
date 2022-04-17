import PropTypes from 'prop-types';
import './Key.styles.scss';

function Key({ id, value, style, handleClick }) {
  return (
    <button {...{ style }} onClick={handleClick} id={id} type="button">
      {value}
    </button>
  );
}

Key.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
  }),
  handleClick: PropTypes.func.isRequired,
};

Key.defaultProps = {
  style: {},
};

export default Key;
