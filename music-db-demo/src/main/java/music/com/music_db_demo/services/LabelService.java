package music.com.music_db_demo.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import music.com.music_db_demo.modals.Label;
import music.com.music_db_demo.repositories.LabelRepository;


@Service
public class LabelService {

    @Autowired
    LabelRepository labelRepository;

    private static final Logger logger = LoggerFactory.getLogger(LabelService.class);

    @Transactional
    public Label getLabel(Long id){
        return labelRepository.findById(id);
    }

}