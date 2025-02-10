import { Component } from "react";
import ComponentB from "./ComponentB";

class ComponentA extends Component{
    constructor(){
        super();
        this.state = {
            name:"ComponentA"
        }
        console.log("ComponentA Constructor");
    }

    static getDerivedStateFromProps(props, state){
        console.log("ComponentA getDerivedStateFromProps")
         return null;
    }

    componentDidMount(){
        console.log("ComponentA ComponentDidMount")
    }

    render(){
        console.log("ComponentsA render");
        return(<>
    
        <h1>{this.state.name}</h1>
        <ComponentB/>
        </>)
    }
}

export default ComponentA