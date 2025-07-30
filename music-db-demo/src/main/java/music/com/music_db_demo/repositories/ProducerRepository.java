package music.com.music_db_demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import music.com.music_db_demo.modals.Label;
import music.com.music_db_demo.modals.Producer;
import java.util.List;



public interface ProducerRepository extends JpaRepository<Producer, Long>{

    @Query("SELECT p FROM Producer p ORDER BY p.id")
    List<Producer> findAllProducers();

    @Query("SELECT p FROM Producer p WHERE p.producer_name = :producer_name")
    Producer findByName(@Param ("producer_name") String producer_name);


    
}  
