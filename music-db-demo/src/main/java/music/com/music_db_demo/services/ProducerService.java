package music.com.music_db_demo.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import music.com.music_db_demo.modals.Producer;
import music.com.music_db_demo.repositories.ProducerRepository;


@Service
public class ProducerService {

    @Autowired
    ProducerRepository producerRepository;

    private static final Logger logger = LoggerFactory.getLogger(ProducerService.class);

    @Transactional
    public Producer getProducer(Long id){
        return producerRepository.findById(id);
    }

}