package music.com.music_db_demo.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;
import jakarta.transaction.Transactional;
import music.com.music_db_demo.modals.Album;
import music.com.music_db_demo.modals.Artist;
import music.com.music_db_demo.modals.Label;


import music.com.music_db_demo.repositories.AlbumRepository;
import music.com.music_db_demo.repositories.ArtistRepository;
import music.com.music_db_demo.repositories.LabelRepository;


import java.util.List;


@Service
public class AlbumService {

    @Autowired
    AlbumRepository albumRepository;

    @Autowired
    ArtistRepository artistRepository;

    @Autowired
    LabelRepository labelRepository;

    private static final Logger logger = LoggerFactory.getLogger(AlbumService.class);

    @Transactional
    public List<Album> getAllAlbums() {
        return albumRepository.findAllAlbums();
    }

     
    @Transactional
    public Optional<Album> getAlbumById(Long id) {
        return albumRepository.findById(id);
    }
     
        
    @Transactional
    public Album getAlbumByName(String album_name) {
        return albumRepository.findByName(album_name);
    }
 
    @Transactional
    public List<Album> getAlbumByArtist(String artist_name) {
        Artist artist = artistRepository.findByName(artist_name);
        return albumRepository.findByArtist(artist);
    }
    
    /* *
    @Transactional
    public Album getAlbumByProducer(String producer_name) {
        return albumRepository.findByProducer(producer_name);
    }
    */
    @Transactional
    public List<Album> getAlbumByLabel(String label_name) {
        Label label = labelRepository.findByName(label_name);
        return albumRepository.findByLabel(label);
    }

    @Transactional
    public Album saveAlbum(String album_name, String artist_name, String label_name) {
        Album album = new Album();
        Artist artist = artistRepository.findByName(artist_name);
        Label label = labelRepository.findByName(label_name);
        album.setName(album_name);
        album.setArtist(artist);
        album.setLabel(label);
        return albumRepository.save(album);
    }

     @Transactional
    public void deleteAlbum(Long id) {
        albumRepository.deleteById(id);
    }

    @Transactional
    public void deleteAlbumByName(String name) {
        albumRepository.delete(albumRepository.findByName(name));
    }
        
        


}