import React, { Component } from "react";

// const person = (props) => {
//   return (
//     <div>
//       <p>
//         I'm {props.name} and I am {props.age} years old!
//       </p>
//       <p>{props.children}</p>
//     </div>
//   );
// };
// export default person;

class Person extends Component {
  render() {
    return (
      <div>
        <p>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <div>{this.props.greet}</div>
        <p>{this.props.children}</p>
        <p>{this.props.hobby}</p>
      </div>
    );
  }
}

export default Person;
