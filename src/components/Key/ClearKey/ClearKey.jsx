import PropTypes from 'prop-types';
import Key from '../Key';

function ClearKey({ id, value, style, clearInput, clearDisplay }) {
  const handleClick = () => {
    clearInput();
    clearDisplay();
  };

  return <Key id={id} value={value} style={style} handleClick={handleClick} />;
}

ClearKey.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
  }),
  clearInput: PropTypes.func.isRequired,
  clearDisplay: PropTypes.func.isRequired,
};

ClearKey.defaultProps = {
  style: {},
};

export default ClearKey;
