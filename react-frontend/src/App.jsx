// import ListEmployeeComponent from './component/ListEmployeeComponent';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import AddEmployee from './component/AddEmployee';
import Index from './pages/Index'


function App() {
	return (
		<>
		<Router>
			<Routes>
				<Route path='/' element={<Index/>}/>
				<Route path='/Home' element={<Home/>}/>
				<Route path='/Add Employee' element={<AddEmployee/>}/>
			</Routes>
		</Router>
		</>
	);
}

export default App;
