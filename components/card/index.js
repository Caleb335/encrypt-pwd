import React from "react";
import PropTypes from "prop-types";

const Card = ({ className, children, ...props }) => {
  return (
    <div className={`root ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;

// making use of the propTYpe module of
// react to handle the component validation
// (i.e the type of data that gets passed as a prop inside a react component)
Card.propTypes = {
  children: PropTypes.node.isRequired,
};
