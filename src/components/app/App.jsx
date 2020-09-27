import "./App.scss";
import React, { Component } from "react";
import NavigationBar from "../navigation-bar/NavigationBar";

class App extends Component {
  render() {
    return (
      <div className="app-root">
        {/* Navigation bar */}
        <NavigationBar />
      </div>
    );
  }
}

export default App;
