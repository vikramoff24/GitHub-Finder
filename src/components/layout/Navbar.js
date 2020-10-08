import React, { Component } from "react";
import PropTypes from "prop-types";

//default Props
export class NavBar extends Component {
  static defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github",
  };
  // propType - Type Checking
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };
  //for arrays Proptypes.array.isRequired
  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default NavBar;
