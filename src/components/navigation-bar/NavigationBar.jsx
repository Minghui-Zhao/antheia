import "./NavigationBar.scss";
import React, { Component } from "react";
import NavLinks from "./_NavLinks";

class NavigationBar extends Component {
  state = {
    show: false,
  };

  SearchBar() {
    return (
      <form className="form-inline my-2 my-lg-0 ml-5">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
        />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    );
  }

  render() {
    return (
      <nav
        className="navbar navbar-expand-md navbar-light "
        style={{ backgroundColor: "#9FBFDF" }}
        //#9FBFDF    #6c757d
      >
        <a className="navbar-brand" href="/" style={{color: "#6c757d"}}>
          Glogou
        </a>
        <button
          className="navbar-toggler"
          onClick={() => this.setState({ show: !this.state.show })}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={
            this.state.show
              ? "collapse navbar-collapse show"
              : "collapse navbar-collapse"
          }
        >
          <this.SearchBar />
          <NavLinks />
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
