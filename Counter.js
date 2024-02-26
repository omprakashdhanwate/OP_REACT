import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <>
        <h1>Clicked {this.state.count} times...!!!</h1>

        <button type="button" onClick={this.incrementCount}>
          Change count
        </button>
      </>
    ); 
  }
}

export default Counter;
