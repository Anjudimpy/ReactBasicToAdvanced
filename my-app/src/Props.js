import { Component } from "react";

class Props extends Component{
    render(){
        const {name, marks} = this.props;
        return(
            <>
            <h1>Hello,{name}</h1>
            <p>Your age is{marks}</p>
            <hr/>
            </>
        )
    }
}

export default Props;