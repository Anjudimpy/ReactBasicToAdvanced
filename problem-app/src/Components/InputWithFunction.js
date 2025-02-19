import { useState } from "react";

export default function Input(){
   
    const [name, setName] = useState("Harry");
    const [lastname , setLastname] = useState("potter")
    return(
        <>
        <div className="section">
            <Row label="Name">
                    <input className="input" value={name}
                     onChange={(e)=> setName(e.target.value)}      />
            </Row >
            <Row label="Last Name">
                    <input className="input" value={lastname}
                    onChange={(e) => setLastname(e.target.value)}/>
        
            </Row >
        </div>

        <h2>Hello, {name +"  "+ lastname}</h2>
        
        </>
        )
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
