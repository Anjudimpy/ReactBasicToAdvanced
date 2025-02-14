import React from "react";

export default class UpdatePhase extends React.Component{
    constructor(){
        super();
        this.state={
         count: 0,
        }

        console.log("Constructor");
    }
static getDerivedStateFromProps(){
    console.log("getDerivedStateFromProps");
    return null
}

shouldComponentUpdate(nextProps, nextState){
    return true;
}

handleInc = ()=>{
    this.setState((pre)=>{
        return{count: pre.count+1}
    })
}

 render(){
        console.log("render");
        return(
            <>
            <h1>Update Phases</h1>
            <button onClick={this.handleInc}>Increase</button>
            <p>Counter: {this.state.count}</p>
            </>
        )
    }

    componentDidMount(){
        console.log("ComponentDidMount")
        console.log("_________________________________")
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate");
        return null
    }

    componentDidUpdate(prevProps, prevState, snapShot){
       console.log("ComponentDidUpdate")
       console.log("_________________________________")
    }
}