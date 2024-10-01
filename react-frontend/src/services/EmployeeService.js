import axios from "axios";
const BaseUrl = "http://localhost:8080/api/v1/employees/employee";
// class EmployeeService{

//   saveEmployee(employee){
//     return axios.post(BaseUrl,employee)
//   }
// }

// export default EmployeeService;

const saveEmployee=(employee) =>{
  return axios.post(BaseUrl,employee)
}

export default {
  saveEmployee,
};