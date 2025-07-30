package music.com.music_db_demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import music.com.music_db_demo.modals.Album;
import music.com.music_db_demo.modals.Artist;
import music.com.music_db_demo.modals.Label;


import java.util.List;



public interface AlbumRepository extends JpaRepository<Album, Long>{

    @Query("SELECT a FROM Album a ORDER BY a.id")
    List<Album> findAllAlbums();

    @Query("SELECT a FROM Album a WHERE a.album_name = :album_name")
    Album findByName(@Param ("album_name") String album_name);
    

    //@Query("SELECT a FROM Album a WHERE a.artist = :artist_name")
    List<Album> findByArtist(Artist artist);

    //@Query("SELECT a FROM Album a WHERE a.producer = :producer_name")
    //Album findByProducer(@Param ("producer_name") String producer_name);

    //@Query("SELECT a FROM Album a WHERE a.label = :label_name")
    List<Album> findByLabel(Label label);
    

    
}  