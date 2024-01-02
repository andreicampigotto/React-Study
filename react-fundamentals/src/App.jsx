import React from "react";

import First from "./components/basics/First";
import Parameter from "./components/basics/Parameter";
import Fragment from "./components/basics/Fragment";
import Aleatory from "./components/basics/Aleatory";
import Card from "./components/layouts/Card";
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";
import "./App.css";
import ListStudents from "./components/repeats/ListStudents";
import ProductsTable from "./components/repeats/ProductsTable";
import PairorOdd from "./components/conditionals/PairorOdd";
import UserInfo from "./components/conditionals/UserInfo";
import DirectFather from "./components/comunications/DirectFather";
import IndirectFather from "./components/comunications/IndirectFather";
import Input from "./components/forms/Input";
import Counter from "./components/counter/Counter";

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

      <Card title="#06 Repeat" color="#F5B7B1">
        <ListStudents>

        </ListStudents>
      </Card>

      <Card title="#07 Challange" color="#5D6D7E">
        <ProductsTable/>
      </Card>

      <Card title="#08 Conditionals renderization" color="#943126">
        <PairorOdd number={3}/>
        <UserInfo userName={{name: 'UserName'}}/>
        <UserInfo />
      </Card>

      <Card title="#09 Direct comunications" color="#7D6608">
        <DirectFather/>
      </Card>

      <Card title="#10 Indirect comunication" color="#ABEBC6">
        <IndirectFather/>
      </Card>

      <Card title="#11 Controled component" color="#34495E">
        <Input/>
      </Card>

      <Card title="#12 Counter" color="#FCF3CF">
        <Counter initialNumber={10}/>
      </Card>

    </div>
  </div>
);
