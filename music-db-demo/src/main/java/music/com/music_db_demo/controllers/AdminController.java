package music.com.music_db_demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import music.com.music_db_demo.modals.Admin;
import music.com.music_db_demo.services.AdminService;

@RestController
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/register/{username}/{password}")
    public ResponseEntity<?> postRegister(@PathVariable("username") String username, 
        @PathVariable("password") String password) {
        //TODO: process POST request
        Admin admin = adminService.addAdminEntry(username, password);
        ResponseEntity<?> entity = new ResponseEntity<>(admin.getUsername() + " : registered Successfully", HttpStatus.CREATED);
        return entity;
    }

    @PostMapping("/login/{username}/{password}")
    public ResponseEntity<?> postLogin(@PathVariable("username") String username, 
        @PathVariable ("password") String password) {
        //TODO: process POST request
        if (adminService.validate(username, password)) {
            return ResponseEntity.ok("Login Successful!");
        } else {
           return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login Failed: Incorrect Username or Password"); 
        }
    }
    
}
