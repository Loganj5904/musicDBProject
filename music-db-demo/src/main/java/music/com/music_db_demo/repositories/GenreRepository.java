package main.java.music.com.music_db_demo.Repositories;
import main.java.music.com.music_db_demo.Models.Genre;
import org.springframework.data.jpa.repository.JpaRepository;



public interface GenreRepository extends JpaRepository<Genre, String>{

    
}  
