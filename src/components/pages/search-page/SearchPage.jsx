import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addPerfumeRedux,
  removePerfumeRedux,
} from "../../../store/perfume/perfume-dispatcher";

class SearchPage extends Component {
  render() {
    return (
      <div className="page">
        <div className="my-5" />
        <div className="row">
          {this.props.searchPerfumes.map((perfume) => (
            <div
              className="col-4 py-4 d-flex justify-content-center"
              key={perfume.name}
            >
              <div className="border border-info px-5 rounded bg-white on-hover shadow">
                <img
                  src={perfume.imgURL}
                  alt={perfume.name}
                  style={{ width: "100%" }}
                  className="mt-3"
                />

                <div className="h5 text-center mt-4">
                  Brand: {perfume.brand.brandName}
                </div>
                <div className="h6 text-center mt-2">Name: {perfume.name}</div>
                <div className="h6 text-center mt-2">
                  Price: {perfume.product.price}
                </div>
                <div className="h6 text-center mt-2">
                  Origin: {perfume.story.origin}
                </div>
                <div className="h6 text-center mt-2">
                  Year: {perfume.story.year}
                </div>
                <div className="h6 text-center my-2">
                  Accords: {perfume.product.accords}
                </div>
                <div className="mt-auto">
                  {!this.props.selectedPerfumes[perfume.name] && (
                    <button
                      className="btn btn-info btn-block mt-3"
                      onClick={() => this.props.addPerfumeToRedux(perfume)}
                      disabled={this.props.selectCount === 4}
                    >
                      Add
                    </button>
                  )}

                  {this.props.selectedPerfumes[perfume.name] && (
                    <button
                      className="btn btn-outline-info btn-block mt-3"
                      onClick={() =>
                        this.props.removePerfumeFromRedux(perfume.name)
                      }
                    >
                      Remove
                    </button>
                  )}
                </div>

                <div className="my-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    selectCount: store.perfumeReducer.selectCount,
    searchPerfumes: store.perfumeReducer.searchPerfumes,
    selectedPerfumes: store.perfumeReducer.selectedPerfumes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPerfumeToRedux: (perfume) => dispatch(addPerfumeRedux(perfume)),
    removePerfumeFromRedux: (perfumeName) =>
      dispatch(removePerfumeRedux(perfumeName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
