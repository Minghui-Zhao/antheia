import React, { Component } from "react";
import CHANEL_PERFUMES from "../../../mocks/chanel_perfumes.json";
import GUERLAIN_PERFUMES from "../../../mocks/guerlain_perfumes.json";
import LANCOME_PERFUMES from "../../../mocks/lancome_perfumes.json";
import YSL_PERFUMES from "../../../mocks/ysl_perfumes.json";
import DIOR_PERFUMES from "../../../mocks/dior_perfumes.json";
import MARCJACOBS_PERFUMES from "../../../mocks/marcjacobs_perfumes.json";
import VERSACE_PERFUMES from "../../../mocks/versace_perfumes.json";
import CHLOE_PERFUMES from "../../../mocks/chloe_perfumes.json";
import GIVENCHY_PERFUMES from "../../../mocks/givenchy_perfumes.json";
import HERMES_PERFUMES from "../../../mocks/hermes_perfumes.json";
import DOLCEGABNANA_PERFUMES from "../../../mocks/d&g_perfumes.json";
import PRADA_PERFUMES from "../../../mocks/prada_perfumes.json";
import Perfume from "./_Perfume";
import { connect } from "react-redux";
import { hidePerfumeAlertRedux } from "../../../store/perfume/perfume-dispatcher";

const PERFUME_MAP = {
  Chanel: CHANEL_PERFUMES,
  Guerlain: GUERLAIN_PERFUMES,
  Lancome: LANCOME_PERFUMES,
  YSL: YSL_PERFUMES,
  Dior: DIOR_PERFUMES,
  MarcJacobs: MARCJACOBS_PERFUMES,
  Versace: VERSACE_PERFUMES,
  Chloe: CHLOE_PERFUMES,
  Givenchy: GIVENCHY_PERFUMES,
  Hermes: HERMES_PERFUMES,
  "D&G": DOLCEGABNANA_PERFUMES,
  Prada: PRADA_PERFUMES,
};
class BrandPerfumesModal extends Component {
  getAlert() {
    if (!this.props.showAlert) return null;
    return (
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        You cannot select more than <strong>4</strong> perfumes to compare.
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => this.props.hidePerfumeAlertFromRedux()}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }

  render() {
    return (
      <div
        className={this.props.show ? "modal fade show" : "modal fade"}
        style={{ display: this.props.show ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title font-color">{this.props.brand}</h5>
              <button
                className="close"
                onClick={() => {
                  this.props.close();
                  this.props.hidePerfumeAlertFromRedux();
                }}
              >
                <span>&times;</span>
              </button>
            </div>

            <div
              className="modal-body"
              style={{ maxHeight: "600px", overflowY: "scroll" }}
            >
              {this.getAlert()}
              <div className="row">
                {PERFUME_MAP[this.props.brand].map((perfume) => {
                  return <Perfume perfume={perfume} key={perfume.name} />;
                })}
              </div>
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-outline-info"
                onClick={() => {
                  this.props.close();
                  this.props.hidePerfumeAlertFromRedux();
                }}
              >
                Close
              </button>
              <button
                className="btn btn-info"
                onClick={() => {
                  this.props.close();
                  this.props.hidePerfumeAlertFromRedux();
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    showAlert: store.perfumeReducer.showAlert,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hidePerfumeAlertFromRedux: () => dispatch(hidePerfumeAlertRedux()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BrandPerfumesModal);
