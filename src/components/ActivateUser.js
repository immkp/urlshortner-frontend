import axios from 'axios'
import React,{useState} from 'react'

const ActivateUser = ({history}) => {
    const [message, setMessage]=useState('')
    const handleActivate= ()=>{   
        const token=history.location.pathname.split('/')[3]
        //const data={token}
        axios.post('https://urlshortener-mern.herokuapp.com/api/user/account-activation',{token})
             .then((res)=>{
                 setMessage(res.data.message)
                 setTimeout(()=>{
                    history.push("/")
                },1000)
                
             })
        
    }
    return (
        <>
        <div className='container'>
            
            <button className='btn btn-success mt-5' onClick={handleActivate}>Activate</button>
        </div >
        {message && <div className="alert alert-success container mt-2" role="alert">
        {message}
        </div>}
        
      </>
    )
}

export default ActivateUser
