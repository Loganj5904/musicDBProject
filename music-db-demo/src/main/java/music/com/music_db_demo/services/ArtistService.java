package music.com.music_db_demo.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import music.com.music_db_demo.modals.Artist;
import music.com.music_db_demo.repositories.ArtistRepository;


@Service
public class ArtistService {

    @Autowired
    ArtistRepository artistRepository;

    private static final Logger logger = LoggerFactory.getLogger(ArtistService.class);

    @Transactional
    public Artist getArtist(Long id){
        return artistRepository.findById(id);
    }

}