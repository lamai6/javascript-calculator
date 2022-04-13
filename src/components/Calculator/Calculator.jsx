import { Component } from 'react';
import NumberKey from '../Key/NumberKey/NumberKey';
import ResultKey from '../Key/ResultKey/ResultKey';
import OperatorKey from '../Key/OperatorKey/Operator';
import { NUMBERS, OPERATORS, RESULT } from '../../utils/constants';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      display: '',
    };
    this.addKeyToInput = this.addKeyToInput.bind(this);
    this.displayResult = this.displayResult.bind(this);
  }

  addKeyToInput(key) {
    this.setState(({ input }) => ({ input: `${input}${key}` }));
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

    const numberKeys = NUMBERS.keys.map(({ id, value }) => (
      <NumberKey
        id={id}
        value={value}
        key={id}
        style={NUMBERS.style}
        addKeyToInput={this.addKeyToInput}
      />
    ));

    const operatorKeys = OPERATORS.keys.map(({ id, value }) => (
      <OperatorKey
        id={id}
        value={value}
        key={id}
        style={OPERATORS.style}
        addKeyToInput={this.addKeyToInput}
      />
    ));

    return (
      <div>
        {numberKeys}
        {operatorKeys}
        <ResultKey
          input={input}
          displayResult={this.displayResult}
          id={resultId}
          value={resultValue}
          style={resultStyle}
          key={resultId}
        />
        <br />
        {input}
        <br />
        {display}
      </div>
    );
  }
}

export default Calculator;
