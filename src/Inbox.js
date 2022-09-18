import React, { Component } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'; 
import Table from 'react-bootstrap/Table';







export default class Inbox extends Component {
  constructor(props){
    super(props);
    
   this.state={
     leave:{}
 
}

this.ShowSpecificLeave=this.ShowSpecificLeave.bind(this);
    
}
logout(){
  sessionStorage.clear();
  alert('signout')
  window.location="/"

}

ShowSpecificLeave(e){
    
    let leaveId=this.state.leaveId;
    let employeeId=localStorage.getItem("empid");
    console.log(employeeId)
    axios.get("http://localhost:22452/api/Employee/"+employeeId)
    .then(response=>{
      this.setState({leave:response.data})

  }).catch(error=>{
      console.warn(error)
  })
  
}



//  testing grid select



    render() {
        let UserName=localStorage.getItem("empname");
        
        return (<>
        <div><h1>welcome {UserName}</h1></div>
           <div className="center">
           <div >
        <Row xs={1} md={2} className="g-1">
    
      <Col>
        <Card style={{ height:'10rem'  }}></Card> 
      </Col>
      
      <br></br>
      </Row>
      {/* NEW ROW */}
      {/* <Row xs={1} md={1} className="g-1">
      <Col className="g-2">
      
        <Card  style={{ height:'8rem'  }}>
          
          <Card.Body>
            <Card.Title>Apply Leave</Card.Title>
            <Card.Text>
              <Button href="/Addleave">Apply</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      </Row>*/}
      <Card.Body>
        
        <Card.Text><Button href="GetEmployeeDetails">Details</Button></Card.Text>
      </Card.Body>
      <Row xs={1} md={1} className="g-1">
      <Col className="g-2">
        <Card> 
          {/* belo part is to show leave details inside dashboard  */}
          
          
          <Card.Body>
        
        <Card.Text><Button href="GetEmployeeLeaveDetails">EmployeeLeaveDetails</Button></Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Text><Button href="UpdateEmployeeDetails">Update Details</Button></Card.Text>
      </Card.Body>
          <Card.Body>
            
            <Card.Text>
              
            
             <div >
               <Button className="btn btn-success btn-lg float-right"  href="/ApplyNewLeaveForEmployee">New Leave Applicaton </Button>
             </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      </Row>
          <Row xs={1} md={1} className="g-1">
      <Col className="g-2">
        
      </Col>
      </Row>
      <button onClick={this.logout} >logout </button>

            </div></div>
            </>
        )
    }
}