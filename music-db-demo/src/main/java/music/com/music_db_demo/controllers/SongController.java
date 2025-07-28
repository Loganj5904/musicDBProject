package music.com.music_db_demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import music.com.music_db_demo.modals.Song;
import music.com.music_db_demo.services.SongService;


@RestController
public class SongController{

    @Autowired
    private SongService songService;

    @GetMapping("/song/{id}")
    Song getSongById(@PathVariable("id") Long id) {
        System.out.println("made it here");
        return songService.getSong(id);
    }
    

}