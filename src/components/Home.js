import React,{useState} from 'react'
import Navbar from './Navbar'
import axios from 'axios'
const Home = () => {
    const [countDay, setCountDay]=useState('')
    const [countMonth, setCountMonth]=useState('')
    //records per day
    axios.get('https://urlshortener-mern.herokuapp.com/api/shorten/record-per-day')
         .then((res)=>{
             setCountDay(res.data)
         })
         .catch((err)=>{
             console.log(err)
         })

    //records per month
    axios.get('https://urlshortener-mern.herokuapp.com/api/shorten/record-per-month')
         .then((res)=>{
             setCountMonth(res.data)
         })
         .catch((err)=>{
             console.log(err)
         })

    return (
        <>
        <Navbar />
        <div className='container'>
            <div>
                <h2 style={{marginTop:"15px", marginBottom:"15px"}}>Welcome to Url Shortner app!</h2>
            </div>
            <div className='row mt-4'  >
              
                <div className='col-5 mr-2' style={{border:"2px solid purple", borderRadius:"4px"}} >
                    <h2 style={{marginTop:"12px"}}>Url created per day</h2>
                    <p>Here this is the count of url shortened per day</p>
                    <h2>{countDay}</h2>
                </div>
                <div className='col-6'  style={{border:"2px solid purple", borderRadius:"4px"}}>
                    <h2 style={{marginTop:"12px"}}>Url created per Month</h2>
                    <p>Here this is the count of url shortened per month</p>
                    <h2>{countMonth}</h2>
                </div>
             
                
            </div>
        
            <div className='col-11' style={{border:"2px solid purple", borderRadius:"4px", marginTop:'30px'}}>
                <h2 style={{marginTop:'12px'}}>This is url shortener app here you can shorten your long url</h2>
                <p>You can see generated all short urls </p>
                <p>Here you can see number of url generate per day and per month.</p>
                <p>For generating short url you can go to Url shorten link.</p>
                <h2>Thanks for visiting this site.</h2>
            </div>
        </div>
        </>
    )
}

export default Home
