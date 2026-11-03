import React, { Component } from 'react'

class CounterDemo2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    incrementCount = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    };
    render() {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h2>Counter: {this.state.count}</h2>
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        );
    }
}
export default CounterDemo2;