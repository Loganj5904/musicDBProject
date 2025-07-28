package music.com.music_db_demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import music.com.music_db_demo.modals.Artist;


public interface ArtistRepository extends JpaRepository<Artist, Integer>{

    Artist findById(Long id);
}  