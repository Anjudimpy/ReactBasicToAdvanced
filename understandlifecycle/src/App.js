// import ComponentA from "./ComponentA";
// import TimerOne from "./Timer/TimerOne";
// import React from "react";

import FetchApiData from "./ClassOne/FetchData"
import LifeCycleSequence from "./ClassOne/LifeCycleSequence"


// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       timerOn: false
//     }
//   }

//   handleTimerOn = () =>{
//     this.setState((preState) => ({timerOn: !preState.timerOn}));
//   }
// render(){
//   return(<>
//   <button onClick={this.handleTimerOn}> {this.state.timerOn?"start":"stop"}</button>
// <TimerOne timerOn = {this.state.timerOn}/>
//   </>)
// }
// }

// export default App;

function App(){
  return(
    <>
    <LifeCycleSequence/>
    <FetchApiData/>
    </>
  )
}
export default App