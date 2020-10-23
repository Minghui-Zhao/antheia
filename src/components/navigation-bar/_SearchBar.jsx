import React, { Component } from "react";
import { connect } from "react-redux";
import { updateSearchPerfumesRedux } from "../../store/perfume/perfume-dispatcher";
import { withRouter } from "react-router";
class SearchBar extends Component {
  state = {
    keyword: "",
  };
  render() {
    return (
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Brand / Name..."
          value={this.state.keyword}
          onChange={(e) => {
            this.setState({ keyword: e.target.value });
          }}
        />
        <button
          className="btn btn-outline-light my-2 my-sm-0"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            this.props.updateSearchPerfumesOnRedux(this.state.keyword.trim());
            if (this.props.location.pathname !== "/search") {
              this.props.history.push("/search");
            }
          }}
        >
          Search
        </button>
      </form>
    );
  }
}

const mapStateToProps = (_) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateSearchPerfumesOnRedux: (keyword) =>
      dispatch(updateSearchPerfumesRedux(keyword)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchBar)
);
