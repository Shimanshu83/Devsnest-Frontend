import React from 'react' ; 
import { useState } from 'react' ; 


function UserForm() {
    const [firstName , setFirstName] = useState('') ;
    const [lastName , setLastName] = useState('') ;
    const submitHandler = (e) => {
        e.preventDefault() ; 

        alert(`${firstName}`);
        setFirstName('');
         
    }

    return (
        <div className='main-contanier'>
            <form onSubmit={submitHandler} className='form' onSubmit={submitHandler}>
                <div className="firstNameCont" >
                    <label>First Name</label>
                    <input type="text" className="firstNameInput" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                </div>
                <div className="lastNameCont" >
                    <label>Last Name </label>
                    <input type="text" className="lastNameInput" value={lastName} onChange={e => setLastName(e.target.value)}/>
                </div>
                <input type="submit" className="submit" value="submit" /> 

            </form>
            
        </div>
    )
}

export default UserForm
