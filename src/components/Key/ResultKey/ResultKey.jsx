import PropTypes from 'prop-types';
import Key from '../Key';

function ResultKey({ id, value, style, input, setResult }) {
  const formatDecimalValues = (result) => {
    const decimal = `${result}`.split('.')[1];
    if (decimal?.length > 4) return `${result.toFixed(4)}`;
    return `${result}`;
  };

  const handleClick = () => {
    setResult(formatDecimalValues(eval(input)));
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
