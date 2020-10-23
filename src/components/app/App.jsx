import { HashRouter, Switch, Route } from "react-router-dom";
import React, { Component } from "react";

import Comparepage from "../pages/compare-page/Comparepage";
import Homepage from "../pages/homepage/Homepage";
import SearchPage from "../pages/search-page/SearchPage";
import NavigationBar from "../navigation-bar/NavigationBar";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="app-root">
        <HashRouter>
          <NavigationBar />
          <Switch>
            <Route path="/" component={Homepage} exact />
            <Route path="/compare" component={Comparepage} exact />
            <Route path="/search" component={SearchPage} exact />
          </Switch>
        </HashRouter>
        <div className="card-footer text-muted mt-4 text-center">
          Atheia 2020
        </div>
      </div>
    );
  }
}

export default App;
