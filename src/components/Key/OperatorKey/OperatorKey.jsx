import PropTypes from 'prop-types';
import Key from '../Key';

function OperatorKey({
  id,
  value,
  style,
  input,
  setInput,
  setResult,
  keyCode,
  keyTriggered,
  setKey,
}) {
  const handleClick = () => {
    const endsWithOperator = ['+', '-', '*', '/'].some((op) =>
      input.endsWith(op)
    );

    const endsWithMinusOperator = ['+', '*', '/'].some((op) =>
      input.endsWith(`${op}-`)
    );

    if (endsWithMinusOperator) setInput(`${input.slice(0, -2)}${value}`);
    else if (endsWithOperator && value !== '-') {
      setInput(`${input.slice(0, -1)}${value}`);
    } else setInput(`${input}${value}`);

    setResult(`${value}`);
  };

  return (
    <Key
      id={id}
      value={value}
      style={style}
      handleClick={handleClick}
      keyCode={keyCode}
      keyTriggered={keyTriggered}
      setKey={setKey}
    />
  );
}

OperatorKey.propTypes = {
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
  setKey: PropTypes.func.isRequired,
};

OperatorKey.defaultProps = {
  style: {},
};

export default OperatorKey;
