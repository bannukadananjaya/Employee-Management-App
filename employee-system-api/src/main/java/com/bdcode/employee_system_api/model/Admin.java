package com.bdcode.employee_system_api.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class Admin {
    private String id;
    private String userName;
    private String password;

}
