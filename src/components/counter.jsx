import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: []
    // tags: ['tag 1', 'tag 2', 'tag 3']
  };

  handleIncrement = counter => {
    this.setState({ value: this.state.value + counter });
  };

  render() {
    return (
      <React.Fragment>
        <span style={{ fontSize: 15 }} className={this.getBadgesClasses()}>
          {this.formatCount()}
        </span>

        <button
          onClick={() => this.handleIncrement(1)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <br />
      </React.Fragment>
    );
  }

  getBadgesClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
