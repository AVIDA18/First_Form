import React, { useState } from 'react'

const App = () =>{
    const [name, setName] = useState('');
    const [lName, setLName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onOk = (e)=>{
      e.preventDefault();
      setFirstName(name);
      setLastName(lName);
    }

    const inputEvent= (e)=>{
        //console.log(e.target.value)
        setName(e.target.value);
      }
    
    const inputEvent1= (e) =>{
      setLName(e.target.value);
    }

    return(
    <>
    <div>
        <form >
            <div>
                <h1> Hello {firstName} {lastName} </h1>
                <input type="text" onChange={inputEvent} value={name} placeholder='Enter First Name Here' /> <br/>
                <input type="text" onChange={inputEvent1} value={lName} placeholder='Enter Last Name Here' />  <br />
                <button type='submit' onClick={onOk}> ok </button>
            </div>
        </form>
    </div>
    </>
    )
}
export default App