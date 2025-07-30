package music.com.music_db_demo.modals;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Genre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String genre_name;

    //private int net_listeners;

    public Long getId(){
        return id;
    }

    public String getName(){
        return genre_name;
    }

    /* 
    public int getNetListeners(){
        return net_listeners;
    }
        */

    public void setId(Long id){
        this.id = id;
    }

    public void setName(String name){
        this.genre_name = name;
    }

    /* 
    public void setNetListeners(int listeners){
        this.net_listeners = listeners;
    }
        */
}
