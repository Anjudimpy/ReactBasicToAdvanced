import { useEffect, useState } from "react";

export default function Input(){
   
    const [name, setName] = useState("Harry");
    const [lastname , setLastname] = useState("potter")

    useEffect(() =>{
        document.title = name + " " + lastname;
    }, [lastname]) // with condition if last name change then update document title
    
    useEffect(() =>{
        let timer = setInterval(() =>{
            console.log("Window Width: ", window.innerWidth)
        },2000)

        return (()=> clearInterval(timer));
    })
    
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
