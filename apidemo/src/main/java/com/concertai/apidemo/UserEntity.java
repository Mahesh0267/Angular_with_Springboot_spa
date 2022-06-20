package com.concertai.apidemo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "username", nullable = false)
    private String username;
    @Column(name = "email", nullable = false)
    private String email;
    @Column(name = "isactive", nullable = false)
    private boolean isactive;
    @Column(name = "role", nullable = false)
    private String role;

    public UserEntity(String username, String email, boolean isactive, String role) {
        this.username = username;
        this.email = email;
        this.isactive = isactive;
        this.role = role;
    }

    public Integer getUserId() {
        return id;
    }

    public void setUserId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean getIsActive() {
        return isactive;
    }

    public void setIsActive(boolean isactive) {
        this.isactive = isactive;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "User[username=" + username + ",email=" + email + ",isactive=" + isactive + ",role=" + role + "]";
    }

}
