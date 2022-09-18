import axios from 'axios';
import React, { Component } from 'react';
import './Elogin.css'
import Inbox from './Inbox'
import './App.css'
import Button from 'react-bootstrap/esm/Button'

export default class ManagerLogin extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         email:'',
         password:'',
         
      }
      this.handlechange=this.handlechange.bind(this);
      this.ManagerLogin=this.ManagerLogin.bind(this);
    }
    handlechange(e){
        this.setState(e);
    }

ManagerLogin(e){
        console.log(this.state.empid);
        console.log(this.state.password);
        axios.get("http://localhost:22452/api/Manager/Login/"+this.state.email+ '/'+this.state.password).
        then(res=>res).then(
            result=>{
                console.log(result.data)
                let r=result.data;
                console.log(r)
                localStorage.setItem("managerid",result.data.managerId);
                localStorage.setItem("managername",result.data.managerName);
                if(r!=null){
                    alert("welcome "+ result.data.managerName);
                    window.location="/ManagerInbox"
                    
                }else{
                    alert("invalid credentials");
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
      <label>Email</label>
      <input type='email' className='form-control' onChange={(e)=> this.handlechange({email:e.target.value})} placeholder='enter empId' required /><br/>
      </div>
      <div className='form-group' >
      <label>password</label>
      <input type='password' className='form-control' onChange={(e)=> this.handlechange({password:e.target.value})} placeholder='enter password' required />
      <br/></div>
      <button className='btn btn-outline-primary' onClick={this.ManagerLogin} >Login</button>
      <Button href="ManagerRegistration">SignUp</Button>
      </div>
      </>

    )
  }
}