import React, { Component } from "react";
import BrandPerfumesModal from "./_BrandPerfumesModal";
import BRANDS from "../../../mocks/brands.json";
import { connect } from "react-redux";
import {
  removePerfumeRedux,
  updateSearchPerfumesRedux,
} from "../../../store/perfume/perfume-dispatcher";

class Homepage extends Component {
  state = {
    showModal: false,
    selectedBrand: BRANDS[0].name,
  };

  getComparePerfumes() {
    const selectedPerfumes = Object.values(this.props.selectedPerfumes)
      .slice(0, 4)
      .map((perfume) => (
        <div
          className="col-3 d-flex flex-column align-items-center"
          key={perfume.name}
        >
          <div className="border border-info px-4 py-5 rounded text-center shadow">
            <img
              src={perfume.imgURL}
              alt={perfume.name}
              style={{ width: "100%" }}
            />
          </div>

          <button
            className="btn btn-outline-info mt-3"
            onClick={() => this.props.removePerfumeFromRedux(perfume.name)}
          >
            Remove
          </button>
        </div>
      ));
    while (selectedPerfumes.length < 4) {
      const perfumeName = selectedPerfumes.length + 1;
      selectedPerfumes.push(
        <div className="col-3 d-flex justify-content-center" key={perfumeName}>
          <div
            className="border border-info px-4 py-5 rounded d-flex justify-content-center align-items-center"
            style={{ width: "100%", height: 251 }}
          >{`Perfume ${perfumeName}`}</div>
        </div>
      );
    }

    return selectedPerfumes;
  }

  render() {
    return (
      <div className="page">
        <div className="my-5" />
        <div className="h3 mt-4 mb-3 text-dark">Suggested Search Tags</div>
        <div>
          {["Chanel", "Chloe", "Dior", "D&G", "MarcJacobs", "Guerlain", "Lancome", "Hermes", "Givenchy"].map((name, i) => (
            <button
              key={name}
              className={
                i === 0
                  ? "btn btn-outline-info mt-3"
                  : "btn btn-outline-info mt-3 ml-2"
              }
              onClick={() => {
                this.props.updateSearchPerfumesOnRedux(name);
                this.props.history.push("/search");
              }}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="my-5" />
        <div className="h3 mt-4 mb-3 text-dark">Compare Perfumes</div>
        <div className="border p-4 rounded shadow">
          <div className="row">{this.getComparePerfumes()}</div>
          <div className="text-center mt-4">
            <button
              className="btn btn-info"
              onClick={() => {
                this.props.history.push("/compare");
              }}
            >
              Compare
            </button>
          </div>
        </div>

        <div className="my-5" />
        <div className="h3 mt-4 mb-3 text-dark">Suggested Brands</div>
        <div className="border p-4 rounded shadow">
          <div className="row">
            {BRANDS.map((brand) => {
              const name = brand.name;
              const url = brand.imgURL;
              return (
                <div
                  className="col-4 py-4 d-flex justify-content-center"
                  key={name}
                >
                  <div
                    className="border border-info px-5 rounded bg-white on-hover shadow"
                    onClick={() => {
                      this.setState({ showModal: true, selectedBrand: name });
                    }}
                  >
                    <img src={url} alt={name} style={{ width: "100%" }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <BrandPerfumesModal
          show={this.state.showModal}
          brand={this.state.selectedBrand}
          close={() => {
            this.setState({ showModal: false });
          }}
        />
        {this.state.showModal && <div className="modal-backdrop fade show" />}
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    selectedPerfumes: { ...store.perfumeReducer.selectedPerfumes },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removePerfumeFromRedux: (perfumeName) =>
      dispatch(removePerfumeRedux(perfumeName)),
    updateSearchPerfumesOnRedux: (keyword) =>
      dispatch(updateSearchPerfumesRedux(keyword)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
