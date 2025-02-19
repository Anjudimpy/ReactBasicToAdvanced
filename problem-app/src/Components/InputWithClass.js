import React from "react";

export default class Input extends React.Component{
    constructor(){
        super();
        this.state={
            name: "",
            lastname:''
        }
    }

    render(){
        return(
            <>
            <div className="section">
                <Row label="Name">
                        <input className="input" value={this.state.name}
                        onChange={(e) => this.setState({name:e.target.value})}/>
                </Row >
                <Row label="Last Name" >
                        <input className="input" value={this.state.lastname}
                        onChange={(e) => this.setState({lastname:e.target.value})}/>
                </Row >
            </div>
    
            <h2>Hello, {this.state.name} {this.state.lastname} </h2>
            
            </>
            )

    }
   
    }


function Row(props){
    const{label} = props;
    return(
        <>
        <lable>{label}<br/></lable>
        {props.children}
        <hr />
        </>
    )
}
