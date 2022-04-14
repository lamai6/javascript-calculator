import PropTypes from 'prop-types';

function Display({ result }) {
  return <div id="display">{result}</div>;
}

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;
