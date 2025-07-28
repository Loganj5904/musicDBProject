package music.com.music_db_demo.modals;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Artist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String artist_name;

    public Long getId(){
        return id;
    }

    public String getName(){
        return artist_name;
    }

    public void setId(Long id){
        this.id = id;
    }

    public void setName(String name){
        this.artist_name = name;
    }
    
}
