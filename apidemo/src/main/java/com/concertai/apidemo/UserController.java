package com.concertai.apidemo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    UserRespository userRespository;

    @GetMapping("/get-all-users")
    public List<UserEntity> getAllUser() {
        List<UserEntity> allUserlist = userRespository.findAll();
        return allUserlist;
    }

    @GetMapping("/get-user/{name}")
    public List<UserEntity> getUserbyname(@PathVariable(value = "username") String username) {
        List<UserEntity> userEntity = userRespository.findByUsername(username);
        return userEntity;
    }

    @PostMapping("/create-User")
    public UserEntity createUser(@RequestBody UserEntity userEntity) {

        UserEntity savedUser = userRespository.save(userEntity);

        return savedUser;
    }
}
