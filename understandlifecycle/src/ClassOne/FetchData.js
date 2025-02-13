import React from "react";

export default class FetchApiData extends React.Component{
    constructor(){
        super();
        this.state = {
            data: [],
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => this.setState({data:data}))

    }

    render(){
        return(
            <>
            <ul>
                {this.state.data.map((d) =>(
                    <li>{d.name}</li>
                ))}
            </ul>
            </>
        )
    }

}