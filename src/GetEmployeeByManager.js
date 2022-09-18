import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
export default class GetEmployeeByManager extends Component {
    constructor()
    {
        super();
        this.state={
            Leave:[]
        }
        this.GetLeaveByEmployee=this.GetLeaveByEmployee.bind(this);
    }
    GetLeaveByEmployee(e){
    
        let employeeId=localStorage.getItem("managerid");
        alert(employeeId);
        axios.get("http://localhost:22452/api/Employee/Managerid/"+employeeId)
        .then(response=>{
          this.setState({Leave:response.data})
    
      }).catch(error=>{
          console.warn(error)
      })
      console.log()
    }
    componentDidMount()
{
    this.GetLeaveByEmployee();
}

  render() {
      
    const {Leave}=this.state;
    return (
      <><div>ShowAllDetails</div><div>
            <table className='t' border="1" align='center'>
                
                <tr>
                <th>EmployeeId</th>
                <th>EmployeeName</th>
                <th>EmployeeEmail</th>
                <th>EmployeeMobileNumber</th>
                <th>date of join</th>
                <th>Department</th>
                <th>ManagerId</th>
                
                </tr>
                {Leave.map(a => <tr>
                   <td>{a.employeeid}</td>
                    <td>{a.employeeName}</td>
                    <td>{a.employeeEmail}</td>
                    <td>{a.employeeMobileNumber}</td>
                    <td>{a.dateOfjoin}</td>
                    <td>{a.department}</td>
                    <td>{a.managerId}</td>
                   
                </tr>
                )}
               
                
            </table>
            <Link to="/Inbox">DashBoard</Link>
        </div></>
    )
  }
}