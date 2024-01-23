import React, { useState } from 'react'

export default function Form() {
    const data = {email:'', password:''};
    const[inputData, setInputData] = useState(data)
    function handleData(e){
        setInputData({...inputData,[e.target.name]:e.target.value})
        console.log(inputData)
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.email || !inputData.pw){
            alert("all fields are necessary")
        }
        else{
            alert("you have successfully logged in")
        }
    }
  return (
    <div>
      <form action="" className='container' onSubmit={handleSubmit}>
        <div className='header'>
            <h1>Login Form</h1>
        </div>
        <div>
            <input type="text" placeholder='Email' name='email' value={inputData.email} onChange={handleData} />
        </div>

        <div>
            <input type="text" placeholder='Password' name='pw' value={inputData.pw} onChange={handleData} />
        </div>
        <div>
            <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  )
}