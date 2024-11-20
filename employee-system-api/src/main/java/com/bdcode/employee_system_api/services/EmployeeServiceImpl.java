package com.bdcode.employee_system_api.services;

import com.bdcode.employee_system_api.entity.EmployeeEntity;
import com.bdcode.employee_system_api.model.Employee;
import com.bdcode.employee_system_api.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    @Autowired
    private EmployeeRepository employeeRepository;

//    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
//        this.employeeRepository = employeeRepository;
//    }


    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee,employeeEntity);
        employeeRepository.save(employeeEntity);
        Employee savedEmp = new Employee();
        BeanUtils.copyProperties(employeeEntity,savedEmp);
        return savedEmp;
    }

    @Override
    public List<Employee> getAllEmployees() {
        List<EmployeeEntity> employeeEntities = employeeRepository.findAll();
        List<Employee> employees = new ArrayList<>();

        for(EmployeeEntity employee: employeeEntities){
            Employee employeeModel = new Employee(
                    employee.getId(),
                    employee.getFirstName(),
                    employee.getLastName(),
                    employee.getEmail()
            );
            employees.add(employeeModel);
        }

        return employees;
    }

    @Override
    public void deleteEmployee(long id) {
        Employee employee = employeeRepository.findById(id).get();
        EmployeeEntity emp = new EmployeeEntity();
        employeeRepository.delete();
    }


}
