import axios from "axios";
import React, { useState, useEffect } from "react";
import UpdateEmployee from "./UpdateEmployee";

const ListEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getEmployees = async () => {
    setIsLoading(true);
    await axios
      .get("http://localhost:8080/api/v1/employees/employee")
      .then((res) => {
        const data = res.data;
        setEmployees(data);
        console.log(data);
      })
      .catch((err) => err);

    setIsLoading(false);
  };

  const DeleteEmployee = (email) => {
    axios.delete("",email).then(res=>{
      console.log(res.data);
      getEmployees();
    }).catch(err=>{console.log(err)})
  }

  const UpdateEmployee = (email) => {
    axios.put(`http://localhost:8080/api/v1/employees/delete/${email}`).then(res=>{
      console.log(res);
      getEmployees();
    }).catch(err=>console.log(err))
  }

  useEffect(() => {
    getEmployees();
  }, []);

  
  return (
    <div>
      <h2 className="text-center"> Employee List</h2>
      <div className="row">
        <table className="table table-striped table-bordered m-2">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td className="space-x-2">
                  <button className="btn btn-secondary" onClick={UpdateEmployee(employee.email)}>Edit</button>
                  <button className="btn btn-danger" onClick={DeleteEmployee(employee.email)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListEmployee;
