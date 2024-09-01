package com.bdcode.employee_system_api.model;

import lombok.Data;

@Data
public class EmployeeModel {
    private long id;
    private String firstName;
    private String lastName;
    private String emailId;
}
