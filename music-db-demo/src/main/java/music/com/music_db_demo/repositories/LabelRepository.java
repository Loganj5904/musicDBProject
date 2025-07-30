package music.com.music_db_demo.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import music.com.music_db_demo.modals.Artist;
import music.com.music_db_demo.modals.Label;
import java.util.List;



public interface LabelRepository extends JpaRepository<Label, Long>{

    @Query("SELECT l FROM Label l ORDER BY l.id")
    List<Label> findAllLabels();
         
    @Query("SELECT l FROM Label l WHERE l.label_name = :label_name")
    Label findByName(@Param ("label_name") String label_name);





    
    

}  