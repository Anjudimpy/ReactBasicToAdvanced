import React from "react";

import FetchApiData from "./Classes/FetchData"
import MountingPhase from "./Classes/MountingPhase"
import Timer from "./Classes/Timer"
import UpdatePhase from "./Classes/UpdatePhase"
import ErrorBoundry from "./Classes/ErrorBoundry";


class App extends React.Component{
  constructor(props){
  super(props);
  this.state= {
   timerOn: false
  }
  }

  handelTimer=()=>{
    this.setState((prevState) => ({timerOn: !prevState.timerOn}))
  }
  render(){
    return(
      <>
      
      {/* <MountingPhase/> */}
      <ErrorBoundry>
              <FetchApiData/>
      </ErrorBoundry>
    
      {/* <UpdatePhase/> */}


        <Timer timerOn={this.state.timerOn}/>
       <button onClick={this.handelTimer}>{this.state.timerOn? "STOP":"START"}</button>
      {/* {this.state.timer?<Timer/>:null} */}
      </>
    )
  }
 
}
export default App