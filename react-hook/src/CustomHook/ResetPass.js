//import { useEffect, useState } from "react"

import useLocalstorage from "./useLocalstorage"

export default function  ResetPassword(){
    // const [email, setEmail] = useState("");

    // useEffect(() =>{
    //     let email = localStorage.getItem("email");
    //     if(email){
    //        setEmail(email)
    //     } 

    // },[])

    // useEffect(()=>{
    //     localStorage.setItem("email",email)
    // },[email])
    const{email,setEmail} = useLocalstorage();

    return(
        <>
        <div>
        <h2>Login to the Portal</h2>
        <input placeholder="" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <br/><br/>
        <button> Continue </button>
        </div>
        </>
    )
}