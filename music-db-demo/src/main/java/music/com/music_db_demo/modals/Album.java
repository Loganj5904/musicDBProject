package music.com.music_db_demo.modals;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Album {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String album_name;

    //@ManyToOne
    //@JoinColumn(name = "producer_id", nullable = false)
    //private Producer producer;

    @ManyToOne
    @JoinColumn(name = "artist_id", nullable = false)
    private Artist artist;

    @ManyToOne
    @JoinColumn(name = "label_id", nullable = false)
    private Label label;

    public Long getId(){
        return id;
    }

    public String getName(){
        return album_name;
    }

    /* 
    public Producer getProducer(){
        return producer;
    }
        */

    public Artist getArtist(){
        return artist;
    }

    public Label getlabel(){
        return label;
    }


    public void setId(Long id){
        this.id = id;
    }

    public void setName(String name){
        this.album_name = name;
    }

/* 
    public void setProducer(Producer producer){
        this.producer = producer;
    }
      */  

    public void setArtist(Artist artist){
        this.artist = artist;
    }
        
    public void setLabel(Label label){
        this.label = label;
    }
    

}
