import { Component } from "react";

class Navbar extends Component{
       render(){
        return(
            <>
            <div className="nav" style={{display:"flex"}}>
                <div className="nav-title">MOVIE <span className="title-app">APP</span></div>
                <div className="nav-icon">
                    <img alt="cart-icon"/>
                    <span>0</span>
                </div>
            </div>
            </>
        )
       }
}

export default Navbar