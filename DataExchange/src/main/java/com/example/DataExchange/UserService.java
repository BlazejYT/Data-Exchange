package com.example.DataExchange;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    User getUser(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new RuntimeException("Nie znaleziono użytkownika o id: " + id));
    }

    void addUser(User user){
        userRepository.save(new User(
                user.getEmail(),
                user.getPassword(),
                user.getGender(),
                user.getBirthDate(),
                user.getDepartment()
                )
        );
    }
}
