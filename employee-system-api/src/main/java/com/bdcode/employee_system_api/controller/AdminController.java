package com.bdcode.employee_system_api.controller;

import com.bdcode.employee_system_api.model.Admin;
import com.bdcode.employee_system_api.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/admin/")
public class AdminController {
    @Autowired
    private AdminService adminService;
    @PostMapping("admin")
    public Admin createAdmin(@RequestBody Admin admin){
        return adminService.createAdmin(admin);
    }

    @GetMapping("admin")
    public Admin getAdmin(){
        return adminService.getAdmin();
    }


}
