import "./Counter.css"
import React,{Component} from "react";

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

    setPitch = (e) =>{
        this.setState({
            pitch: +e.target.value,
        })
    }

    render(){
        return(
            <div className="Counter">
                <h2>Counter</h2>
                {/* <p>Initial value: {this.state.num}</p> */}
                {/* <button onClick={_=> this.inc()} >+</button> */}
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
                <h3>Current number {this.state.num}</h3>
                <div>
                    <label htmlFor="pitchInput"> Pitch</label>
                    <input id="pitchInput" 
                    type="text" 
                    value={this.state.pitch} 
                    onChange={this.setPitch}/>
                </div>
                <button onClick={this.incPitch}> + pitch</button>
                <button onClick={this.decPitch}> - pitch</button>
                <h3>Pitch number  {this.state.pitch}</h3>
            </div>
        )
    }
}

export default Counter