package music.com.music_db_demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import music.com.music_db_demo.modals.Artist;
import music.com.music_db_demo.services.ArtistService;
import java.util.List;
import java.util.Optional;



@RestController
public class ArtistController{

    @Autowired
    private ArtistService artistService;

    
    @GetMapping("/artist")
    List<Artist> getAllArtists() {
        return artistService.getAllArtists();
    }
    
    @GetMapping("/artist/id/{id}")
    Optional<Artist> getArtistById(@PathVariable("id") Long id) {
        return artistService.getArtistById(id);
    }
        
    @GetMapping("/artist/name/{name}")
    Artist getArtistByName(@PathVariable("name") String artist_name) {
        return artistService.getArtistByName(artist_name);
    }

    @GetMapping("/artist/asc")
    List<Artist> getArtistAsc() {
        return artistService.getArtistAsc();
    }

    @GetMapping("/artist/desc")
    List<Artist> getArtistDesc() {
        return artistService.getArtistDesc();
    }

    
    @PostMapping("/artist/add/{name}")
    public ResponseEntity<?> postMethodName(@PathVariable("name") String name) {
        //TODO: process POST request
        Artist addArtist = new Artist();
        addArtist.setName(name);
        artistService.saveArtist(addArtist);
        ResponseEntity<?> entity = new ResponseEntity<>(addArtist, HttpStatus.CREATED);
        return entity;
    }

    @PostMapping("/artist/delete/id/{id}")
    public ResponseEntity<?> postMethodIdDelete(@PathVariable("id") Long id) {
        //TODO: process POST request
        String artist_name = artistService.getArtistById(id).get().getName();
        artistService.deleteArtist(id);
        ResponseEntity<?> entity = new ResponseEntity<>(artist_name + " deleted successfully", HttpStatus.CREATED);
        return entity;
    }

    @PostMapping("/artist/delete/name/{name}")
    public ResponseEntity<?> postMethodNameDelete(@PathVariable("name") String name) {
        //TODO: process POST request
        String artist_name = artistService.getArtistByName(name).getName();
        artistService.deleteArtistByName(artist_name);
        ResponseEntity<?> entity = new ResponseEntity<>(artist_name + " deleted successfully", HttpStatus.CREATED);
        return entity;
    }
        
        
    

}