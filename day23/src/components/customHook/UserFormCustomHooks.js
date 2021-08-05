import React from 'react';
import useInput from './useInput';

function UserFormCustomHooks() {
    // const [firstName , setFirstName] = useState('') ;
    // const [lastName , setLastName] = useState('') ;
    const [firstName , firstNameBinding , firstNameReset ] = useInput('') ;
    const [lastName , secondNameBinding , secondNameReset ] = useInput('') ; 

    const submitHandler = (e) => {
        e.preventDefault() ; 

        alert(`${firstName} and ${lastName}`);
        firstNameReset() ;
        secondNameReset() ;
         
    }

    return (
        <div className='main-contanier'>
            <form onSubmit={submitHandler} className='form' onSubmit={submitHandler}>
                <div className="firstNameCont" >
                    <label>First Name</label>
                    <input type="text" className="firstNameInput" {...firstNameBinding}/>
                </div>
                <div className="lastNameCont" >
                    <label>Last Name </label>
                    <input type="text" className="lastNameInput" {...secondNameBinding}/>
                </div>
                <input type="submit" className="submit" value="submit" /> 

            </form>
            
        </div>
    )
}

export default  UserFormCustomHooks ; 
