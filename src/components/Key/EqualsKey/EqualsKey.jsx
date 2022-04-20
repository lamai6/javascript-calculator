import PropTypes from 'prop-types';
import Key from '../Key';

function EqualsKey({
  id,
  value,
  style,
  input,
  setInput,
  setResult,
  keyCode,
  keyTriggered,
  removeKey,
}) {
  const formatDecimalValues = (result) => {
    const decimal = `${result}`.split('.')[1];
    if (decimal?.length > 4) return `${result.toFixed(4)}`;
    return `${result}`;
  };

  const handleClick = () => {
    try {
      const mathResult = formatDecimalValues(eval(input));
      setInput(mathResult);
      setResult(mathResult);
    } catch {
      setInput('');
      setResult('0');
    }
  };

  return (
    <Key
      id={id}
      value={value}
      style={style}
      handleClick={handleClick}
      keyCode={keyCode}
      keyTriggered={keyTriggered}
      removeKey={removeKey}
    />
  );
}

EqualsKey.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
  }),
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  setResult: PropTypes.func.isRequired,
  keyCode: PropTypes.string.isRequired,
  keyTriggered: PropTypes.string.isRequired,
  removeKey: PropTypes.func.isRequired,
};

EqualsKey.defaultProps = {
  style: {},
};

export default EqualsKey;
