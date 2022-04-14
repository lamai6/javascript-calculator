import PropTypes from 'prop-types';
import Key from '../Key';

function ClearKey({ id, value, style, clearInput }) {
  const handleClick = () => {
    clearInput();
  };

  return <Key id={id} value={value} style={style} handleClick={handleClick} />;
}

ClearKey.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
  }),
  clearInput: PropTypes.func.isRequired,
};

ClearKey.defaultProps = {
  style: {},
};

export default ClearKey;
