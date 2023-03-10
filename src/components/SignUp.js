import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();

    const handleInput = async () => {
        console.log(name, email, password)
        let result=await fetch('http://localhost:5000/register',{
            method:'post',
            body :JSON.stringify({name,email,password}),
            headers :{
                'Content-Type':'application/json'
            }, 
        })
        result = await result.json()
        console.log(result);
        if(result){
            navigate('/')
        }
    }
    return (
        <div className='register'>
            <h1>Register</h1>
            <input className='inputBox' type="text"
                onChange={(e) => setName(e.target.value)} value={name}
                placeholder='Enter Name' />

            <input className='inputBox' type="text"
                onChange={(e) => setEmail(e.target.value)} value={email}
                placeholder='Enter Email' />

            <input className='inputBox' type="password"
                onChange={(e) => setPassword(e.target.value)} value={password}
                placeholder='Enter Password' />

            <button onClick={handleInput} className='appbutton' type='button'>Sign Up</button>
        </div>
    )
}
export default SignUp;