import PropTypes from 'prop-types';
import Key from '../Key';

function EqualsKey({
  keyInfo,
  input,
  setInput,
  setResult,
  keyTriggered,
  removeKey,
}) {
  const {
    style,
    key: { id, value, keyCode },
  } = keyInfo;

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
  setResult: PropTypes.func.isRequired,
  keyTriggered: PropTypes.string.isRequired,
  removeKey: PropTypes.func.isRequired,
};

export default EqualsKey;
