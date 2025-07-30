package music.com.music_db_demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import music.com.music_db_demo.modals.Artist;
import music.com.music_db_demo.modals.Genre;
import music.com.music_db_demo.services.GenreService;
import java.util.List;
import java.util.Optional;



@RestController
public class GenreController{

    @Autowired
    private GenreService genreService;

    @GetMapping("/genre")
    List<Genre> getAllGenres() {
        return genreService.getAllGenres();
    }

    
    @GetMapping("/genre/id/{id}")
    Optional<Genre> getArtistById(@PathVariable("id") Long id) {
        return genreService.getGenreById(id);
    }
       

    @GetMapping("/genre/name/{name}")
    Genre getArtistByName(@PathVariable("name") String genre_name) {
        return genreService.getGenreByName(genre_name);
    }

    

    @GetMapping("/genre/attribute/id")
    List<Long> projectOnColId() {
        return genreService.projectOnColId();
    }

    @GetMapping("/genre/attribute/name")
    List<String> projectOnColName() {
        return genreService.projectOnColName();
    }

    /* 
    @GetMapping("/genre/{listeners}")
    Genre getArtistByListeners(@PathVariable("listeners") Integer net_listeners) {
        return genreService.getGenreByListeners(net_listeners);
    }
        */

    @PostMapping("/genre/add/{name}")
    public ResponseEntity<?> postMethodName(@PathVariable("name") String name) {
        //TODO: process POST request
        Genre addGenre = new Genre();
        addGenre.setName(name);
        genreService.saveGenre(addGenre);
        ResponseEntity<?> entity = new ResponseEntity<>(addGenre, HttpStatus.CREATED);
        return entity;
    }

    @PostMapping("/genre/delete/id/{id}")
    public ResponseEntity<?> postMethodIdDelete(@PathVariable("id") Long id) {
        //TODO: process POST request
        String genre_name = genreService.getGenreById(id).get().getName();
        genreService.deleteGenre(id);
        ResponseEntity<?> entity = new ResponseEntity<>(genre_name + " deleted successfully", HttpStatus.CREATED);
        return entity;
    }

    @PostMapping("/genre/delete/name/{name}")
    public ResponseEntity<?> postMethodNameDelete(@PathVariable("name") String name) {
        //TODO: process POST request
        String genre_name = genreService.getGenreByName(name).getName();
        genreService.deleteGenreByName(genre_name);
        ResponseEntity<?> entity = new ResponseEntity<>(genre_name + " deleted successfully", HttpStatus.CREATED);
        return entity;
    }
    

}