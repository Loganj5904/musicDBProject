package music.com.music_db_demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import music.com.music_db_demo.modals.Album;



public interface AlbumRepository extends JpaRepository<Album, Integer>{

    
}  