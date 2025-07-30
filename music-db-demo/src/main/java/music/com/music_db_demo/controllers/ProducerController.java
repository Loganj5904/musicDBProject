package music.com.music_db_demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import music.com.music_db_demo.modals.Artist;
import music.com.music_db_demo.modals.Label;
import music.com.music_db_demo.modals.Producer;
import music.com.music_db_demo.services.ProducerService;
import java.util.Optional;



@RestController
public class ProducerController{

    @Autowired
    private ProducerService producerService;

    @GetMapping("/producer")
    List<Producer> getAllProducers() {
        return producerService.getAllProducers();
    }

     
    @GetMapping("/producer/id/{id}")
    Optional<Producer> getArtistProducerById(@PathVariable("id") Long id) {
        return producerService.getProducerById(id);
    }
        
        

    @GetMapping("/producer/name/{name}")
    Producer getArtistProducerByName(@PathVariable("name") String producer_name) {
        return producerService.getProducerByName(producer_name);
    }

    @PostMapping("/producer/add/{name}")
    public ResponseEntity<?> postMethodName(@PathVariable("name") String name) {
        //TODO: process POST request
        Producer addProducer = new Producer();
        addProducer.setName(name);
        producerService.saveProducer(addProducer);
        ResponseEntity<?> entity = new ResponseEntity<>(addProducer, HttpStatus.CREATED);
        return entity;
    }

    @PostMapping("/producer/delete/id/{id}")
    public ResponseEntity<?> postMethodIdDelete(@PathVariable("id") Long id) {
        //TODO: process POST request
        String producer_name = producerService.getProducerById(id).get().getName();
        producerService.deleteProducer(id);
        ResponseEntity<?> entity = new ResponseEntity<>(producer_name + " deleted successfully", HttpStatus.CREATED);
        return entity;
    }

    @PostMapping("/producer/delete/name/{name}")
    public ResponseEntity<?> postMethodNameDelete(@PathVariable("name") String name) {
        //TODO: process POST request
        String producer_name = producerService.getProducerByName(name).getName();
        producerService.deleteProducerByName(name);
        ResponseEntity<?> entity = new ResponseEntity<>(producer_name + " deleted successfully", HttpStatus.CREATED);
        return entity;
    }



    
        
        
    

}