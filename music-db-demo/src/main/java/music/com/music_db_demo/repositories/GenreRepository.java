package music.com.music_db_demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import music.com.music_db_demo.modals.Artist;
import music.com.music_db_demo.modals.Genre;
import java.util.List;



public interface GenreRepository extends JpaRepository<Genre, Long>{

    @Query("SELECT g FROM Genre g ORDER BY g.id")
    List<Genre> findAllGenres();
        
    @Query("SELECT g FROM Genre g WHERE g.genre_name = :genre_name")
    Genre findByName(@Param ("genre_name") String genre_name);


/* 
    @Query("SELECT g FROM Genre g WHERE g.net_listeneres = :net_listeners")
    Genre findByListeners(@Param ("net_listeners") Integer net_listeners);
    */
    
}  
