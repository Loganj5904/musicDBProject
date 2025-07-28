package music.com.music_db_demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import music.com.music_db_demo.modals.Artist;
import music.com.music_db_demo.services.ArtistService;


@RestController
public class ArtistController{

    @Autowired
    private ArtistService artistService;

    @GetMapping("/artist/{id}")
    Artist getArtistById(@PathVariable("id") Long id) {
        return artistService.getArtist(id);
    }
    

}