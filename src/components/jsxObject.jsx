import React, { Component } from "react";
// counter-jsxObjects.jsx
class JsxObject extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    imageUrl: "https:picsum.photos/200"
  };

  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  render() {
    let classes = this.getBadgesClasses();

    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt="img not found" />
        <span style={{ fontSize: 15 }} className={this.getBadgesClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
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

export default JsxObject;
