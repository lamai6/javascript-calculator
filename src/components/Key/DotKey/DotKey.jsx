import PropTypes from 'prop-types';
import Key from '../Key';

function DotKey({ id, value, style, input, setInput, result, setResult }) {
  const removeExcessDots = (formula) => {
    const lastNumber = formula.split(/[+/*-]/).reverse()[0];
    const hasExcessDots = lastNumber.match(/\./g)?.length > 1;

    if (lastNumber.startsWith('.')) return `${formula.slice(0, -1)}0.`;
    if (hasExcessDots) return formula.slice(0, -1);
    return formula;
  };

  const addDotToInput = () => {
    setInput(removeExcessDots(`${input}${value}`));
    setResult(removeExcessDots(`${result}${value}`));
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
  result: PropTypes.string.isRequired,
  setResult: PropTypes.func.isRequired,
};

DotKey.defaultProps = {
  style: {},
};

export default DotKey;
