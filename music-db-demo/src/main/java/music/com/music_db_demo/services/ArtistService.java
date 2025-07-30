package music.com.music_db_demo.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import music.com.music_db_demo.modals.Artist;
import music.com.music_db_demo.repositories.ArtistRepository;
import java.util.List;
import java.util.Optional;


@Service
public class ArtistService {

    @Autowired
    ArtistRepository artistRepository;

    private static final Logger logger = LoggerFactory.getLogger(ArtistService.class);

    @Transactional
    public List<Artist> getAllArtists() {
        return artistRepository.findAllArtists();
    }

    @Transactional
    public Optional<Artist> getArtistById(Long id){
        return artistRepository.findById(id);
    }
    
        
    @Transactional
    public Artist getArtistByName(String artist_name){
        return artistRepository.findByName(artist_name);
    }

    @Transactional
    public List<Artist> getArtistAsc(){
        return artistRepository.sortByNameAsc();
    }

    @Transactional
    public List<Artist> getArtistDesc(){
        return artistRepository.sortByNameDesc();
    }

    @Transactional
    public Artist saveArtist(Artist artist) {
        return artistRepository.save(artist);
    }

    @Transactional
    public void deleteArtist(Long id) {
        artistRepository.deleteById(id);
    }

    @Transactional
    public void deleteArtistByName(String name) {
        artistRepository.delete(artistRepository.findByName(name));
    }
        

    
    

}