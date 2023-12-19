import React from "react";

export default (props) => {
  return (
    <div>
      <span>{props.text} </span>
      <span>{props.num} </span>
      <span> {props.bool ? "True" : "False"}!</span>
    </div>
  );
};
