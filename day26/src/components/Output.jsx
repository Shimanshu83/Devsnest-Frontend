import { useSelector } from "react-redux";

const Output=()=>{

    const name = useSelector((state)=>state.name)
    const password = useSelector((state)=>state.password)
    
    return (
    <div>
       <div className="container">
        <div className="username">
            
            <div className="name">
                 username:{name}
            </div>
        </div>
        <div className="password">
            
            <div className="pass">
               password:{password}
            </div>
        </div>
        </div>
    </div>
    )
}

export default Output;