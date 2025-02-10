import { Component } from "react";

class ComponentB extends Component{
    constructor(){
        super();
        this.state = {
            name:"ComponentB"
        }
        console.log("ComponentB Constructor");
    }

    static getDerivedStateFromProps(props, state){
        console.log("ComponentB getDerivedStateFromProps")
         return null;
    }

    componentDidMount(){
        console.log("ComponentB ComponentDidMount")
    }

    render(){
        console.log("ComponentsB render");
        return(<>
      
        <h1>{this.state.name}</h1>
        </>)
    }
}

export default ComponentB