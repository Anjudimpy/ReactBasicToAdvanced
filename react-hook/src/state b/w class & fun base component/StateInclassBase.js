import React from "react";

export default class StateInClassBase extends React.Component{
    constructor(){
        super();
        this.state = {
            firstname:"",
            lastname: ""
        }
    }

    handleFirstName =(e) =>{
        this.setState({firstname: e.target.value})
    }

    handlelastName = (e) =>{
        this.setState({lastname: e.target.value})
    }

    render(){
        return(
            <>
            <div>
                <label>First Name: </label>
                <input value={this.state.name}
                       onChange={this.handlelastName}
                />
            </div><br/>
            <div>
                <label>Last Name: </label>
                <input value={this.state.name}
                        onChange={this.handleFirstName}     />
            </div>

            <br/>
            <br/>
            <h1>Hello, {this.state.firstname}  {this.state.lastname}</h1>

               
            
            </>
        )
    }
}