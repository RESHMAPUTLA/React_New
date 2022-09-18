import axios from 'axios';
import React, { Component } from 'react';
import './Elogin.css'
import Inbox from './Inbox'
import './App.css'
import Button from 'react-bootstrap/esm/Button';

export default class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         email:'',
         password:'',
         
      }
      this.handlechange=this.handlechange.bind(this);
      this.Login=this.Login.bind(this);
    }
    handlechange(e){
        this.setState(e);
    }

Login(){
        console.log(this.state.email);
        console.log(this.state.password);
        axios.get("http://localhost:22452/api/Employee/Login/"+this.state.email+ '/'+this.state.password).
        then(res=>res).then(
            result=>{
                console.log(result.data)
                let r=result.data;
                console.log(r)
                sessionStorage.setItem("empid",result.data.employeeid);
                sessionStorage.setItem("empname",result.data.employeeName);
                if(result.status===200){
                    alert("welcome "+ result.data.employeeName);
                    window.location="/Inbox"
                    
                }
                
                //window.sessionStorage.setItem("empid",result.data.employeeid);
            }).catch(err=>{
                alert(err);

            });
    }


    
  render() {
    return (
        <>
        <div className='review'>
      <h1 className="heading">Login</h1>
      <div className='form-group' >
      <label>Username</label>
      <input type='email' className='form-control' onChange={(e)=> this.handlechange({email:e.target.value})} placeholder='enter email' required /><br/>
      </div>
      <div className='form-group' >
      <label>password</label>
      <input type='password' className='form-control' onChange={(e)=> this.handlechange({password:e.target.value})} placeholder='enter password' required />
      <br/></div>
      <button className='btn btn-outline-primary' onClick={this.Login} >Login</button>
      <Button href="EmployeeRegistration" >New User SignUp</Button>
      </div>
      </>

    )
  }
}