import React from "react";

import First from "./components/basics/First";
import Parameter from "./components/basics/Parameter";
import Fragment from "./components/basics/Fragment";
import Aleatory from "./components/basics/Aleatory";
import Card from "./components/layouts/Card";
import "./App.css";

export default (_) => (
  <div className="App">
    <h1>React Fundamentals</h1>

    <div className="Cards">
      <Card title="#01 First Component">
        <First />
      </Card>

      <Card title="#02 Parameter">
        <Parameter title="Title" subtitle="Subtitle" />
      </Card>

      <Card title="#03 Fragment">
        <Fragment />
      </Card>

      <Card title="#04 Random challenge">
        <Aleatory min={0} max={99} />
      </Card>
    </div>
  </div>
);
