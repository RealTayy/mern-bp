import React from 'react';
import './XComponent.css';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const XComponentOne = (props) => {
  return (
    <div className="XComponentClass" {...props}>
    XComponentOne
      {props.string}
      {props.array}
    </div>
  );
}

export { XComponentOne };
