package music.com.music_db_demo.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import music.com.music_db_demo.modals.Song;
import music.com.music_db_demo.repositories.SongRepository;


@Service
public class SongService {

    @Autowired
    SongRepository songRepository;

    private static final Logger logger = LoggerFactory.getLogger(SongService.class);

    @Transactional
    public Song getSong(Long id){
        return songRepository.findById(id);
    }

}