import ComponentA from "./ComponentA";
import TimerOne from "./Timer/TimerOne";
import React from "react";


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      mount:false
    }
  }

  handleMount = () =>{
    this.setState((preState) => ({mount: !preState.mount}));
  }
render(){
  return(<>
  <button onClick={this.handleMount}> {this.state.mount?"UN-MOUNT":"MOUNT"}</button>
  {this.state.mount?<TimerOne/>:null}
  </>)
}
}

export default App;
