package music.com.music_db_demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import music.com.music_db_demo.modals.Genre;
import music.com.music_db_demo.services.GenreService;


@RestController
public class GenreController{

    @Autowired
    private GenreService genreService;

    @GetMapping("/genre/{id}")
    Genre getArtistById(@PathVariable("id") Long id) {
        return genreService.getGenre(id);
    }
    

}