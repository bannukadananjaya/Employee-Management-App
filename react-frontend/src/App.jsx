// import ListEmployeeComponent from './component/ListEmployeeComponent';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import AddEmployee from './component/AddEmployee';
import Index from './pages/Index'
import Header from './component/Header';
import Navbar from './component/Navbar';
import ListEmployee from './component/ListEmployeeComponent';
import UpdateEmployee from './component/UpdateEmployee';


function App() {
	return (
		<>
		<Router>
			<Header/>
			<Navbar/>
			<Routes>
				<Route path='/' element={<Index/>}/>
				<Route path='/employee' element={<ListEmployee/>}/>
				<Route path='/addemployee' element={<AddEmployee/>}/>
				<Route path='/updateemployee' element={<UpdateEmployee/>}/>
			</Routes>
		</Router>
		</>
	);
}

export default App;
