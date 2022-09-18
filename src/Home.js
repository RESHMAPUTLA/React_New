import React,{Component} from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
class Home extends Component {
render() {
	
	return (
	<div>
		{}<center><h1>Welcome to Leave Management System</h1></center>
		<center><h1><Button size="lg"><Link to="/EmployeeLogin">EmployeeLogin</Link></Button></h1></center>&nbsp;&nbsp;<center><h1><Button size="lg"><Link to="/ManagerLogin">ManagerLogin</Link></Button></h1></center>
		
		
	</div>
	)
}
}

export default Home;