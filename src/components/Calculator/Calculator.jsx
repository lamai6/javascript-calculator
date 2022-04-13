import { Component } from 'react';
import ResultKey from '../Key/ResultKey/ResultKey';
import { RESULT } from '../../utils/constants';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      display: '',
    };
    this.displayResult = this.displayResult.bind(this);
  }

  displayResult(result) {
    this.setState(() => ({ display: result }));
  }

  render() {
    const { input, display } = this.state;
    const {
      style: resultStyle,
      key: { id: resultId, value: resultValue },
    } = RESULT;

    return (
      <div>
        <ResultKey
          input={input}
          displayResult={this.displayResult}
          id={resultId}
          value={resultValue}
          style={resultStyle}
          key={resultId}
        />
      </div>
    );
  }
}

export default Calculator;
