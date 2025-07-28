package music.com.music_db_demo.modals;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Song {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String song_name;

    private int net_listeners;

    @ManyToOne
    @JoinColumn(name = "album_id", nullable = false)
    private Album album;

    @ManyToOne
    @JoinColumn(name = "producer_id", nullable = false)
    private Producer producer;

    @ManyToOne
    @JoinColumn(name = "artist_id", nullable = false)
    private Artist artist;

    @ManyToOne
    @JoinColumn(name = "genre_id", nullable = false)
    private Genre genre;

    public Long getId(){
        return id;
    }

    public String getName(){
        return song_name;
    }

    public int getNetListeners(){
        return net_listeners;
    }

    public Album getAlbum(){
        return album;
    }

    public Producer getProducer(){
        return producer;
    }

    public Artist getArtist(){
        return artist;
    }

    public Genre getGenre(){
        return genre;
    }

    public void setId(Long id){
        this.id = id;
    }

    public void setName(String name){
        this.song_name = name;
    }

    public void setNetListeners(int listeners){
        this.net_listeners = listeners;
    }

    public void setAlbum(Album album){
        this.album = album;
    }

    public void setProducer(Producer producer){
        this.producer = producer;
    }

    public void setArtist(Artist artist){
        this.artist = artist;
    }

    public void setGenre(Genre genre){
        this.genre = genre;
    }



}
