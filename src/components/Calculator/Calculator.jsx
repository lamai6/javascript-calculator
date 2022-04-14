import { Component } from 'react';
import NumberKey from '../Key/NumberKey/NumberKey';
import ResultKey from '../Key/ResultKey/ResultKey';
import OperatorKey from '../Key/OperatorKey/Operator';
import DotKey from '../Key/DotKey/DotKey';
import ClearKey from '../Key/ClearKey/ClearKey';
import Display from '../Display/Display';
import { NUMBERS, OPERATORS, RESULT, DOT, CLEAR } from '../../utils/constants';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      result: '0',
    };
    this.addKeyToInput = this.addKeyToInput.bind(this);
    this.displayResult = this.displayResult.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  addKeyToInput(key) {
    this.setState(({ input }) => ({ input: `${input}${key}` }));
  }

  displayResult(result) {
    this.setState(() => ({ result }));
  }

  clearInput() {
    this.setState(() => ({ input: '', result: '0' }));
  }

  render() {
    const { input, result } = this.state;
    const {
      style: resultStyle,
      key: { id: resultId, value: resultValue },
    } = RESULT;
    const {
      style: dotStyle,
      key: { id: dotId, value: dotValue },
    } = DOT;
    const {
      style: clearStyle,
      key: { id: clearId, value: clearValue },
    } = CLEAR;

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
        <ClearKey
          clearInput={this.clearInput}
          id={clearId}
          value={clearValue}
          style={clearStyle}
          key={clearId}
        />
        {numberKeys}
        <DotKey
          input={input}
          addKeyToInput={this.addKeyToInput}
          id={dotId}
          value={dotValue}
          style={dotStyle}
          key={dotId}
        />
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
        <Display result={result} />
      </div>
    );
  }
}

export default Calculator;
