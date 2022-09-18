import React, { Component } from 'react'
import axios from 'axios';

export default class UpdateManagerDetails extends Component {
    constructor()
    {
        super();
        this.state={
            managerid: 0,
          managerName: '',
          managerEmail: '',
          managerPassword: '',
          managerMobileNumber: 0,

        }
        this.UpdateManager=this.UpdateManager.bind(this);
    }
    UpdateManager(e)
    {
        
        let id=this.state.managerid;
        alert(id)
        let url="http://localhost:22452/api/Manager/"+id;
        axios.put(url,{
           
            managerid: this.state.managerId,
            managerName: this.state.managerName,
            managerEmail: this.state.managerEmail,
            managerPassword: this.state.managerPassword,
            managerMobileNumber: this.state.managerMobileNumber,
        }).then(response=>{
            alert("data Updated");
        }).catch(error=>{
            alert(error);
        })
   // window.location="/Inbox";
    }
    handleChange(ChangeObject){
        this.setState(ChangeObject);
    
    }
    
  render() {
      
    return (
        <><div>Update Employee Details</div><table className='t' border="1" align="center">
        <tr>
            <td><label> ManagerId</label> </td>
            <td><input type="number" name="employeeid" onChange={(e) => this.handleChange({ managerid: e.target.value })}></input> </td>
        </tr>
        <tr>
            <td><label> ManagerName</label> </td>
            <td><input type="text" name="employeeName" onChange={(e) => this.handleChange({  managerName: e.target.value })}></input> </td>
        </tr>
        <tr>
            <td><label>ManagerEmail</label> </td>
            <td><input type="Email" name="employeeEmail" onChange={(e) => this.handleChange({ managerEmail: e.target.value })}></input> </td>
        </tr>
        <tr>
            <td><label>ManagerPassword</label> </td>
            <td><input type="Password" name="employeePassword" onChange={(e) => this.handleChange({ managerPassword: e.target.value })}></input> </td>
        </tr>
        <tr>
            <td><label>ManagerMobileNumber</label> </td>
            <td><input type="number" name="employeeMobileNumber" onChange={(e) => this.handleChange({  managerMobileNumber: e.target.value })}></input> </td>
        </tr>
        
       
        <tr>
            <td></td>
            <td>
                <button type="button" onClick={this.UpdateManager}>update</button>
              
            </td>
        </tr>
    </table></>

 
    )
  }
}
