import React from "react";
import style from "./style/header.module.css";
import PropTypes from "prop-types";

const Header = ({ name, ...props }) => {
  return (
    <header className={style.headerRoot} {...props}>
      {name}
    </header>
  );
};

export default Header;

Header.propTypes = {
  name: PropTypes.node.isRequired,
};
