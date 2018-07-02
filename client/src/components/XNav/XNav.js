import React from 'react';
import './XNav.css';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const XNav = (props) => (
  <span className="XNavClass" {...props}>
    XNav
  </span>
);

export { XNav };
