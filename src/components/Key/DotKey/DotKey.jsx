import PropTypes from 'prop-types';
import Key from '../Key';

function DotKey({ id, value, style, input, setInput }) {
  const addDotToInput = () => {
    setInput(`${input}${value}`);
  };

  return (
    <Key id={id} value={value} style={style} handleClick={addDotToInput} />
  );
}

DotKey.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
  }),
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
};

DotKey.defaultProps = {
  style: {},
};

export default DotKey;
