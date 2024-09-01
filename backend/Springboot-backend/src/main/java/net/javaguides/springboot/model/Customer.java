package net.javaguides.springboot.model;

import java.security.PrivateKey;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "customer")
@TypeDefs({
    @TypeDef(name="json",typeClass=JSonType)
})
public class Customer {
    
    @Id
    @Column(name="cutomer_Id",length = 45)
    private int customerId;

    @Column(name="customer_name",length = 100,nullable = false)
    private String customerName;

    @Column(name="customer_address",length = 255)
    private String customerAddress;

    @Column(name = "contact_number",length = 10)
    private Arraylist contactNumber;

    

    @Column(name="nic")
    private String nic;

    @Column(name="active_state",columnDefinition="TINYNIT default 0")
    private boolean active;
    
    public Customer() {
    }

    public Customer(int customerId, String customerName, String customerAddress, Arraylist contactNumber, String nic,
            boolean active) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.customerAddress = customerAddress;
        this.contactNumber = contactNumber;
        this.nic = nic;
        this.active = active;
    }

    

}
