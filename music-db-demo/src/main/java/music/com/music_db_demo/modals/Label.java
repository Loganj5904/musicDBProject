package music.com.music_db_demo.modals;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Label {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String label_name;

    public Long getId(){
        return id;
    }

    public String getName(){
        return label_name;
    }

    public void setId(Long id){
        this.id = id;
    }

    public void setName(String name){
        this.label_name = name;
    }
}
