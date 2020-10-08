import React from "react";
import PropTypes from "prop-types";

const NavBar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
    </nav>
  );
};
//default Props
NavBar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};
// propType - Type Checking
NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
//for arrays Proptypes.array.isRequired

export default NavBar;
