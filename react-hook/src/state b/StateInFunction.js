import { useState } from "react"

export default function StateInFunction(){
    const [name, setName] = useState("Harry");
    const [last, setLastname] = useState("potter")
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
                   onChange={(e) => setLastname(e.target.value)}/>

        </div>

        <h1>Hello, {name} {last}</h1>
        </>
    )
}