package music.com.music_db_demo.controllers;

import music.com.music_db_demo.services.ArtistService;
import music.com.music_db_demo.services.SongService;
import music.com.music_db_demo.services.AlbumService;
import music.com.music_db_demo.services.ProducerService;
import music.com.music_db_demo.services.GenreService;
import music.com.music_db_demo.services.LabelService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("/api/search")
public class SmartSearchController {

    @Autowired private ArtistService artistService;
    @Autowired private SongService songService;
    @Autowired private AlbumService albumService;
    @Autowired private ProducerService producerService;
    @Autowired private GenreService genreService;
    @Autowired private LabelService labelService;

    @GetMapping
    public ResponseEntity<?> smartSearch(@RequestParam("query") String query) {
        Map<String, Object> results = new HashMap<>();

        // Try to match as artist
        var artist = artistService.getArtistByName(query);
        if (artist != null) {
            results.put("artist", artist);
            results.put("songs_by_artist", songService.getSongByArtist(query));
            results.put("albums_by_artist", albumService.getAlbumByArtist(query));
        }

        // Try song
        var songs = songService.getSongByName(query);
        if (!songs.isEmpty()) {
            results.put("song", songs);
        }

        // Try producer
        var producer = producerService.getProducerByName(query);
        if (producer != null) {
            results.put("producer", producer);
            results.put("songs_by_producer", songService.getSongByProducer(query));
        }

        // Genre
        var genre = genreService.getGenreByName(query);
        if (genre != null) {
            results.put("genre", genre);
            results.put("songs_by_genre", songService.getSongByGenre(query));
        }

        // Label
        var label = labelService.getLabelByName(query);
        if (label != null) {
            results.put("label", label);
            results.put("albums_by_label", albumService.getAlbumByLabel(query));
        }

        if (results.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No match found");
        }

        return ResponseEntity.ok(results);
    }
}
