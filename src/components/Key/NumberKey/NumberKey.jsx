import PropTypes from 'prop-types';
import Key from '../Key';

function NumberKey({ id, value, style, addKeyToInput }) {
  const handleClick = () => {
    addKeyToInput(value);
  };

  return <Key id={id} value={value} style={style} handleClick={handleClick} />;
}

NumberKey.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
  }),
  addKeyToInput: PropTypes.func.isRequired,
};

NumberKey.defaultProps = {
  style: {},
};

export default NumberKey;
