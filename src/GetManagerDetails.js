import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
export default class GetManagerDetails extends Component {
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
        this.GetManager=this.GetManager.bind(this);
    }
    GetManager(e){
    
        let managerId=localStorage.getItem("managerid");
        alert(managerId)
        axios.get("http://localhost:22452/api/Manager/"+managerId)
        .then(response=>{
          this.setState({
            managerid: response.data.managerId,
            managerName: response.data.managerName,
            managerEmail: response.data.managerEmail,
            managerPassword: response.data.managerPassword,
            managerMobileNumber: response.data.managerMobileNumber,
            })
    
      }).catch(error=>{
          console.warn(error)
      })
      
    }
    componentDidMount()
    {
      this.GetManager();
    }


  render() {
     
    const{managerid}=this.state
  const {managerName}=this.state;
  const {managerEmail}=this.state;
  const {managerPassword}=this.state;
  const {managerMobileNumber}=this.state;
  
    return (
      <><div>ShowAllDetails Of Manager</div><div>
            <table className='t' border="1" align='center'>
                <tr>
                <th>ManagerId</th>
                <th>ManagerName</th>
                <th>ManagerEmail</th>
                <th>ManagerPassword</th>
                <th>ManagerMobileNumber</th>
                
                </tr>
                <tr>
                  <td>{managerid}</td>
                  <td>{managerName}</td>
                  <td>{managerEmail}</td>
                  <td>{managerPassword}</td>
                  <td>{managerMobileNumber}</td>
                 
                  
              </tr>
                
            </table>
            <Link to="/ManagerInbox">DashBoard</Link>
        </div></>
    )
  }
}
