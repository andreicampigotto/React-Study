import React from "react";

export default (props) => {
  return (
    <div>
      <button onClick={props.setInc}> + </button>
      <button onClick={props.setDec}> - </button>
      <button onClick={props.setIncPitch}> + pitch</button>
      <button onClick={props.setDecPitch}> - pitch</button>
    </div>
  );
};
