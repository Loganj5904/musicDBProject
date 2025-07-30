package music.com.music_db_demo.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import music.com.music_db_demo.modals.Song;
import music.com.music_db_demo.modals.Artist;
import music.com.music_db_demo.modals.Producer;
import music.com.music_db_demo.modals.Album;
import music.com.music_db_demo.modals.Genre;

import music.com.music_db_demo.repositories.SongRepository;
import music.com.music_db_demo.repositories.AlbumRepository;
import music.com.music_db_demo.repositories.ArtistRepository;
import music.com.music_db_demo.repositories.GenreRepository;
import music.com.music_db_demo.repositories.ProducerRepository;
import java.util.List;
import java.util.Optional;




@Service
public class SongService {

    @Autowired
    SongRepository songRepository;

    @Autowired
    ArtistRepository artistRepository;

    @Autowired
    ProducerRepository producerRepository;

    @Autowired
    AlbumRepository albumRepository;

    @Autowired
    GenreRepository genreRepository;

    private static final Logger logger = LoggerFactory.getLogger(SongService.class);
    

    @Transactional
    public List<Song> getAllSongs() {
        return songRepository.findAllSongs();
    }
     
    @Transactional
    public Optional<Song> getSongById(Long id){
        return songRepository.findById(id);
    }
        

    @Transactional
    public List<Song> getSongByName(String song_name){
        return songRepository.findByName(song_name);
    }

    @Transactional
    public List<Song> getSongByArtist(String artist_name){
        Artist artist = artistRepository.findByName(artist_name);
        return songRepository.findByArtist(artist);
    }

    @Transactional
    public List<Song> getSongByProducer(String producer_name){
        Producer producer = producerRepository.findByName(producer_name);
        return songRepository.findByProducer(producer);
    }

    @Transactional
    public List<Song> getSongByAlbum(String album_name){
        Album album = albumRepository.findByName(album_name);
        return songRepository.findByAlbum(album);
    }

    @Transactional
    public List<Song> getSongByGenre(String genre_name){
        Genre genre = genreRepository.findByName(genre_name);
        return songRepository.findByGenre(genre);
    }

    @Transactional
    public List<Song> getSongByStreams(Long streams){
        return songRepository.findByStreams(streams);
    }

    @Transactional
    public List<Song> getSongByStreamsLessThan(Long streams){
        return songRepository.findByStreamsLessThan(streams);
    }

    @Transactional
    public List<Song> getSongByStreamsLessThanOrEqual(Long streams){
        return songRepository.findByStreamsLessThanOrEqualTo(streams);
    }

    @Transactional
    public List<Song> getSongByStreamsGreaterThan(Long streams){
        return songRepository.findByStreamsGreaterThan(streams);
    }

    @Transactional
    public List<Song> getSongByStreamsGreaterThanOrEqual(Long streams){
        return songRepository.findByStreamsGreaterThanOrEqualTo(streams);
    }

    @Transactional
    public List<Song> getSongByStreamsNotEqualTo(Long streams){
        return songRepository.findByStreamsNotEqualTo(streams);
    }

    @Transactional
    public List<Song> getSongByArtistandAlbum(String artist_name, String album_name) {
        Artist artist = artistRepository.findByName(artist_name);
        Album album = albumRepository.findByName(album_name);
        return songRepository.findByArtistAndAlbum(artist, album);
    }

    @Transactional
    public List<Song> getSongByArtistandGenre(String artist_name, String genre_name) {
        Artist artist = artistRepository.findByName(artist_name);
        Genre genre = genreRepository.findByName(genre_name);
        return songRepository.findByArtistAndGenre(artist, genre);
    }

    @Transactional
    public List<Song> getStreamsAsc(){
        return songRepository.sortByStreamsAsc();
    }

    @Transactional
    public List<Song> getStreamsDesc(){
        return songRepository.sortByStreamsDesc();
    }

     
    @Transactional
    public Song saveSong(String song_name, String artist_name, Long streams, String album_name, String producer_name, String genre_name) {
        Song song = new Song();
        Artist artist = artistRepository.findByName(artist_name);
        Album album = albumRepository.findByName(album_name);
        Producer producer = producerRepository.findByName(producer_name);
        Genre genre = genreRepository.findByName(genre_name);
        song.setName(song_name);
        song.setArtist(artist);
        song.setAlbum(album);
        song.setProducer(producer);
        song.setGenre(genre);
        song.setStreams(streams);
        return songRepository.save(song);
    }

    @Transactional
    public void deleteSong(Long id) {
        songRepository.deleteById(id);
    }

    /* 
    @Transactional
    public void deleteSongByName(String name) {
        songRepository.delete(songRepository.findByName(name));
    }
        */

    
        

    

}