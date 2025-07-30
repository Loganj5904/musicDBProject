package music.com.music_db_demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import music.com.music_db_demo.modals.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long>{

    Admin findByUserName(String username);
} 
    

