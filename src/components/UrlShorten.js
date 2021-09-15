import axios from 'axios'
import React,{useState} from 'react'
import validator from 'validator'

const UrlShorten = () => {
    const [url, setUrl]=useState('')
    const [link, setLink]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        const validUrl=validator.isURL(url,{
            require_protocol:true
        })
        if(!validUrl){
            alert("Please insure this url is correct and includes the http(s) protocol.")
        }else{
            console.log('url is:',url)
            axios.post('https://urlshortener-mern.herokuapp.com/api/shorten',{url})
             .then((res)=>{
                 console.log(res)
                 if(res.data.hash){
                    setLink(res.data.hash)
                 }else if(res.data){
                    setLink(res.data)
                 }
                 
             })
             .catch(err=>{
                 console.log(err)
             })
        }
        
    }
    const border={
        width:'1200px',
        height:"180px",
        marginTop:'15px',
        border:'2px solid red',
        borderRadius:'8px'

    }
    return (
        <>
        <button type="button"  className="btn btn-outline-secondary fluid-left" style={{marginLeft:"193px", marginTop:"20px", display:"flex", alignItems:'left', }}>
            <a href='/dashboard'>Go Back</a></button>
        <div className='container' style={border}>
            <h2 className='mt-2'>Enter Url for Shortning</h2>
          <input className='mt-4' placeholder="Enter Url Including the Http(s) protocol" name='email' 
          className="form-control mt-4" type="text" onChange={(event) => setUrl(event.target.value)} />
          <button className='btn btn-primary mt-2' onClick={handleSubmit} type="submit">Submit</button>
           
        </div>

        {link && <div className="card container mt-3">
        <div className="card-header">
            Your Shorten Url
        </div>
        <div className="card-body">
            <h5 className="card-title">Url:</h5>
            <p><a href={url} target="_blank">http://urlshorten.in/{link}</a></p>
        </div>
        </div>}
        
        </>
    )
}

export default UrlShorten
