import { Component } from 'react';
import NumberKey from '../Key/NumberKey/NumberKey';
import EqualsKey from '../Key/EqualsKey/EqualsKey';
import OperatorKey from '../Key/OperatorKey/OperatorKey';
import DotKey from '../Key/DotKey/DotKey';
import ClearKey from '../Key/ClearKey/ClearKey';
import Display from '../Display/Display';
import { NUMBERS, OPERATORS, RESULT, DOT, CLEAR } from '../../utils/constants';
import './Calculator.styles.scss';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      result: '0',
    };
    this.setInput = this.setInput.bind(this);
    this.setResult = this.setResult.bind(this);
  }

  setInput(input) {
    this.setState(() => ({ input }));
  }

  setResult(result) {
    this.setState(() => ({ result }));
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
        input={input}
        setInput={this.setInput}
        result={result}
        setResult={this.setResult}
      />
    ));
    const operatorKeys = OPERATORS.keys.map(({ id, value }) => (
      <OperatorKey
        id={id}
        value={value}
        key={id}
        style={OPERATORS.style}
        input={input}
        setInput={this.setInput}
        setResult={this.setResult}
      />
    ));

    return (
      <div id="calculator">
        <Display input={input} result={result} />
        <div id="buttons">
          <ClearKey
            setInput={this.setInput}
            setResult={this.setResult}
            id={clearId}
            value={clearValue}
            style={clearStyle}
            key={clearId}
          />
          {numberKeys}
          <DotKey
            input={input}
            setInput={this.setInput}
            result={result}
            setResult={this.setResult}
            id={dotId}
            value={dotValue}
            style={dotStyle}
            key={dotId}
          />
          {operatorKeys}
          <EqualsKey
            input={input}
            setInput={this.setInput}
            setResult={this.setResult}
            id={resultId}
            value={resultValue}
            style={resultStyle}
            key={resultId}
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
