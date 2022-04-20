import PropTypes from 'prop-types';
import Key from '../Key';

function NumberKey({
  id,
  value,
  style,
  input,
  setInput,
  result,
  setResult,
  keyCode,
  keyTriggered,
  setKey,
}) {
  const startsWithOperator = (str) =>
    ['+', '-', '*', '/'].some((op) => str.startsWith(op));

  const removeUselessZeros = (formula) => {
    const lastNum = formula.split(/[+*-/]/).reverse()[0];
    if (lastNum.startsWith('0')) return formula.slice(0, -1);
    return formula;
  };

  const updateResult = (resultToFormat) => {
    if (startsWithOperator(resultToFormat)) return resultToFormat.slice(1);
    return removeUselessZeros(resultToFormat);
  };

  const addKeyToInput = () => {
    setInput(`${removeUselessZeros(input)}${value}`);
    setResult(`${updateResult(result)}${value}`);
  };

  return (
    <Key
      id={id}
      value={value}
      style={style}
      handleClick={addKeyToInput}
      keyCode={keyCode}
      keyTriggered={keyTriggered}
      setKey={setKey}
    />
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
  keyCode: PropTypes.string.isRequired,
  keyTriggered: PropTypes.string.isRequired,
  setKey: PropTypes.func.isRequired,
};

NumberKey.defaultProps = {
  style: {},
};

export default NumberKey;
