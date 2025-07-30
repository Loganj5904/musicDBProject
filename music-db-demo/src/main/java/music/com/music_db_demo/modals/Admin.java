package music.com.music_db_demo.modals;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String user_password;

    public Long getId(){
        return id;
    }

    public String getUsername(){
        return username;
    }


    public String getPassword(){
        return user_password;
    }

    public void setUserName(String username) {
        this.username = username;
    }

    public void setPassWord(String user_password) {
        this.user_password = user_password;
    }




    
}
