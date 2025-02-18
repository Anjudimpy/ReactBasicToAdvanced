import { useEffect, useState } from "react"

export default function StateInFunction(){
    const [name, setName] = useState("Harry");
    const [last, lastname] = useState("potter")

    useEffect(() => {
         document.title = name + " " + last;
    },[])

    useEffect(() =>{
        let timer = setInterval(() =>{
            console.log("window_width: ", window.innerWidth);
        },2000);

        return ()=>clearInterval(timer);
    }); 

    return(
        <>
        <div>
            <label>First Name: </label>
            <input value={name}
                   onChange={(e) => setName(e.target.value)}
            />
        </div>
        <br/>
        <div>
            <label>Last NAME:</label>
            <input value={last}
                   onChange={(e) => lastname(e.target.value)}/>

        </div>

        <h1>Hello, {name} {last}</h1>
        </>
    )
}