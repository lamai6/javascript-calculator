import PropTypes from 'prop-types';
import Key from '../Key';

function ClearKey({ keyInfo, setInput, setResult, keyTriggered, removeKey }) {
  const {
    style,
    key: { id, value, keyCode },
  } = keyInfo;

  const clear = () => {
    setInput('');
    setResult('0');
  };

  return (
    <Key
      id={id}
      value={value}
      style={style}
      handleClick={clear}
      keyCode={keyCode}
      keyTriggered={keyTriggered}
      removeKey={removeKey}
    />
  );
}

ClearKey.propTypes = {
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
  setInput: PropTypes.func.isRequired,
  setResult: PropTypes.func.isRequired,
  keyTriggered: PropTypes.string.isRequired,
  removeKey: PropTypes.func.isRequired,
};

export default ClearKey;
