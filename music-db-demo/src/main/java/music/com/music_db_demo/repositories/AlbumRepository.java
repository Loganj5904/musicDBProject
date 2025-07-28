package main.java.music.com.music_db_demo.Repositories;
import main.java.music.com.music_db_demo.Models.Album;
import org.springframework.data.jpa.repository.JpaRepository;



public interface AlbumRepository extends JpaRepository<Album, Integer>{

    
}  