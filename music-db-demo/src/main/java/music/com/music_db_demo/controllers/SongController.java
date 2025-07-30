package music.com.music_db_demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import music.com.music_db_demo.modals.Artist;
import music.com.music_db_demo.modals.Song;
import music.com.music_db_demo.services.SongService;
import java.util.List;
import java.util.Optional;



@RestController
public class SongController{

    @Autowired
    private SongService songService;

    @GetMapping("/song")
    List<Song> getAllSongs() {
        return songService.getAllSongs();
    }
    
     
    @GetMapping("/song/id/{id}")
    Optional<Song> getSongById(@PathVariable("id") Long id) {
        return songService.getSongById(id);
    }
        
        

    @GetMapping("/song/name/{name}")
    List<Song> getSongByName(@PathVariable("name") String song_name) {
        return songService.getSongByName(song_name);
    }

    @GetMapping("/song/artist/{artist}")
    List<Song> getSongByArtist(@PathVariable("artist") String artist_name) {
        return songService.getSongByArtist(artist_name);
    }

    @GetMapping("/song/producer/{producer}")
    List<Song> getSongByProducer(@PathVariable("producer") String producer_name) {
        return songService.getSongByProducer(producer_name);
    }

    @GetMapping("/song/album/{album}")
    List<Song> getSongByAlbum(@PathVariable("album") String album_name) {
        return songService.getSongByAlbum(album_name);
    }

    @GetMapping("/song/genre/{genre}")
    List<Song> getSongByGenre(@PathVariable("genre") String genre_name) {
        return songService.getSongByGenre(genre_name);
    }

    @GetMapping("/song/streams/{streams}")
    List<Song> getSongByStreams(@PathVariable("streams") Long streams) {
        return songService.getSongByStreams(streams);
    }

    @GetMapping("/song/streams/less/{streams}")
    List<Song> getSongByStreamsLessThan(@PathVariable("streams") Long streams) {
        return songService.getSongByStreamsLessThan(streams);
    }

    @GetMapping("/song/streams/less-equal/{streams}")
    List<Song> getSongByStreamsLessThanOrEqual(@PathVariable("streams") Long streams) {
        return songService.getSongByStreamsLessThanOrEqual(streams);
    }

    @GetMapping("/song/streams/greater/{streams}")
    List<Song> getSongByStreamsGreaterThan(@PathVariable("streams") Long streams) {
        return songService.getSongByStreamsGreaterThan(streams);
    }

    @GetMapping("/song/streams/greater-equal/{streams}")
    List<Song> getSongByStreamsGreaterThanOrEqual(@PathVariable("streams") Long streams) {
        return songService.getSongByStreamsGreaterThanOrEqual(streams);
    }

    @GetMapping("/song/streams/not-equal/{streams}")
    List<Song> getSongByStreamsNotEqualTo(@PathVariable("streams") Long streams) {
        return songService.getSongByStreamsNotEqualTo(streams);
    }

    @GetMapping("/song/{artist}/{album}")
    List<Song> getSongByArtistAndAlbum(@PathVariable("artist") String artist_name, @PathVariable("album") String album_name) {
        return songService.getSongByArtistandAlbum(artist_name, album_name);
    }

    @GetMapping("/song/{artist}/{genre}")
    List<Song> getSongByArtistAndGenre(@PathVariable("artist") String artist_name, @PathVariable("genre") String genre_name) {
        return songService.getSongByArtistandGenre(artist_name, genre_name);
    }

    @GetMapping("/song/streams/asc")
    List<Song> getStreamsAsc() {
        return songService.getStreamsAsc();
    }

    @GetMapping("/song/streams/desc")
    List<Song> getStreamsDesc() {
        return songService.getStreamsDesc();
    }

    @PostMapping("/song/add/{song_name}/{artist_name}/{streams}/{album_name}/{producer_name}/{genre_name}")
    public ResponseEntity<?> postMethodName(@PathVariable("song_name") String song_name,
        @PathVariable("artist_name") String artist_name, 
        @PathVariable("streams") Long streams, 
        @PathVariable("album_name") String album_name,
        @PathVariable("producer_name") String producer_name, 
        @PathVariable("genre_name") String genre_name) {
        //TODO: process POST request
        Song addSong = songService.saveSong(song_name, artist_name, streams, album_name, producer_name, genre_name);
        ResponseEntity<?> entity = new ResponseEntity<>(addSong, HttpStatus.CREATED);
        return entity;
    }

    @PostMapping("/song/delete/id/{id}") 
    public ResponseEntity<?> postMethodName(@PathVariable("id") Long id) {
        //TODO: process POST request
        String song_name = getSongById(id).get().getName();
        songService.deleteSong(id);
        ResponseEntity<?> entity = new ResponseEntity<>(song_name + " deleted successfully!", HttpStatus.CREATED);
        return entity;
    }

     /* 
    @PostMapping("/song/delete/name/{name}") 
    public ResponseEntity<?> postMethodName(@PathVariable("name") String name) {
        //TODO: process POST request
        String song_name = getSongByName(name).getName();
        songService.deleteSong(name);
        ResponseEntity<?> entity = new ResponseEntity<>(song_name + " deleted successfully!", HttpStatus.CREATED);
        return entity;
    }
        */
        
        
    

}