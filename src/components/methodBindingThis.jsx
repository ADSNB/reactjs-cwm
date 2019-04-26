import React, { Component } from "react";

class MethodBindingThis extends Component {
  state = {
    count: 0,
    tags: []
    // tags: ['tag 1', 'tag 2', 'tag 3']
  };

  // First method to have access to 'this' feature

  // constructor() {
  //     super();
  //     // it's necessary to bind the method to have access to 'this' feature
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //     console.log("constructor", this);
  // }

  // handleIncrement() {
  //     console.log('Increment Clicked', this);
  // }

  // Second method to have access to 'this' feature

  handleIncrement = () => {
    console.log("Increment clicked by arrow function", this);
  };

  render() {
    return (
      <React.Fragment>
        <span style={{ fontSize: 15 }} className={this.getBadgesClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
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

export default MethodBindingThis;
