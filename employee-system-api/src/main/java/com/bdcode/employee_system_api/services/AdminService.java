package com.bdcode.employee_system_api.services;

import com.bdcode.employee_system_api.model.Admin;

public interface AdminService {
    Admin createAdmin(Admin admin);
    void loginAdmin();
    void deleteAdmin();

    Admin getAdmin();
}
