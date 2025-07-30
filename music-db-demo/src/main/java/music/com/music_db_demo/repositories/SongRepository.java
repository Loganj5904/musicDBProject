package music.com.music_db_demo.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import music.com.music_db_demo.modals.Song;
import music.com.music_db_demo.modals.Artist;
import music.com.music_db_demo.modals.Producer;
import music.com.music_db_demo.modals.Album;
import music.com.music_db_demo.modals.Genre;
import java.util.List;



public interface SongRepository extends JpaRepository<Song, Long>{

    @Query("SELECT s FROM Song s ORDER BY s.id")
    List<Song> findAllSongs();

    @Query("SELECT song_name FROM Song")
    List<Song> getSongName();

    @Query("SELECT s FROM Song s WHERE s.song_name = :song_name")
    List<Song> findByName(@Param("song_name") String song_name);

    //@Query("SELECT s FROM Song s WHERE s.artist = :artist_name")
    //Song findByArtist(@Param("artist_name") String artist_name);
    List<Song> findByArtist(Artist artist);

    //@Query("SELECT s FROM Song s WHERE s.producer = :producer_name")
    List<Song> findByProducer(Producer producer);

    //@Query("SELECT s FROM Song s WHERE s.album = :album_name")
    List<Song> findByAlbum(Album album);

    //@Query("SELECT s FROM Song s WHERE s.genre = :genre_name")
    List<Song> findByGenre(Genre genre);

    @Query("SELECT s FROM Song s WHERE s.streams = :streams")
    List<Song> findByStreams(@Param("streams") Long streams);

    @Query("SELECT s FROM Song s WHERE s.streams < :streams")
    List<Song> findByStreamsLessThan(@Param("streams") Long streams);

    @Query("SELECT s FROM Song s WHERE s.streams <= :streams")
    List<Song> findByStreamsLessThanOrEqualTo(@Param("streams") Long streams);

    @Query("SELECT s FROM Song s WHERE s.streams >= :streams")
    List<Song> findByStreamsGreaterThanOrEqualTo(@Param("streams") Long streams);

    @Query("SELECT s FROM Song s WHERE s.streams > :streams")
    List<Song> findByStreamsGreaterThan(@Param("streams") Long streams);

    @Query("SELECT s FROM Song s WHERE s.streams != :streams")
    List<Song> findByStreamsNotEqualTo(@Param("streams") Long streams);

    List<Song> findByArtistAndAlbum(Artist artist, Album album);

    List<Song> findByArtistAndGenre(Artist artist, Genre genre);

    @Query("SELECT s FROM Song s ORDER BY s.streams")
    List<Song> sortByStreamsAsc();

    @Query("SELECT s FROM Song s ORDER BY s.streams DESC")
    List<Song> sortByStreamsDesc();

    

    //@Query("SELECT s FROM Song s ORDER BY s.song_name")
    //List<Song> sortByNameAsc();

    //@Query("SELECT s FROM Song s ORDER BY s.song_name DESC")
    //List<Song> sortByNameDesc();

    //@Query("SELECT s FROM Song s ORDER BY s.artist_name")
    //List<Song> sortByArtistAsc();

    //@Query("SELECT s FROM Song s ORDER BY s.artist_name DESC")
    //List<Song> sortByArtistDesc();

    //@Query("SELECT s FROM Song s ORDER BY s.album_name")
    //List<Song> sortByNameAsc();

    //@Query("SELECT s FROM Song s ORDER BY s.album_name DESC")
    //List<Song> sortByNameDesc();

}  
