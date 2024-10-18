import React from 'react'
// import { useNavigate } from 'react-router-dom'
import Navbar from '../component/Navbar'
import EmployeeList from '../services/EmployeeService';

function Home() {
    // const navigate = useNavigate();

  return (
    <div>
        <Navbar/>
        <a href="/AddEmployee" className='btn btn-primary'>Add Employee</a>
        {/* <EmployeeList/> */}
    </div>
  )
}

export default Home