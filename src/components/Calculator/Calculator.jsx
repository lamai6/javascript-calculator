import { Component } from 'react';
import Key from '../Key/Key';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Key id="one" value="1" handleClick={() => {}} />;
  }
}

export default Calculator;
