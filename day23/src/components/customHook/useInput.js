import { useState } from 'react' ;

const useInput = (initialValue) =>{
    const [input , setInput] = useState(initialValue) ;
    
    const inputBinding = {
        value : input  , 
        onChange : (e) => (setInput(e.target.value)) 
    }

    const reset = () =>{
        setInput('') ; 
    }
    return [input ,inputBinding , reset] ;

} 

export default useInput ; 