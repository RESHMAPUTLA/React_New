import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
export default class GetManagerLeaveDetails extends Component {
    constructor()
    {
        super();
        this.state={
            Leave:[]
        }
        this.GetLeaveByEmployee=this.GetLeaveByEmployee.bind(this);
    }
    GetLeaveByEmployee(e){
    
        let employeeId=localStorage.getItem("empid");
        
        axios.get("http://localhost:22452/api/Leave/ManagerId/"+employeeId)
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
                <th>LeaveId</th>
                <th>EmployeeId</th>
                <th>ManagerID</th>
                <th>NumberOfDay</th>
                <th>StartDay</th>
                <th>EndDay</th>
                <th>LeaveType</th>
                <th>Status</th>
                <th>Reason</th>
                <th>AppliedOn</th>
                <th>ManagerComments</th>
                </tr>
                {Leave.map(a => <tr>
                   <td>{a.leaveId}</td>
                    <td>{a.employeeId}</td>
                    <td>{a.managerId}</td>
                    <td>{a.numberOfDay}</td>
                    <td>{a.strartDate}</td>
                    <td>{a.endDate}</td>
                    <td>{a.leaveType}</td>
                    <td>{a.status}</td>
                    <td>{a.reason}</td>
                    <td>{a.appliedOn}</td>
                    <td>{a.managerComments}</td>
                </tr>
                )}
               
                
            </table>
            <Link to="/Inbox">DashBoard</Link>
        </div></>
    )
  }
}