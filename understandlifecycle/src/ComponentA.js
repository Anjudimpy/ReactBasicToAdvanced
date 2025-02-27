import { Component } from "react";
import ComponentB from "./ComponentB";

class ComponentA extends Component{
    constructor(){
        super();
        this.state = {
            name:"ComponentA",
            data: []
        }
        console.log("ComponentA Constructor");
    }

    static getDerivedStateFromProps(props, state){
        console.log("ComponentA getDerivedStateFromProps")
         return null;
    }

    componentDidMount(){
        console.log("ComponentA ComponentDidMount");
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => this.setState({data:data}))
    }

    render(){
        console.log("ComponentsA render");
        return(<>
    
        <h1>{this.state.name}</h1>
        <ul>
            {this.state.data.map((d) =>{
                return(<li>{d.username}</li>)
            })}
        </ul>
        <ComponentB/>
        </>)
    }
}

export default ComponentA