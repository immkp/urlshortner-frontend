  
import React, { useState } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";
import './style.css'


export default function Login({history}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message,setMessage]=useState('')

  const handleSubmit=(e)=>{
    e.preventDefault()
    const data={email,password}
   
    axios.post('https://urlshortener-mern.herokuapp.com/api/user/login',data)
          .then((res)=>{
            console.log(res)
            if(res.data.success){
                
              localStorage.setItem('Bearer',JSON.stringify(res.data.token))
              setMessage(res.data.message)
              history.push('/home')
            }else{
              setMessage(res.data.message)
            }
          })

  }

  return (
    <>
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Login</h1>
        <div>{message && <p style={{color:'white'}}>{message}</p>}</div>
        <div>
          <input placeholder="email" name='email' className="joinInput" type="text" onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div>
          <input placeholder="Password" name='password' className="joinInput mt-20" type="password" onChange={(event) => setPassword(event.target.value)} />
        </div>
          <button className={'button mt-20'} onClick={handleSubmit} type="submit">Log In</button>
      </div>
      <div><Link to='/forgetpassword' style={{color:'white'}} >Forget password?</Link></div>
      <div><Link to='/register' style={{color:'white'}} >Don't have an account? Sign up</Link></div>

    </div>
    
    
    </>
  );
}