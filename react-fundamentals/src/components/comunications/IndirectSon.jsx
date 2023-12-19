import React from "react";

export default (props) => {
    const cb = props.whenClick
  return (
    <div>
      <div>Son</div>

      <button
        onClick={_=>cb("Jhon", 28, true)
          // onClick={
          //     function(e){
          //         props.whenClick('Jhon', 28, true)}
        }
      >
        Input informations
      </button>
    </div>
  );
};
