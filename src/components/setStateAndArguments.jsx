import React, { Component } from "react";

class SetStateAndArguments extends Component {
  state = {
    count: 0,
    tags: []
    // tags: ['tag 1', 'tag 2', 'tag 3']
  };

  handleIncrement = counter => {
    this.setState({ count: this.state.count + counter });
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
      </React.Fragment>
    );
  }

  getBadgesClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default SetStateAndArguments;
