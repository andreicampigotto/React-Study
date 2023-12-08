import React from "react";

import First from "./components/basics/First";
import Parameter from "./components/basics/Parameter";
import Fragment from "./components/basics/Fragment";
import Aleatory from "./components/basics/Aleatory";
import Card from "./components/layouts/Card";
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";
import "./App.css";
import ListStudents from "./components/repeat/listStudents";

export default (_) => (
  <div className="App">
    <h1>React Fundamentals</h1>

    <div className="Cards">
      <Card title="#01 First Component" color="#070">
        <First />
      </Card>

      <Card title="#02 Parameter" color="#DC7633">
        <Parameter title="Title" subtitle="Subtitle" />
      </Card>

      <Card title="#03 Fragment" color="#48C9B0">
        <Fragment />
      </Card>

      <Card title="#04 Random challenge" color="#F7DC6F">
        <Aleatory min={0} max={99} />
      </Card>

      <Card title="#05 Component with child" color="#4D0D89">
        <Family lastName="lastName">
          <FamilyMember name="name" />
          <FamilyMember name="name" />
          <FamilyMember name="name" />
        </Family>
      </Card>

      <Card title="06 Repeat" color="#85929E">
        <ListStudents>

        </ListStudents>
      </Card>
    </div>
  </div>
);
