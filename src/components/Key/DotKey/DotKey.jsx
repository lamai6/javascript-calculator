import PropTypes from 'prop-types';
import Key from '../Key';

function DotKey({ id, value, style, input, addKeyToInput }) {
  const handleClick = () => {
    addKeyToInput(value);
  };

  return <Key id={id} value={value} style={style} handleClick={handleClick} />;
}

DotKey.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
  }),
  addKeyToInput: PropTypes.func.isRequired,
};

DotKey.defaultProps = {
  style: {},
};

export default DotKey;
