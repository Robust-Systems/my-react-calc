import * as React from "react";

export default class Container extends React.Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>

      </React.Fragment>
    );
  }
}
