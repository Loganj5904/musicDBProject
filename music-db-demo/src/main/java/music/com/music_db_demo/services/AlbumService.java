package music.com.music_db_demo.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import music.com.music_db_demo.modals.Album;
import music.com.music_db_demo.repositories.AlbumRepository;


@Service
public class AlbumService {

    @Autowired
    AlbumRepository albumRepository;

    private static final Logger logger = LoggerFactory.getLogger(AlbumService.class);

    @Transactional
    public Album getAlbum(Long id){
        return albumRepository.findById(id);
    }

}