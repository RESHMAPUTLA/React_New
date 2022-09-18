import axios from 'axios';
import React, { Component } from 'react'

export default class ApplyNewLeaveForEmployee extends Component {
constructor(props)
{
    super(props);
    this.state={
        leaveId:0,
    employeeId: 0,
    managerId: 0,
    numberOfDay: 0,
    strartDate: '',
    endDate: '',
    leaveType: '',
    status: '',
    reason: '',
    appliedOn: '',
    managerComments: ''
    }
    this.CreateNewLeave=this.CreateNewLeave.bind(this);
}
CreateNewLeave(e)
{
    
    let url="http://localhost:22452/api/Leave";
    console.log(this.state.employeeId)
    axios.post(url,{
        leaveId:this.state.leaveId,
       employeeId: this.state.employeeId,
        managerId: this.state.managerId,
        numberOfDay: this.state.numberOfDay,
        strartDate: this.state.strartDate,
        endDate: this.state.endDate,
        leaveType: this.state.leaveType,
        status: this.state.status,
        reason: this.state.reason,
        appliedOn: this.state.appliedOn,
        managerComments: this.state.managerComments
        
    }).then(response=>{
        alert("data inserted");
        localStorage.setItem("leaveId",response.data.leaveId);
    }).catch(error=>{
        alert(error);
    })
    // window.location="/Inbox";
}
handleChange(ChangeObject){
    this.setState(ChangeObject);
}

  render() {
      console.log(this.state.status)
      
    return (
      <><div>CreateLeave</div><table className='t' border="1" align="center">
           {/* <tr>
                <td><label> LeaveId</label> </td>
                <td><input type="number" name="leaveId" onChange={(e) => this.handleChange({leaveId: e.target.value })}></input> </td>
           </tr>*/}
            <tr>
                <td><label> EmployeeId</label> </td>
                <td><input type="number" name="employeeId" onChange={(e) => this.handleChange({ employeeId: e.target.value })}></input> </td>
            </tr>
            <tr>
                <td><label>Manager ID</label> </td>
                <td><input type="number" name="managerId" onChange={(e) => this.handleChange({ managerId: e.target.value })}></input> </td>
            </tr>
            <tr>
                <td><label>numberOfDay</label> </td>
                <td><input type="number" name="numberOfDay" onChange={(e) => this.handleChange({ numberOfDay: e.target.value })}></input> </td>
            </tr>
            <tr>
                <td><label>startDate</label> </td>
                <td><input type="text" name="strartDate" onChange={(e) => this.handleChange({ strartDate: e.target.value })}></input> </td>
            </tr>
            <tr>
                <td><label>endDate</label> </td>
                <td><input type="text" name="endDate" onChange={(e) => this.handleChange({endDate: e.target.value })}></input> </td>
            </tr>
            <tr>
                <td><label> leaveType</label> </td>
                <td><input type="text" name=" leaveType" onChange={(e) => this.handleChange({  leaveType: e.target.value })}></input> </td>
            </tr>
            <tr>
                <td><label>status</label> </td>
                <td><input type="text" name="status" onChange={(e) => this.handleChange({ status: e.target.value })}></input> </td>
            </tr>
            <tr>
                <td><label>reason</label> </td>
                <td><input type="text" name="reason" onChange={(e) => this.handleChange({ reason: e.target.value })}></input> </td>
            </tr>
            <tr>
                <td><label>appliedOn</label> </td>
                <td><input type="text" name="numberOfDay" onChange={(e) => this.handleChange({ appliedOn: e.target.value })}></input> </td>
            </tr>
            <tr>
                <td><label>managerComments</label> </td>
                <td><input type="text" name="managerComments" onChange={(e) => this.handleChange({ managerComments: e.target.value })}></input> </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <button type="button" onClick={this.CreateNewLeave}>Insert</button>
                  
                </td>
            </tr>
        </table></>
 
    )
  }
}