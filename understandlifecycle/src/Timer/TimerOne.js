import { Component } from "react";

 export default class TimerOne extends Component{
    constructor(){
       super();

       this.state ={
        time: 0 
       }

       this.timer = null

       console.log("TimerOne Constructor");
    }

    static getDerivedStateFromProps(){
        console.log(" TimerOne getDrivedStateFromProps");
        return null
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("TimerOne shouldCompentUpdate")
        return true;
    }

    render(){
        console.log("TimerOne render")
        return(<>
        <h1>Time spent:
            {new Date(this.state.time*1000).toISOString().slice(11,19)}
        </h1>
        </>)
    }

    componentDidMount(){
        console.log("TimerOne ComponentDidMount")
        console.log("___________________________________________")
          
        this.timer =  setInterval(()=>{
            this.setState((prevState) =>({time:prevState.time +1}))
 
        },1000)
   }

    getSnapshotBeforeUpdate(preProps, preState){
        console.log("TimerOne getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("TimerOne componentDidUpdate")
        console.log("____________________________")

        if(this.state.time === 10){
            clearInterval(this.timer);
        }
    }
}