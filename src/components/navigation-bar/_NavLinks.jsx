import React, { Component } from "react";
import { FiLinkedin, FiMail, FiFacebook, FiTwitter } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class NavLinks extends Component {
  render() {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-1">
          <Link className="nav-link" to="/compare">
            <FaShoppingCart size="1.8rem" color="white" />
            {this.props.selectCount > 0 ? (
              <span className="badge text-warning">
                {this.props.selectCount}
              </span>
            ) : null}
          </Link>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://twitter.com/glogou"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiTwitter color="#fff" />
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://www.facebook.com/Glogou"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiFacebook color="#fff" />
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://www.linkedin.com/company/glogou-inc-/about/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin color="#fff" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="mailto:sales@glogou.com">
            <FiMail color="#fff" />
          </a>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    selectCount: store.perfumeReducer.selectCount,
  };
};

export default connect(mapStateToProps)(NavLinks);
