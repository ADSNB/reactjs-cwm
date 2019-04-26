import React, { Component } from "react";
// counter-conditionalRender.jsx
// Conditional rendering lines 11, 12 and 19
class ConditionalRender extends Component {
  state = {
    count: 0,
    tags: []
    // tags: ['tag 1', 'tag 2', 'tag 3']
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && "Please create a new tag"}
        <br />
        {this.renderTags()}
      </React.Fragment>
    );
  }
}

export default ConditionalRender;
