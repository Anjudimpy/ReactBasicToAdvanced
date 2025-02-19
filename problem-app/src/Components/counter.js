import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    return(
        <div>
        <h2>Count: {count}</h2>
        <button value={count} 
        onClick={(e) => setCount(count<=0? 0 :count -1)}>Decrease</button>

        <button value={count} onClick={(e) => setCount(count+1)}>Increase</button>
        </div>
    )
}