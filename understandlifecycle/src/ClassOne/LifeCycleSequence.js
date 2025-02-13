import React from "react";

export default class LifeCycleSequence extends React.Component{
 constructor(){
    super();
    this.state = {
    name:"ComponentA"
    }
    console.log("ComponentA Constructor");
 }
 static getDerivedStateFromProps(){
    console.log("ComponentA getDerivedStateFromProps");
    return null
 }

 componentDidMount(){
    console.log("ComponentA componetDidMount")
    this.setState({name:"ComponetB"})
 }
 render(){
    console.log("ComponentA render")
    return(
        <>
     <h1>{this.state.name}</h1>
        </>
    )
 }
}
