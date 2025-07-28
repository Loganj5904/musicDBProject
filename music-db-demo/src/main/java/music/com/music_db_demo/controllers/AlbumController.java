package music.com.music_db_demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import music.com.music_db_demo.modals.Album;
import music.com.music_db_demo.services.AlbumService;


@RestController
public class AlbumController{

    @Autowired
    private AlbumService albumService;

    @GetMapping("/album/{id}")
    Album getAlbumById(@PathVariable("id") Long id) {
        return albumService.getAlbum(id);
    }
    

}