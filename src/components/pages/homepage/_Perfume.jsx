import React, { Component } from "react";
import {
  addPerfumeRedux,
  removePerfumeRedux,
  showPerfumeAlertRedux,
} from "../../../store/perfume/perfume-dispatcher";
import { connect } from "react-redux";

class Perfume extends Component {
  addPerfume() {
    this.props.addPerfumeToRedux(this.props.perfume);
  }

  removePerfume() {
    this.props.removePerfumeFromRedux(this.props.perfume.name);
  }

  handleClick() {
    if (this.props.selectedPerfumes[this.props.perfume.name]) {
      this.removePerfume();
    } else {
      if (this.props.selectCount === 4) {
        this.props.showPerfumeAlertToRedux();
      } else {
        this.addPerfume();
      }
    }
  }

  render() {
    const perfume = this.props.perfume;
    const name = perfume.name;
    const url = perfume.imgURL;
    const checked = this.props.selectedPerfumes[name] !== undefined;
    return (
      <div className="col-4 py-2 px-4 position-relative" key={name}>
        <input
          type="checkbox"
          checked={checked}
          className="form-check-input position-absolute"
          style={{ right: 34, top: 13 }}
          onClick={() => this.handleClick()}
          onChange={() => {}}
        />
        <div
          className={
            checked
              ? "border border-info px-4 py-5 rounded text-center"
              : "border border-info px-4 py-5 rounded text-center on-hover"
          }
          onClick={() => this.handleClick()}
        >
          <img src={url} alt={name} style={{ width: "100%" }} />
        </div>
        <div className="mt-2">{`Name: ${name}`}</div>
        <div className="mt-2">{`Price: $${perfume.product.price}`}</div>
        <div className="mt-2">{`Rating: ${perfume.review.rating}`}</div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    selectCount: store.perfumeReducer.selectCount,
    selectedPerfumes: { ...store.perfumeReducer.selectedPerfumes },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPerfumeToRedux: (perfume) => dispatch(addPerfumeRedux(perfume)),
    removePerfumeFromRedux: (perfumeName) =>
      dispatch(removePerfumeRedux(perfumeName)),
    showPerfumeAlertToRedux: () => dispatch(showPerfumeAlertRedux()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Perfume);
