package music.com.music_db_demo.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import music.com.music_db_demo.modals.Genre;



public interface GenreRepository extends JpaRepository<Genre, Integer>{

    
}  
