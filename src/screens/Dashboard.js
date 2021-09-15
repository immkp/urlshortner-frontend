
import Navbar from '../components/Navbar'

import React, { Component } from 'react'
import axios from 'axios'

export class Dashboard extends Component {

  constructor(props){
    super(props)
    this.state={
      urls:[]
    }
  }

  componentDidMount(){
    this.getUrls()
  }

  getUrls=()=>{
    axios.get("https://urlshortener-mern.herokuapp.com/api/shorten/allurl").then((res)=>{
      // console.log(res)
      if(res.data.Success){
        this.setState({ 
          //here we set posts beacuse from server we return posts in router.js file
          urls:res.data.urls
        })
        console.log(this.state.urls)
      }
    })
    
  }

  render() {
    return (
        <>
        <Navbar />
        
        
      <div className="container">

          <div className="row">
                <div className="col-lg-9 mt-2 mb-2">
                    <h4>All Urls</h4>
                </div>
          </div>
        
        <table className="table table-striped">
          <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col" >Title</th>
                <th scope="col" >Description</th>
              </tr>
          </thead>
          <tbody>
              {this.state.urls.map((url,index)=>(
                <tr key={index}>
                <th scope="row">{index}</th>
                <td ><a target='_blank' href={url.url} >http://urlshorten.in/{url._id}</a></td>
                <td ><a target='_blank' href={url.url} >{url.url}</a></td>
              </tr>
              ))}
            
         </tbody>
      </table>
      </div>
      </>
    )
  }
}

export default Dashboard
