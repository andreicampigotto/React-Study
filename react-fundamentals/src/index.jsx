import ReactDOM  from "react-dom";
import React from "react";

import './index.css'
import First from './components/First';
import Parameter from "./components/Parameter";

ReactDOM.render(
    <div id="App">
        <First/>
        <Parameter
        tittle="Tittle"
        subtittle="Subtittle"/>
       
    </div>,
    document.getElementById("root")

)

