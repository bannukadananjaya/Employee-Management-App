package com.bdcode.employee_system_api.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name= "Admin")
public class AdminEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long adminId;
    private String userName;
    private String password;
}
