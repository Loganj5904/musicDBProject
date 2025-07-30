package music.com.music_db_demo.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;
import jakarta.transaction.Transactional;
import music.com.music_db_demo.modals.Admin;
import music.com.music_db_demo.repositories.AdminRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class AdminService {

    @Autowired
    AdminRepository adminRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Transactional
    public Admin addAdminEntry(String username, String password) {
        Admin admin = new Admin();
        admin.setUserName(username);
        admin.setPassWord(passwordEncoder.encode(password));
        return adminRepository.save(admin);

    } 

    @Transactional
    public boolean validate(String username, String password) {
        Admin admin = adminRepository.findByUserName(username);
        if (admin == null) {
            return false;
        }
        return passwordEncoder.matches(password, admin.getPassword());
    }

    
}
