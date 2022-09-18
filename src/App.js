import logo from './logo.svg';
import './App.css';
import Home from'./Home.js'
import EmployeeLogin from './EmployeeLogin';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import ManagerLogin from './ManagerLogin';
import Inbox from './Inbox'
import Navbar from 'react-bootstrap/Navbar'
import {Link} from 'react-router-dom'
import ManagerInbox from './ManagerInbox'
import GetManagerDetails from './GetManagerDetails'
import UpdateEmployeeDetails from'./UpdateEmployeeDetails'
import GetEmployeeLeaveDetails from'./GetEmployeeLeaveDetails'
import GetEmployeeDetails from './GetEmployeeDetails';
import ApplyNewLeaveForEmployee from './ApplyNewLeaveForEmployee';
import UpdateManagerDetails from './UpdateManagerDetails';
import ApproveDeny from './ApproveDeny';
import GetManagerLeaveDetails from './GetManagerLeaveDetails';
import GetEmployeeByManager from './GetEmployeeByManager';
import EmployeeRegistration from './EmployeeRegistration';
import ManagerRegistration from './ManagerRegistration'
function App() {
  return (

	<div>
		<center>
			<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />}></Route>
        <Route path='/EmployeeLogin' element={<EmployeeLogin />}></Route>
        <Route path='/Inbox' element={<Inbox />}></Route>
		<Route path='/GetEmployeeDetails'element={<GetEmployeeDetails />}></Route>
		<Route path='/GetEmployeeLeaveDetails' element={<GetEmployeeLeaveDetails />}></Route>
		<Route path='/ApplyNewLeaveForEmployee' element={<ApplyNewLeaveForEmployee />}></Route>
		<Route path="/UpdateEmployeeDetails" element={<UpdateEmployeeDetails />}></Route>
		<Route path="/ManagerLogin" element={<ManagerLogin/>}></Route>
		<Route path="/ManagerInbox" element={<ManagerInbox/>}></Route>
		<Route path="/GetManagerDetails" element={<GetManagerDetails/>}></Route>
		<Route path="/UpdateManagerDetails" element={<UpdateManagerDetails/>}></Route>
		<Route path="/ApproveDeny" element={<ApproveDeny />}></Route>
		<Route path="/GetManagerLeaveDetails" element={<GetManagerLeaveDetails/>}></Route>
		<Route path="/GetEmployeeByManager" element={<GetEmployeeByManager/>}></Route>
		<Route path="/EmployeeRegistration" element={<EmployeeRegistration/>}></Route>
		<Route path="/ManagerRegistration" element={<ManagerRegistration/>}></Route>
			</Routes>
			</BrowserRouter>
		</center>
	</div>
	
  );
}

export default App;