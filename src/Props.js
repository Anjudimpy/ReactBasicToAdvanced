import { Component } from "react";

class Props extends Component{
    render(){
        const {name, marks} = this.props;
        return(
            <>
            <h1>Hello, {name}</h1>
            <p>Your age is {marks}</p>
            <hr/>
            </>
        )
    }
}

// Props in Function
// here no need to this but need pass argument 
export function FunProps(props){
    const {name, marks} = props;
    return(
        <>
             <h1>Hello, {name}</h1>
            <p>Your age is {marks}</p>
            <hr/>
        </>
    )
}
export default Props;