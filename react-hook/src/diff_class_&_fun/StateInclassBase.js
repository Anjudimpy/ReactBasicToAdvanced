import React from "react";

export default class StateInClassBase extends React.Component{
    constructor(){
        super();
        this.state = {
            firstname:"Harry",
            lastname: "Potter"
        }
        this.timer =  null;
    }

    handleFirstName =(e) =>{
        this.setState({firstname: e.target.value})
    }

    handlelastName = (e) =>{
        this.setState({lastname: e.target.value})
    }

    componentDidMount(){
        document.title = (this.state.firstname + " " + this.state.lastname)

        this.timer = setInterval(() =>{
                console.log("window_width: ", window.innerWidth)
        },2000);
    }

    componentDidUpdate(){
        document.title = (this.state.firstname + " " + this.state.lastname)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render(){
        return(
            <>
            <div>
                <label>First Name: </label>
                <input value={this.state.name}
                       onChange={this.handleFirstName}
                />
            </div><br/>
            <div>
                <label>Last Name: </label>
                <input value={this.state.name}
                        onChange={this.handlelastName}     />
            </div>

            <br/>
            <br/>
            <h1>Hello, {this.state.firstname}  {this.state.lastname}</h1>
            </>
        )
    }
}