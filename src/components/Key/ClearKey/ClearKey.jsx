import PropTypes from 'prop-types';
import Key from '../Key';

function ClearKey({ id, value, style, setInput, setResult }) {
  const clear = () => {
    setInput('');
    setResult('0');
  };

  return <Key id={id} value={value} style={style} handleClick={clear} />;
}

ClearKey.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
  }),
  setInput: PropTypes.func.isRequired,
  setResult: PropTypes.func.isRequired,
};

ClearKey.defaultProps = {
  style: {},
};

export default ClearKey;
