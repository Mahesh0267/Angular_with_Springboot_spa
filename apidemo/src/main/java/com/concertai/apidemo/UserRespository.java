package com.concertai.apidemo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRespository extends JpaRepository<UserEntity, Integer> {
    List<UserEntity> findByUsername(String name);
}
