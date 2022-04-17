import PropTypes from 'prop-types';
import './Display.styles.scss';

function Display({ input, result }) {
  return (
    <div id="display-container">
      <div id="input">{input}</div>
      <div id="display">{result}</div>
    </div>
  );
}

Display.propTypes = {
  input: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
};

export default Display;
