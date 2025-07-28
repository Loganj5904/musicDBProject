package music.com.music_db_demo.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import music.com.music_db_demo.modals.Song;



public interface SongRepository extends JpaRepository<Song, Integer>{

    Song findById(Long id);
}  
