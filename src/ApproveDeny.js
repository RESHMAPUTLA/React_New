import React, { Component } from 'react'
import axios from 'axios';
import { Await } from 'react-router';
export default class ApproveDeny extends Component{
    constructor()
    {
        super();
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
    managerComments: '',
    i:true

        }
        this.GetManager=this.GetManager.bind(this);
        this.UpdateApproveDeny=this.UpdateApproveDeny.bind(this);
    }
    
    UpdateApproveDeny(e)
    {
        
        let id=this.state.leaveId;
        alert(id)
        let url="http://localhost:22452/api/Leave/Approve_Deny/"+id;
        axios.put(url,{
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
            alert("data Updated");
        }).catch(error=>{
            alert(error);
        })
   // window.location="/Inbox";
    }
    GetManager(e){
    
        let leaveId=this.state.leaveId;
        alert(leaveId)
        axios.get("http://localhost:22452/api/Leave/"+leaveId)
        .then(response=>{
          this.setState({
            leaveId:response.data.leaveId,
            employeeId: response.data.employeeId,
             managerId: response.data.managerId,
             numberOfDay: response.data.numberOfDay,
             strartDate: response.data.strartDate,
             endDate: response.data.endDate,
             leaveType: response.data.leaveType,
             status: response.data.status,
             reason: response.data.reason,
             appliedOn: response.data.appliedOn,
             managerComments: response.data.managerComments
            })
    
      }).catch(error=>{
          console.warn(error)
      })
      
    }
    handleChange(ChangeObject){
        this.setState(ChangeObject);
    
    }
   
render(){
   let i=this.state.i; 
    
    return(
        
            <div >
            <tr>
                <td><label> LeaveId</label> </td>
                <td><input type="number" name="leaveId" value={this.state.leaveId}onChange={(e) => this.handleChange({leaveId: e.target.value }) }></input> </td>
            </tr>
            <tr>
                <td>
                    <button type="button" onClick={this.GetManager}> searchBox </button>    
                </td>
            </tr>
            
      
          
           <tr>
                <td><label> LeaveId</label> </td>
                <td><input readonly type="number" name="leaveId" value={this.state.leaveId}onChange={(e) => this.handleChange({leaveId: e.target.value }) }></input> </td>
            </tr>
            <tr>
                <td><label> EmployeeId</label> </td>
                <td><input readonly type="number" name="employeeId" value={this.state.employeeId}onChange={(e) => this.handleChange({ employeeId: e.target.value })}></input> </td>
            </tr>
            <tr>
                <td><label>Manager ID</label> </td>
                <td><input readonly type="number" name="managerId" value={this.state.managerId} onChange={(e) => this.handleChange({ managerId: e.target.value })}></input> </td>
            </tr>
            <tr>
                <td><label>numberOfDay</label> </td>
                <td><input readonly type="number" name="numberOfDay" value={this.state.numberOfDay}onChange={(e) => this.handleChange({ numberOfDay: e.target.value })}></input> </td>
            </tr>
            <tr>
                <td><label>startDate</label> </td>
                <td><input readonly type="text" name="strartDate" value={this.state.strartDate}onChange={(e) => this.handleChange({ strartDate: e.target.value })}></input> </td>
            </tr>
            <tr>
                <td><label>endDate</label> </td>
                <td><input readonly type="text" name="endDate" value={this.state.endDate}onChange={(e) => this.handleChange({endDate: e.target.value })}></input> </td>
            </tr>
            <tr>
                <td><label> leaveType</label> </td>
                <td><input readonly type="text" name=" leaveType" value={this.state.leaveId} onChange={(e) => this.handleChange({  leaveType: e.target.value })}></input> </td>
            </tr>
            <tr>
                <td><label>status</label> </td>
                <td><input type="text" name="status" value={this.state.status}onChange={(e) => this.handleChange({ status: e.target.value })}></input> </td>
            </tr>
            <tr>
                <td><label>reason</label> </td>
                <td><input readonly type="text" name="reason" value={this.state.reason} onChange={(e) => this.handleChange({ reason: e.target.value })}></input> </td>
            </tr>
            <tr>
                <td><label>appliedOn</label> </td>
                <td><input readonly type="text" name="numberOfDay" value={this.state.appliedOn}onChange={(e) => this.handleChange({ appliedOn: e.target.value })}></input> </td>
            </tr>
            <tr>
                <td><label>managerComments</label> </td>
                <td><input type="text" name="managerComments" value={this.state.managerComments} onChange={(e) => this.handleChange({ managerComments: e.target.value })}></input> </td>
            </tr>
        <tr>
        <td>
                <button type="button" onClick={this.UpdateApproveDeny}>update</button>
              
            </td></tr>
     </div>
    
    )
}
}