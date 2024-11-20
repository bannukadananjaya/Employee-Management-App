import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex w-full justify-center gap-5 m-2'>
        <Link to='/employee'  className='btn btn-primary'>Employees</Link>
        <Link to='/addemployee'  className='btn btn-primary'>Add Employee</Link>        
    {/* <EmployeeList/> */}
    </div>
  )
}

export default Navbar