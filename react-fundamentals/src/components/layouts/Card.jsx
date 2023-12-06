import "./Card.css";
import React from "react";

export default (props) => {
  const cardStyle = {
    backgroundColor: props.color || "#4D0D89",
    borderColor: props.color || "#4D0D89",
  }

  return (
    <div className="Card" style={cardStyle}>
      <div className="Title" >{props.title}</div>
      <div className="Content" x>{props.children}</div>
    </div>
  );
};
