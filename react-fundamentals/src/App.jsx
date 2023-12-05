import React from "react";

import First from "./components/basics/First";
import Parameter from "./components/basics/Parameter";
import Fragment from "./components/basics/Fragment";
import Aleatory from "./components/basics/Aleatory";
import Card from "./components/layouts/Card";

export default (_) => (
  <div id="App">
    <Card title="First Component">
      <First />
    </Card>

    <Card title="Parameter">
      <Parameter title="Title" subtitle="Subtitle" />
    </Card>

    <Card title="Fragment">
      <Fragment />
    </Card>

    <Card title="Random challenge">
      <Aleatory min={0} max={99} />
    </Card>
  </div>
);
