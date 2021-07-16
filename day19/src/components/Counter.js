import { useState } from "react";

function Counter(){
    const [count, changeCount] = useState(0);
    return (
        <button className="btn" onClick = {()=>{changeCount(count+ 1)}}>{count}</button>
    )
}


export default Counter ; 