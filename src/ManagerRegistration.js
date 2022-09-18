import axios from 'axios';
import React, { Component } from 'react'
import './Registration.css'
export default class EmployeeRegistration extends Component {
constructor(props)
{
    super(props);
    this.state={
        
            managerId: 0,
            managerName: "",
            managerEmail: "",
            managerPassword: "",
            managerMobileNumber: 0
          
    }
    this.CreateNewManager=this.CreateNewManager.bind(this);
}
CreateNewManager(e)
{
    
    let url="http://localhost:22452/api/Manager";
    axios.post(url,{
        managerId: this.state.managerId,
        managerName: this.state.managerName,
        managerEmail: this.state.managerEmail,
        managerPassword: this.state.managerPassword,
        managerMobileNumber: this.state.managerMobileNumber
       
        
    }).then(response=>{
        alert("data inserted");
        localStorage.setItem("managerId",response.data.managerId);
    }).catch(error=>{
        alert(error);
    })
     window.location="/ManagerLogin";
}
handleChange(ChangeObject){
    this.setState(ChangeObject);
}

  render() {
     
      
    return (
      <><body1>
      <form className="form">
          <h1>Register</h1>
          <div className="empid">
                  <label><b>Manager Id</b></label><br></br>
                  <input className="form-input"  onChange={(e) => this.handleChange({managerId: e.target.value })} type="text" name="empid" required placeholder="Emp Id"></input>
              </div>

              <div className="name">
                  <label><b>Name</b></label><br></br>
                  <input className="form-input"  onChange={(e) => this.handleChange({ managerName: e.target.value })} type="text" name="name" required placeholder="Name"></input>
              </div>

              <div className="email">
                  <label><b>Email Id</b></label><br></br>
                  <input className="form-input"  onChange={(e) => this.handleChange({ managerEmail: e.target.value })} type="email" name="email" required placeholder="Email Id"></input>
              </div>

              <div className="password">
                  <label><b>Password</b></label><br></br>
                  <input className="form-input"  onChange={(e) => this.handleChange({ managerPassword: e.target.value })} type="password" name="password" required placeholder="Password"></input>
              </div>

              <div className="mobileNo">
                  <label><b>Mobile Number</b></label><br></br>
                  <input className="form-input"  onChange={(e) => this.handleChange({ managerMobileNumber: e.target.value })} type="text" name="mobileNo" required placeholder="Mobile Number"></input>
              </div>

              <div className="dateOfJoin">
                  <label><b>Date Of Join</b></label><br></br>
                  <input className="form-input"  onChange={(e) => this.handleChange({ dateOfjoin: e.target.value })} type="text" name="dateOfJoin" required placeholder="Date Of Join"></input>
              </div>

              <div className="department">
                  <label><b>Department</b></label><br></br>
                  <input className="form-input"  onChange={(e) => this.handleChange({ department: e.target.value })} type="text" name="department" required placeholder="Department"></input>
              </div>

              <div className="managerId">
                  <label><b>Manager Id</b></label><br></br>
                  <input className="form-input"  onChange={(e) => this.handleChange({ managerId: e.target.value })} type="text" name="managerId" required placeholder="Manager Id"></input>
              </div>
              <br></br>
              <div className='footer'>

              <button onClick={this.CreateNewManager} type="submit" class="btn">Signup</button>

              </div>
              <br></br>

              <span>Already have an account? Login</span>
        

      </form>
  </body1></>
 
    )
  }
}