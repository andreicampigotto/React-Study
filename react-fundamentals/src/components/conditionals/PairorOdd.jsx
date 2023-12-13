import React from "react";

export default (props) => {
  const isPair = props.number % 2 === 0;

  return <div>{isPair ? <span>Pair</span> : <span>Odd</span>}</div>;
};
