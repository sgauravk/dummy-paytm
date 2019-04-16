import React, { Component } from "react";

class Service extends Component {
  constructor(props) {
    super(props);
    this.classname = props.className;
    this.name = props.name;
  }
  render() {
    return (
      <li>
        <i className={this.classname} />
        <span>{this.name}</span>
      </li>
    );
  }
}

export default Service;
