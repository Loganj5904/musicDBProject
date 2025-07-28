package main.java.music.com.music_db_demo.Repositories;
import main.java.music.com.music_db_demo.Models.Artist;
import org.springframework.data.jpa.repository.JpaRepository;



public interface ArtistRepository extends JpaRepository<Artist, Integer>{

    
}  