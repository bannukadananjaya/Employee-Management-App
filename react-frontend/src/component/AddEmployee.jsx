import React, { useRef, useState } from "react";
import axios from "axios";

function AddEmployee() {
  const ref = useRef();
  const [employee, setEmployee] = useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    // EmployeeService.saveEmployee(employee);
    axios.post('http://localhost:8080/api/v1/employees/employee',employee)
      .then((response) => {
        console.log(response.data);
        alert("Add employee Successfully");
        setEmployee({firstName: '', lastName: '', email: ''});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(employee);
  return (
    <div className="flex flex-col max-w-2xl mx-auto shadow border-b">
      <div className="px-4 py-4">
        <div className="flex justify-center font-thin text-2xl tracking-wider">
          <p>Add New Employee</p>
        </div>
        <div className="h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            ref={ref}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border px-2 py-2"
          ></input>
        </div>
        <div className="h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border px-2 py-2"
          ></input>
        </div>
        <div className="h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border px-2 py-2"
          ></input>
        </div>
        <div className=" h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveEmployee}
            className="rounded font-semibold text-white bg-green-400 hover:bg-green-700 px-6 py-2"
          >
            Save
          </button>
          <button 
            onClick={()=> {setEmployee({firstName: '', lastName: '', email: ''});ref.current.focus(); }}
            className="rounded font-semibold text-white bg-red-400 hover:bg-red-700 px-6 py-2">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
