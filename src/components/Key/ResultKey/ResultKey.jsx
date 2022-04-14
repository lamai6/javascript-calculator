import PropTypes from 'prop-types';
import Key from '../Key';

function ResultKey({ id, value, style, input, setResult }) {
  const handleClick = () => {
    let result = eval(input);
    if (`${result}`.includes('.')) result = result.toFixed(4);
    setResult(`${result}`);
  };

  return <Key id={id} value={value} style={style} handleClick={handleClick} />;
}

ResultKey.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
  }),
  input: PropTypes.string.isRequired,
  setResult: PropTypes.func.isRequired,
};

ResultKey.defaultProps = {
  style: {},
};

export default ResultKey;
