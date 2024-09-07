import axios from "axios";
const BaseUrl = "localhost:8000/api/v1/employees";
class EmployeeService{

  saveEmployee(employee){
    return axios.post(BaseUrl,employee)
  }
}

export default EmployeeService;