package music.com.music_db_demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import music.com.music_db_demo.modals.Artist;
import java.util.List;


public interface ArtistRepository extends JpaRepository<Artist, Long>{

    @Query("SELECT a FROM Artist a ORDER BY a.id")
    List<Artist> findAllArtists();
 
    @Query("SELECT a FROM Artist a WHERE a.artist_name = :artist_name")
    Artist findByName(@Param ("artist_name") String aritst_name);

    @Query("SELECT a FROM Artist a ORDER BY a.artist_name")
    List<Artist> sortByNameAsc();

    @Query("SELECT a FROM Artist a ORDER BY a.artist_name DESC")
    List<Artist> sortByNameDesc();
    
}  