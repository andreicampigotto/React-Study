import React from "react";

export default (props) => {
  //const min = props.min;
  //const max = props.max;

  const { min, max } = props;

  const aletory = parseInt(Math.random() * (max - min)) + min;
  return (
    <div>
      <h2>Aleatory value </h2>
      <p>
        <strong>Max value: </strong>
        {max}
      </p>
      <p>
        <strong>Min Value: </strong>
        {min}
      </p>
      <p>
        <strong>Value: </strong>
        {aletory}
      </p>
    </div>
  );
};