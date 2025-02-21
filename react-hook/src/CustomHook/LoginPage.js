import { useEffect, useState } from "react"
import useLocalstorage from "./useLocalstorage";

export default function LoginPage(){
    //const [email, setEmail] =  useState("");
    const[password, setPassword] = useState("");
    const{email,setEmail} = useLocalstorage();

    // useEffect(() =>{
    //     let email = localStorage.getItem("email");
    //     if(email){
    //         setEmail(email)
    //     }
        
    //     localStorage.setItem("email", email)

    // },[])
    
    // useEffect(()=>{
    //     localStorage.setItem("email",email)
    // },[email])
    
    return(
        <>
        <div>
         
            <h2>Login to the Portal</h2>
            <input placeholder="Enter Email"
            value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br/><br/>
            <input placeholder="Enter Password"
            value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br/><br/>
            <button>Login</button>
          
        </div>
        </>
    )
}