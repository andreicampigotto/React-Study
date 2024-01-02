import "./Counter.css"
import React,{Component} from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import PitchForm from "./PitchForm";

 class Counter extends Component{ 

    state={
        num: this.props.initialNumber || 0,
        pitch: this.props.initialPasso || 7,
    }

    // constructor(props){
    //     super(props)
    //     this.state={
    //         num: props.initialNumber
    //     }
    // }

    inc = () =>{
        this.setState({
            num: this.state.num +1
        })
    }

    incPitch = () =>{
        this.setState({
            num: this.state.num + this.state.pitch
        })
    }

    dec = () =>{
        this.setState({
            num: this.state.num -1
        })
    }
    
    decPitch = () =>{
        this.setState({
            num: this.state.num - this.state.pitch
        })
    }


    // inc  (){
    //     this.setState({
    //         num: this.state.num +1
    //     })
    // }

    // constructor(props){
    //     super(props)
    //     this.inc = this.inc.bind(this)
    // }

    setPitch = (newPitch) =>{
        this.setState({
            pitch: newPitch,
        })
    }

    render(){
        return(
            <div className="Counter">
                <h2>Counter</h2>
                {/* <p>Initial value: {this.state.num}</p> */}
                {/* <button onClick={_=> this.inc()} >+</button> */}                
                <Display num={this.state.num}/>
                <PitchForm pitch={this.state.pitch} setPitch={this.setPitch}/>

                <Buttons setInc={this.inc} 
                setDec={this.dec}
                setIncPitch={this.incPitch}
                setDecPitch={this.decPitch}/>
                
            </div>
        )
    }
}

export default Counter