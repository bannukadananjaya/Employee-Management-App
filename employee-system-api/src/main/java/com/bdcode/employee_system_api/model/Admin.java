package com.bdcode.employee_system_api.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class Admin {
    private Long adminId;
    private String userName;
    private String password;

}
