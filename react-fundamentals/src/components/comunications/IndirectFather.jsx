import React, {useState} from "react";
import IndirectSon from "./IndirectSon";




export default (props) => {
    const [name, setName ]= useState('?')
    const [age, setAge ]= useState(0)
    const [smart, setSmart ]= useState(false)

    function inputInfos(name, age, smart){
        setName(name)
        setAge(age)
        setSmart(smart)
    }

    return(
        <div>
            <span>{name} </span>
            <span>{age} </span>
            <span> {smart ? 'True' : 'False'}</span>
            <IndirectSon whenClick={inputInfos}>
            </IndirectSon>
        </div>
    )

}