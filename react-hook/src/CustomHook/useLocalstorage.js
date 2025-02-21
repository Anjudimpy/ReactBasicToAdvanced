import { useState, useEffect } from "react";

export default function useLocalstorage(){
    const [email, setEmail] = useState("");

    useEffect(() =>{
        let email = localStorage.getItem("email");
        if(email){
           setEmail(email)
        } 

        localStorage.setItem("email", email)

    },[])

    useEffect(()=>{
        localStorage.setItem("email",email)
    },[email])

    return{email,setEmail}
}