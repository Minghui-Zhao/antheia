import React, { Component } from "react";
import { connect } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

import { removePerfumeRedux } from "../../../store/perfume/perfume-dispatcher";
class Comparepage extends Component {
  state = {
    hideProduct: false,
    hideStory: false,
    hideReview: false,
  };

  getTitle(title) {
    const hideOption =
      title === "Story"
        ? "hideStory"
        : title === "Product"
        ? "hideProduct"
        : "hideReview";
    return (
      <tr>
        <th
          scope="row"
          colSpan="5"
          className="d-flex align-items-center justify-content-between table-info"
        >
          <span className="h4 m-0">{title}</span>
          <button
            className="btn btn-outline-dark btn-sm"
            onClick={() =>
              this.setState({ [hideOption]: !this.state[hideOption] })
            }
          >
            <span>{this.state[hideOption] ? "Expand" : "Collapse"}</span>
          </button>
        </th>
      </tr>
    );
  }

  getRow(parent, key, isImage = false) {
    const width = ((10 / 12) * 100) / this.props.selectedPerfumes.length;
    const colStyle = {
      flex: `0 0 ${width}%`,
      maxWidth: `${width}%`,
    };
    return (
      <tr className="d-flex">
        <th
          scope="row"
          className="col-2 text-capitalize d-flex align-items-center"
        >
          {key}
        </th>
        {this.props.selectedPerfumes.map((perfume) => (
          <td key={perfume.name} style={colStyle}>
            {isImage ? (
              <img
                src={perfume[key]}
                alt={perfume.name}
                style={{ width: "100%" }}
              />
            ) : (
              <>
                {key === "price" && <span>$</span>}
                <span>
                  {parent === "" ? perfume[key] : perfume[parent][key]}
                </span>
              </>
            )}
          </td>
        ))}
      </tr>
    );
  }

  ProductItems() {
    if (this.state.hideProduct) return null;
    return (
      <>
        {this.getRow("product", "price")}
        {this.getRow("product", "accords")}
        {this.getRow("product", "composition")}
      </>
    );
  }

  StoryItems() {
    if (this.state.hideStory) return null;
    return (
      <>
        {this.getRow("story", "origin")}
        {this.getRow("story", "year")}
        {this.getRow("story", "designer")}
        {this.getRow("story", "inspiration")}
      </>
    );
  }

  ReviewItems() {
    if (this.state.hideReview) return null;
    return (
      <>
        {this.getRow("review", "rating")}
        {this.getRow("review", "comments")}
      </>
    );
  }

  render() {
    const width = ((10 / 12) * 100) / this.props.selectedPerfumes.length;
    const colStyle = {
      flex: `0 0 ${width}%`,
      maxWidth: `${width}%`,
    };
    return (
      <div className="page">
        <div className="my-5" />
        <table className="table table-bordered">
          <thead>
            <tr className="d-flex bg-info">
              <th className="col-2 align-center text-light"></th>
              {this.props.selectedPerfumes.map((perfume, i) => (
                <th
                  key={perfume.name}
                  style={colStyle}
                  className="d-flex align-items-center justify-content-between"
                >
                  <span className="text-light">{`Perfume #${i + 1}`}</span>
                  <button
                    className="btn btn-outline-light btn-sm"
                    onClick={() =>
                      this.props.removePerfumeFromRedux(perfume.name)
                    }
                  >
                    <AiOutlineClose />
                  </button>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {this.getRow("brand", "brandName")}
            {this.getRow("", "name")}
            {this.getRow("", "imgURL", true)}

            {this.getTitle("Product")}
            {this.ProductItems()}

            {this.getTitle("Story")}
            {this.StoryItems()}

            {this.getTitle("Review")}
            {this.ReviewItems()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    selectedPerfumes: Object.values({
      ...store.perfumeReducer.selectedPerfumes,
    }),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removePerfumeFromRedux: (perfumeName) =>
      dispatch(removePerfumeRedux(perfumeName)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Comparepage);
