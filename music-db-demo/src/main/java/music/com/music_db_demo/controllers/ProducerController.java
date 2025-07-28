package music.com.music_db_demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import music.com.music_db_demo.modals.Producer;
import music.com.music_db_demo.services.ProducerService;


@RestController
public class ProducerController{

    @Autowired
    private ProducerService producerService;

    @GetMapping("/producer/{id}")
    Producer getArtistProducerById(@PathVariable("id") Long id) {
        return producerService.getProducer(id);
    }
    

}