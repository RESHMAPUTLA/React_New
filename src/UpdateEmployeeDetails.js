import React, { Component } from 'react'
import axios from 'axios';

export default class UpdateEmployeeDetails extends Component {
    constructor()
    {
        super();
        this.state={
            employeeid: Number,
            employeeName: '',
            employeeEmail: '',
            employeePassword: '',
            employeeMobileNumber: 0,
            dateOfjoin: '',
            department: '',
            managerId: 0

        }
        this.UpdateEmployee=this.UpdateEmployee.bind(this);
    }
    UpdateEmployee(e)
    {
        
        let id=this.state.employeeid;
        
        let url="http://localhost:22452/api/Employee/"+id;
        axios.put(url,{
           
            employeeid: this.state.employeeid,
            employeeName:this.state.employeeName,
            employeeEmail: this.state.employeeEmail,
            employeePassword: this.state.employeePassword,
            employeeMobileNumber: this.state.employeeMobileNumber,
            dateOfjoin: this.state.dateOfjoin,
            department: this.state.department,
            managerId: this.state.managerId
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
    componentDidMount()
    {
      this.UpdateEmployee();
    }
  render() {
      
    return (
        <><div>Update Employee Details</div><table className='t' border="1" align="center">
        <tr>
            <td><label> EmployeeId</label> </td>
            <td><input type="number" name="employeeid" onChange={(e) => this.handleChange({ employeeid: e.target.value })}></input> </td>
        </tr>
        <tr>
            <td><label> EmployeeName</label> </td>
            <td><input type="text" name="employeeName" onChange={(e) => this.handleChange({  employeeName: e.target.value })}></input> </td>
        </tr>
        <tr>
            <td><label>EmployeeEmail</label> </td>
            <td><input type="Email" name="employeeEmail" onChange={(e) => this.handleChange({ employeeEmail: e.target.value })}></input> </td>
        </tr>
        <tr>
            <td><label>EmployeePassword</label> </td>
            <td><input type="Password" name="employeePassword" onChange={(e) => this.handleChange({ employeePassword: e.target.value })}></input> </td>
        </tr>
        <tr>
            <td><label>EmployeeMobileNumber</label> </td>
            <td><input type="number" name="employeeMobileNumber" onChange={(e) => this.handleChange({  employeeMobileNumber: e.target.value })}></input> </td>
        </tr>
        <tr>
            <td><label>DateOfJoin</label> </td>
            <td><input type="text" name="dateOfjoin" onChange={(e) => this.handleChange({dateOfjoin: e.target.value })}></input> </td>
        </tr>
        <tr>
            <td><label> Department</label> </td>
            <td><input type="text" name=" department" onChange={(e) => this.handleChange({   department: e.target.value })}></input> </td>
        </tr>
        <tr>
            <td><label>ManagerId</label> </td>
            <td><input type="number" name=" managerId" onChange={(e) => this.handleChange({  managerId: e.target.value })}></input> </td>
        </tr>
       
        <tr>
            <td></td>
            <td>
                <button type="button" onClick={this.UpdateEmployee}>update</button>
              
            </td>
        </tr>
    </table></>

 
    )
  }
}
