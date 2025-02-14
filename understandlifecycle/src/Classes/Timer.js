import React from "react";

export default class Timer extends React.Component{
    constructor(){
        super();
        this.state={
            time:0,
            mount:false
        }

        this.timer = null;
    }

    shouldComponentUpdate(nextProps, nextState){
       if(nextState.time %5 === 0){
        return true
       }
       return false
    }
   
    render(){
        return(
            <>
           <h1>Time spent: {new Date(this.state.time*1000).toISOString().slice(11,19)}</h1>
         
            </>
        )
    }

    componentDidMount(){
        console.log("ComponentDidMount");

      
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate");
        return null
    }

    componentDidUpdate(prevProps, prevState, snapShot){
    //    if(this.state.time == 10){
    //     clearInterval(this.timer)
    //    }
 
     if(prevProps.timerOn !== this.props.timerOn){
        if(this.props.timerOn){
            this.timer = setInterval(() =>{
                this.setState((prevState) => ({time: prevState.time+1}))
             },1000);
        }
        
     else{
         clearInterval(this.timer)
     }
     }
    
    console.log("prevProps: ", prevProps)
    console.log("prevState: ", prevState)
    console.log("snapShot get by getSnapshotBeforeUpdate: ", snapShot)
    }


    componentWillUnmount(){
    console.log("ComponentWillUnmount")
    clearInterval(this.timer)
    }
}