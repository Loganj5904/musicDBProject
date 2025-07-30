package music.com.music_db_demo.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import music.com.music_db_demo.modals.Artist;
import music.com.music_db_demo.modals.Label;
import music.com.music_db_demo.repositories.LabelRepository;
import java.util.List;
import java.util.Optional;



@Service
public class LabelService {

    @Autowired
    LabelRepository labelRepository;

    private static final Logger logger = LoggerFactory.getLogger(LabelService.class);

    @Transactional
    public List<Label> getAllLabels() {
        return labelRepository.findAllLabels();
    }

    
    @Transactional
    public Optional<Label> getLabelById(Long id){
        return labelRepository.findById(id);
    }
        

    @Transactional
    public Label getLabelByName(String label_name){
        return labelRepository.findByName(label_name);
    }

    

    @Transactional
    public Label saveLabel(Label label){
        return labelRepository.save(label);
    }

    @Transactional
    public void deleteLabel(Long id) {
        labelRepository.deleteById(id);
    }

    @Transactional
    public void deleteLabelByName(String name) {
        labelRepository.delete(labelRepository.findByName(name));
    }
        
        

}