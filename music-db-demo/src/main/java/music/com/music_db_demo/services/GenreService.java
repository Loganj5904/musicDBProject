package music.com.music_db_demo.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import music.com.music_db_demo.modals.Artist;
import music.com.music_db_demo.modals.Genre;
import music.com.music_db_demo.repositories.GenreRepository;
import java.util.List;
import java.util.Optional;



@Service
public class GenreService {

    @Autowired
    GenreRepository genreRepository;

    private static final Logger logger = LoggerFactory.getLogger(GenreService.class);

    @Transactional
    public List<Genre> getAllGenres() {
        return genreRepository.findAllGenres();
    }
    
    @Transactional
    public Optional<Genre> getGenreById(Long id){
        return genreRepository.findById(id);
    }
    

    @Transactional
    public Genre getGenreByName(String genre_name){
        return genreRepository.findByName(genre_name);
    }



    @Transactional
    public Genre saveGenre(Genre genre) {
        return genreRepository.save(genre);
    }

    @Transactional
    public void deleteGenre(Long id) {
        genreRepository.deleteById(id);
    }

    @Transactional
    public void deleteGenreByName(String name) {
        genreRepository.delete(genreRepository.findByName(name));
    }

    /* 
    @Transactional
    public Genre getGenreByListeners(Integer net_listeners){
        return genreRepository.findByListeners(net_listeners);
    }
        */
        


}