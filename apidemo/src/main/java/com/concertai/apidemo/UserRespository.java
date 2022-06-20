package com.concertai.apidemo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRespository extends JpaRepository<UserEntity, String> {
    List<UserEntity> findByUsername(String name);
}
