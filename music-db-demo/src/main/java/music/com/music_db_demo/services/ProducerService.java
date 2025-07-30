package music.com.music_db_demo.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import music.com.music_db_demo.modals.Artist;
import music.com.music_db_demo.modals.Producer;
import music.com.music_db_demo.repositories.ProducerRepository;
import java.util.List;
import java.util.Optional;



@Service
public class ProducerService {

    @Autowired
    ProducerRepository producerRepository;

    private static final Logger logger = LoggerFactory.getLogger(ProducerService.class);

    @Transactional
    public List<Producer> getAllProducers() {
        return producerRepository.findAllProducers();
    }

    
    @Transactional
    public Optional<Producer> getProducerById(Long id){
        return producerRepository.findById(id);
    }
        

    @Transactional
    public Producer getProducerByName(String producer_name){
        return producerRepository.findByName(producer_name);
    }

    

    @Transactional
    public Producer saveProducer(Producer producer) {
        return producerRepository.save(producer);
    }

    @Transactional
    public void deleteProducer(Long id) {
        producerRepository.deleteById(id);
    }

    @Transactional
    public void deleteProducerByName(String name) {
        producerRepository.delete(producerRepository.findByName(name));
    }
        
        

}