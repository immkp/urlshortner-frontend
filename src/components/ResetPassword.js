import React,{useState} from 'react'
import axios from 'axios'

const ResetPassword = ({history}) => {
    const [newPass,setNewPass]=useState('')
    const [message, setMessage]=useState('')
    const [error, setError]=useState('')
    
    const resetLink=history.location.pathname.split('/')[2]

    const handleSubmit=(e)=>{
        console.log("password",newPass)
        console.log("token",resetLink)
        e.preventDefault()

        axios.put('https://urlshortener-mern.herokuapp.com/api/user/reset-password',{resetLink,newPass})
             .then((res)=>{
                if(res.data.message)
                {
                    setMessage(res.data.message)
                    setError('')
                    setTimeout(()=>{
                        history.push("/")
                    },1000)
                    
                }
                if(res.data.error){
                    setError(res.data.error)
                    setMessage('')
                    setTimeout(()=>{
                        history.push("/")
                    },1000)
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
            <label for="inputPassword5" className="form-label mt-3">Password:</label>
            <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"
                    onChange={(event)=>setNewPass(event.target.value)} />
            
            </div>
            <button className='btn btn-sm m-2 btn-primary' onClick={handleSubmit}>Submit</button>

        </div>
    )
}

export default ResetPassword