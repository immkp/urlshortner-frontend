import React,{useState,useEffect} from 'react'
import axios from 'axios'

const ForgetPassword = ({history}) => {
    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')
    const [error,setError]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("email::",email)
        axios.put('https://urlshortener-mern.herokuapp.com/api/user/forget-password',{email})
            .then((res)=>{
                if(res.data.message)
                {
                    setMessage(res.data.message)
                    setError('')
                   
                }
                if(res.data.error){
                    setError(res.data.error)
                    setMessage('')
                    
                }
                
            })
            .catch((err)=>{
                console.log(err)
            })
    }
  
    return (
        <div className='container'>
            <div>
                { message && <div class="alert alert-success mt-4" role="alert">
                    {message}
            </div>}
            
            </div>
            <div>
                { error && <div class="alert alert-danger mt-4" role="alert">
                    {error}
            </div>}
            
            </div>
            <div className='row'>
            <label for="inputPassword5" className="form-label mt-3">Email:</label>
            <input type="text" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"
             onChange={(event)=>setEmail(event.target.value)} />
            
            </div>
            <button className='btn btn-sm m-2 btn-primary' onClick={handleSubmit}>Submit</button>

        </div>
    )
}

export default ForgetPassword
