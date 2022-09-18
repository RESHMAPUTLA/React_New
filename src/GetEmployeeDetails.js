import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
export default class GetEmployeeDetails extends Component {
  constructor()
  {
      super();
      this.state={
          employeeid: 0,
            employeeName: '',
            employeeEmail: '',
            employeePassword: '',
            employeeMobileNumber: 0,
            dateOfjoin: '',
            department: '',
            managerId: 0
      }
      this.GetEmployee=this.GetEmployee.bind(this);
  }
  GetEmployee(e){
  
      let employeeId=localStorage.getItem("empid");
      
      axios.get("http://localhost:22452/api/Employee/EnterID/"+employeeId)
      .then(response=>{
        this.setState({employeeid: response.data.employeeid,
            employeeName: response.data.employeeName,
            employeeEmail: response.data.employeeEmail,
            employeePassword: response.data.employeePassword,
            employeeMobileNumber: response.data.employeeMobileNumber,
            dateOfjoin: response.data.dateOfjoin,
            department: response.data.department,
            managerId: response.data.managerId})
  
    }).catch(error=>{
        console.warn(error)
    })
    
  }
  componentDidMount()
{
  this.GetEmployee();
}

render() {
    const{employeeid}=this.state
  const {employeeName}=this.state;
  const {employeeEmail}=this.state;
  const {employeePassword}=this.state;
  const {employeeMobileNumber}=this.state;
  const {dateOfjoin}=this.state;
  const {department}=this.state;
  const {managerId}=this.state;
  return (
    <><div>ShowAllDetails</div><div>
          <table className='t' border="1" align='center'>
              
              <tr>
              <th>Employee</th>
              <th>EmployeeName</th>
              <th>Employeee Email</th>
              <th>Employee Password</th>
              <th>Employee Mobile Number</th>
              <th>DateOfJoin</th>
              <th>Department</th>
              <th>ManagerId</th>
              
              </tr>

              <tr>
                  <td>{employeeid}</td>
                  <td>{employeeName}</td>
                  <td>{employeeEmail}</td>
                  <td>{employeePassword}</td>
                  <td>{employeeMobileNumber}</td>
                  <td>{dateOfjoin}</td>
                  <td>{department}</td>
                  <td>{managerId}</td>
                  
              </tr>
              
             
              
          </table>
          <Link to="/Inbox">DashBoard</Link>
      </div></>
  )
}
}
