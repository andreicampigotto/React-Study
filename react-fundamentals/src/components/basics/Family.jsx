import React from "react";
import "./FamilyMember";
import FamilyMember from "./FamilyMember";

export default (props) => {
  return (
    <div>
      <FamilyMember name="name" lastName={props.lastName}/>
      <FamilyMember name="name" {...props}/>
      <FamilyMember name="name" {...props}/>
    </div>
  );
};
