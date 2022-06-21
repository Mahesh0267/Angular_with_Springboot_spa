package com.concertai.apidemo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    UserRespository userRespository;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/get-all-users")
    public List<UserEntity> getAllUser() {
        List<UserEntity> allUserlist = userRespository.findAll();
        return allUserlist;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/get-user/{username}")
    public List<UserEntity> getUserbyname(@PathVariable(value = "username") String username) {
        List<UserEntity> userEntity = userRespository.findByUsername(username);
        return userEntity;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/create-user")
    public UserEntity createUser(@RequestBody UserEntity userEntity) {

        UserEntity savedUser = userRespository.save(userEntity);

        return savedUser;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/update-users/{id}")
    public ResponseEntity<UserEntity> updateUser(@PathVariable(value = "id") Integer userId,
            @RequestBody UserEntity userDetails) {
        UserEntity user = userRespository.findById(userId).get();
        user.setEmail(userDetails.getEmail());
        user.setUsername(userDetails.getUsername());
        // user.setRole(userDetails.getRole());
        final UserEntity updatedUser = userRespository.save(user);
        return ResponseEntity.ok(updatedUser);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/delete-user/{id}")
    public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Integer userId) {
        UserEntity user = userRespository.findById(userId).get();
        userRespository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("isactive", Boolean.TRUE);
        return response;
    }
}
