import React from "react";


class counter extends React.Component{

 state = {
  count : 0
 }
 Inc = () =>{
  this.setState ({count:this.state.count +1})
  }
  render(){
    let dec = () =>{
      if(this.state.count > 0){
      this.setState ({count:this.state.count -1})
    }
  }
    let reset = () =>{
      this.setState ({count:this.state.count =0})
     }

    return(
      <>
      <h1>Counter</h1>
      <h1 className="out">{this.state.count}</h1>
      <div className="btn">
      <button onClick={this.Inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={reset}>Reset</button>
      </div>
      </>
    )
  }
}

export default counter