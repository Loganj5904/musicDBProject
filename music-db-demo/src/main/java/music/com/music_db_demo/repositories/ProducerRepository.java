package music.com.music_db_demo.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import music.com.music_db_demo.modals.Producer;



public interface ProducerRepository extends JpaRepository<Producer, Integer>{

    Producer findById(Long id);
}  
