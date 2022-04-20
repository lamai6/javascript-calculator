import PropTypes from 'prop-types';
import { useEffect } from 'react';
import './Key.styles.scss';

function Key({
  id,
  value,
  style,
  handleClick,
  keyCode,
  keyTriggered,
  removeKey,
}) {
  useEffect(() => {
    if (keyTriggered && keyCode === keyTriggered) {
      handleClick();
      removeKey();
    }
  }, [keyTriggered]);

  return (
    <button {...{ style }} onClick={handleClick} id={id} type="button">
      {value}
    </button>
  );
}

Key.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
  }),
  handleClick: PropTypes.func.isRequired,
  keyCode: PropTypes.string.isRequired,
  keyTriggered: PropTypes.string.isRequired,
  removeKey: PropTypes.func.isRequired,
};

Key.defaultProps = {
  style: {},
};

export default Key;
