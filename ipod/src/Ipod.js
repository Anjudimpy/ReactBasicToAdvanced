import React from "react";

export default class Ipod extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <>
            <div className="ipodContainer">
                <div className="screen"></div>
                <div className="buttons-container">
                <div>menu</div>
                <div className="middleButtonContainer">
                    <div className="leftArrow">
                        <img src="https://cdn-icons-png.flaticon.com/128/10255/10255586.png"/>
                    </div>
                    <div className="centerButton"></div>
                    <div className="rightArrow">
                        <img src="r-arrow.png"/>
                    </div>
                </div>
                <div className="bottomButton">
                    <img src="https://cdn-icons-png.flaticon.com/128/12998/12998461.png"/>
                </div>
                </div>
            </div>
            </>
        )
    }
} 
