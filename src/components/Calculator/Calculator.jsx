import { Component, createRef } from 'react';
import NumberKey from '../Key/NumberKey/NumberKey';
import EqualsKey from '../Key/EqualsKey/EqualsKey';
import OperatorKey from '../Key/OperatorKey/OperatorKey';
import DotKey from '../Key/DotKey/DotKey';
import ClearKey from '../Key/ClearKey/ClearKey';
import Display from '../Display/Display';
import { NUMBERS, OPERATORS, EQUALS, DOT, CLEAR } from '../../utils/constants';
import './Calculator.styles.scss';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      result: '0',
      keyTriggered: '',
    };
    this.setInput = this.setInput.bind(this);
    this.setResult = this.setResult.bind(this);
    this.removeKey = this.removeKey.bind(this);
    this.calculatorRef = createRef();
  }

  componentDidMount() {
    this.calculatorRef.current.focus();
  }

  setInput(input) {
    this.setState(() => ({ input }));
  }

  setResult(result) {
    this.setState(() => ({ result }));
  }

  removeKey() {
    this.setState(() => ({ keyTriggered: '' }));
  }

  render() {
    const { input, result, keyTriggered } = this.state;
    const {
      style: dotStyle,
      key: { id: dotId, value: dotValue, keyCode: dotKeyCode },
    } = DOT;
    const {
      style: clearStyle,
      key: { id: clearId, value: clearValue, keyCode: clearKeyCode },
    } = CLEAR;
    const numberKeys = NUMBERS.keys.map(({ id, value, keyCode }) => (
      <NumberKey
        id={id}
        value={value}
        key={id}
        style={NUMBERS.style}
        input={input}
        setInput={this.setInput}
        result={result}
        setResult={this.setResult}
        keyCode={keyCode}
        keyTriggered={keyTriggered}
        removeKey={this.removeKey}
      />
    ));
    const operatorKeys = OPERATORS.keys.map(({ id, value, keyCode }) => (
      <OperatorKey
        id={id}
        value={value}
        key={id}
        style={OPERATORS.style}
        input={input}
        setInput={this.setInput}
        setResult={this.setResult}
        keyCode={keyCode}
        keyTriggered={keyTriggered}
        removeKey={this.removeKey}
      />
    ));

    return (
      <div
        onKeyDown={(e) => this.setState({ keyTriggered: e.key.toUpperCase() })}
        ref={this.calculatorRef}
        id="calculator"
        role="button"
        tabIndex={0}
      >
        <Display input={input} result={result} />
        <div id="buttons">
          <ClearKey
            setInput={this.setInput}
            setResult={this.setResult}
            id={clearId}
            value={clearValue}
            style={clearStyle}
            key={clearId}
            keyCode={clearKeyCode}
            keyTriggered={keyTriggered}
            removeKey={this.removeKey}
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
            keyCode={dotKeyCode}
            keyTriggered={keyTriggered}
            removeKey={this.removeKey}
          />
          {operatorKeys}
          <EqualsKey
            input={input}
            setInput={this.setInput}
            setResult={this.setResult}
            keyInfo={EQUALS}
            keyTriggered={keyTriggered}
            removeKey={this.removeKey}
          />
        </div>
      </div>
    );
  }
}

export default Calculator;
