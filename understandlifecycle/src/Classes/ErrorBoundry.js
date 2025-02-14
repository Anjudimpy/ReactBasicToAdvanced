import React from "react";

export default class ErrorBoundry extends React.Component{
 constructor(){
    super();
    this.state={
        hasError: false
    }
 }

 static getDerivedStateFromError(error){
    return{
        hasError: true
    }
 }

 componentDidCatch(error, info){
    console.log("Error", error)
    console.log("Info", info)
 }

 render(){
    if(this.state.hasError){
    return(    <h1>Somthing Went Wrong, Contact To Admin</h1>)
    }

    return this.props.children
 }
}