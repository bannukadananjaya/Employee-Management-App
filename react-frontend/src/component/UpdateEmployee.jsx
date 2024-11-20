import axios from 'axios';
import React, { useState } from 'react'

const UpdateEmployee = () => {
    const [employee,setEmployee] = useState({});

    const handleChange = (e) => {
        setEmployee((prv)=>({...prv,[e.target.name]:e.target.value}));
    }

    const UpdateEmployee = () => {

        axios.post('http://localhost:8080/api/v1/employees/update',employee).then((res)=>{
            console.log(res.data);
            alert("Update Employee Successfullly");

        }).catch((err)=>{console.log(err)})
    
        

    }

  return (
    <div>
        <div>
            <h2>Update Employee</h2>
            <div>
                <label htmlFor="">First Name:</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Last Name:</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Email:</label>
                <input type="text" />
            </div>
            <div>
                <button>Update</button>
                <button>Clear</button>
            </div>
        </div>
       
    </div>
  )
}

export default UpdateEmployee