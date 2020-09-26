import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

// const App = () => {
class App extends Component {
  state = {
    persons: [
      { name: "Maxium", age: 28 },
      { name: "Manu", age: 29 },
      { name: "John", age: 26 },
    ],
    otherState: "some other value",
  };

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = "Maxmimium";
    this.setState(
      // Asynchronous!!!
      {
        persons: [
          { name: "Maxmimium", age: 28 },
          { name: "Manu", age: 29 },
          { name: "John", age: 26 },
        ],
      },
      () => {
        console.log("after");
        console.log(this.state.persons[0].name);
      }
    );
    console.log("before");
    console.log(this.state.persons[0].name);
    // console.log("pass setState");
  };

  render() {
    console.log("pass render");
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <p>This is really working!</p>
        <Person name={this.state.persons[0].name} age="28" greet="hello">
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[1].name}
          age="29"
          greet="hello2"
          hobby="reading"
        ></Person>

        <Person
          name={this.state.persons[2].name}
          age="26"
          greet="hello3"
        >
          <div>hello!!! I am a children</div>


        </Person>
      </div>
    );
  }
}

export default App;
