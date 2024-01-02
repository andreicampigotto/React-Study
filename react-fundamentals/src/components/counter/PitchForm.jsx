import React from "react";

export default (props) => {
  return (
    <div>
    <h3>Pitch number  {props.pitch}</h3>
      <label htmlFor="pitchInput"> Pitch</label>
      <input
        id="pitchInput"
        type="text"
        value={props.pitch}
        onChange={e => props.setPitch(+e.target.value)}
      />
    </div>
  );
};
