package music.com.music_db_demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import music.com.music_db_demo.modals.Album;
import music.com.music_db_demo.modals.Artist;
import music.com.music_db_demo.services.AlbumService;
import java.util.List;
import java.util.Optional;


@RestController
public class AlbumController{

    @Autowired
    private AlbumService albumService;

    @GetMapping("/album")
    List<Album> getAllAlbums() {
        return albumService.getAllAlbums();
    }

    
    @GetMapping("/album/id/{id}")
    Optional<Album> getAlbumById(@PathVariable("id") Long id) {
        return albumService.getAlbumById(id);
    }
        
        

    @GetMapping("/album/name/{name}")
    Album getAlbumByName(@PathVariable("name") String album_name) {
        return albumService.getAlbumByName(album_name);
    }
    
    @GetMapping("/album/artist/{artist}")
    List<Album> getAlbumByArtist(@PathVariable("artist") String artist_name) {
        return albumService.getAlbumByArtist(artist_name);
    }
    
    /* 
    @GetMapping("/album/producer/{producer}")
    Album getAlbumByProducer(@PathVariable("producer") String producer_name) {
        return albumService.getAlbumByProducer(producer_name);
    }
        */
    
    @GetMapping("/album/label/{label}")
    List<Album> getAlbumByLabel(@PathVariable("label") String label_name) {
        return albumService.getAlbumByLabel(label_name);
    }

    @PostMapping("/album/add/{album_name}/{artist_name}/{label_name}")
    public ResponseEntity<?> postMethodName(@PathVariable("album_name") String album_name, 
        @PathVariable("artist_name") String artist_name, @PathVariable("label_name") String label_name) {
        //TODO: process POST request
        Album addAlbum = albumService.saveAlbum(album_name, artist_name, label_name);
        ResponseEntity<?> entity = new ResponseEntity<>(addAlbum, HttpStatus.CREATED);
        return entity;
    }

    @PostMapping("/album/delete/id/{id}")
    public ResponseEntity<?> postMethodIdDelete(@PathVariable("id") Long id) {
        //TODO: process POST request
        String album_name = albumService.getAlbumById(id).get().getName();
        albumService.deleteAlbum(id);
        ResponseEntity<?> entity = new ResponseEntity<>(album_name + " deleted successfully", HttpStatus.CREATED);
        return entity;
    }

    @PostMapping("/album/delete/name/{name}")
    public ResponseEntity<?> postMethodNameDelete(@PathVariable("name") String name) {
        //TODO: process POST request
        String album_name = albumService.getAlbumByName(name).getName();
        albumService.deleteAlbumByName(album_name);
        ResponseEntity<?> entity = new ResponseEntity<>(album_name + " deleted successfully", HttpStatus.CREATED);
        return entity;
    }
        
        
    

}