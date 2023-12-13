import React from "react";
import If, {Else}  from "./If.js";

export default (props) => {
  const user = props.userName || {};
  return (
    <div>
      <If test={user && user.name}>
        Welcome <strong>{user.name}</strong>!
        <Else>Welcome, please insert your name!</Else>
      </If>
      Teste
    </div>
  );
};
