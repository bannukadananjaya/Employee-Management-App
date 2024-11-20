package com.bdcode.employee_system_api.services;
import com.bdcode.employee_system_api.entity.EmployeeEntity;
import com.bdcode.employee_system_api.model.Employee;

import java.util.List;

public interface EmployeeService {
    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployees();


    void deleteEmployee(long id);
}
