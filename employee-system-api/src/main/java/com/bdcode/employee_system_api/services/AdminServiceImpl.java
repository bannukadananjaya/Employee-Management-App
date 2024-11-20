package com.bdcode.employee_system_api.services;

import com.bdcode.employee_system_api.entity.AdminEntity;
import com.bdcode.employee_system_api.model.Admin;
import com.bdcode.employee_system_api.repository.AdminRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class AdminServiceImpl implements AdminService{
    @Autowired
    private AdminRepository adminRepository;

    @Override
    public Admin createAdmin(Admin admin){
        AdminEntity adminEntity = new AdminEntity();
        BeanUtils.copyProperties(admin,adminEntity);
        adminRepository.save(adminEntity);
        return admin;
    }
    @Override
    public void loginAdmin() {

    }

    @Override
    public void deleteAdmin() {

    }

    @Override
    public Admin getAdmin() {

        return null;
    }
}
