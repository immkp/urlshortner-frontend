  
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'
import './style.css'


export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message,setMessage]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data={email, password}
        axios.post('https://urlshortener-mern.herokuapp.com/api/user/register',data)
        .then((res)=>{
            console.log("response",res)
            if(res.data.message){
                setMessage(res.data.message)
            }
        })
        
    }
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Register</h1>
        <div>{message && <p style={{color:'white'}}>{message}</p>}</div>
        <div>
          <input placeholder="Email" className="joinInput" type="text" onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div>
          <input placeholder="Password" className="joinInput mt-20" type="password" onChange={(event) => setPassword(event.target.value)} />
        </div>
        
          <button className={'button mt-20'} onClick={handleSubmit} type="submit">Register</button>
       
      </div>
      <div><Link to='/' style={{color:'white'}} >Login</Link></div>
    </div>
  );
}