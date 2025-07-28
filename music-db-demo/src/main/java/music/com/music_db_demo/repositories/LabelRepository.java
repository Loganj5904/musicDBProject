package music.com.music_db_demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import music.com.music_db_demo.modals.Label;



public interface LabelRepository extends JpaRepository<Label, Integer>{

    Label findById(Long id);

    
}  