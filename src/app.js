import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment() {
        this.setState(state => ({count: state.count + 1}))
    }

    decrement() {
        this.setState(state => state.count > 0 ? ({count: state.count - 1}) : state)
    }

    reset() {
        this.setState(state => ({count: 0}))
    }

    render() {
        return (
            <div id="counter">
                <h3>Counter : {this.state.count}</h3>
                <div>
                    <button type='button' onClick={this.increment}>Increment</button>
                    <button type='button' onClick={this.decrement}>Decrement</button>
                    <button type='button' onClick={this.reset}>Reset</button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));