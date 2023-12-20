import React, {useState} from "react";
import './Input.css'

export default (props) => {

  const [value, setValue] = useState('Initial')

  function whenChange(e){
    setValue(e.target.value)
    console.log(e.target.value)
  }

  return <div className="Input">
    <div style={
      {display: 'flex', flexDirection: 'column'}
    }><h2>{value}</h2></div>
    <input value={value} onChange={whenChange}/>
    <input value={value} readOnly/>
    <input value={undefined}/>
  </div>;
};
