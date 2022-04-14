import PropTypes from 'prop-types';
import Key from '../Key';

function OperatorKey({ id, value, style, input, setInput }) {
  const handleClick = () => {
    setInput(`${input}${value}`);
  };

  return <Key id={id} value={value} style={style} handleClick={handleClick} />;
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
};

OperatorKey.defaultProps = {
  style: {},
};

export default OperatorKey;
