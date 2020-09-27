import React, { Component } from "react";

class Person extends Component {
  render() {
    return (
      <div>
        <p>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <div>{this.props.greet}</div>
        {this.props.children}
        <p>{this.props.hobby}</p>
      </div>
    );
  }
}

export default Person;
