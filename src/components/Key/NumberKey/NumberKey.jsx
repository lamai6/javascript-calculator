import PropTypes from 'prop-types';
import Key from '../Key';

function NumberKey({ id, value, style, input, setInput, result, setResult }) {
  const removeUselessZero = (num) => {
    if (num.startsWith('0')) return num.slice(1);
    return num;
  };

  const addKeyToInput = () => {
    setInput(`${input}${value}`);
    setResult(`${removeUselessZero(result)}${value}`);
  };

  return (
    <Key id={id} value={value} style={style} handleClick={addKeyToInput} />
  );
}

NumberKey.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
  }),
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  result: PropTypes.string.isRequired,
  setResult: PropTypes.func.isRequired,
};

NumberKey.defaultProps = {
  style: {},
};

export default NumberKey;
