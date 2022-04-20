import PropTypes from 'prop-types';
import Key from '../Key';

function DotKey({
  keyInfo,
  input,
  setInput,
  result,
  setResult,
  keyTriggered,
  removeKey,
}) {
  const {
    style,
    key: { id, value, keyCode },
  } = keyInfo;

  const startsWithOperator = (str) =>
    ['+', '-', '*', '/'].some((op) => str.startsWith(op));

  const removeExcessDots = (formula) => {
    const lastNumber = formula.split(/[+/*-]/).reverse()[0];
    const hasExcessDots = lastNumber.match(/\./g)?.length > 1;

    if (lastNumber.startsWith('.')) return `${formula.slice(0, -1)}0.`;
    if (hasExcessDots) return formula.slice(0, -1);
    return formula;
  };

  const cleanResult = (resultToFormat) => {
    if (startsWithOperator(resultToFormat)) {
      return `0${resultToFormat.slice(1)}`;
    }
    return removeExcessDots(resultToFormat);
  };

  const addDotToInput = () => {
    setInput(removeExcessDots(`${input}${value}`));
    setResult(cleanResult(`${result}${value}`));
  };

  return (
    <Key
      id={id}
      value={value}
      style={style}
      handleClick={addDotToInput}
      keyCode={keyCode}
      keyTriggered={keyTriggered}
      removeKey={removeKey}
    />
  );
}

DotKey.propTypes = {
  keyInfo: PropTypes.shape({
    style: PropTypes.shape({
      backgroundColor: PropTypes.string,
      color: PropTypes.string,
    }),
    key: PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
      keyCode: PropTypes.string,
    }),
  }).isRequired,
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  result: PropTypes.string.isRequired,
  setResult: PropTypes.func.isRequired,
  keyTriggered: PropTypes.string.isRequired,
  removeKey: PropTypes.func.isRequired,
};

export default DotKey;
