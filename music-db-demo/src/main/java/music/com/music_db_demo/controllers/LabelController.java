package music.com.music_db_demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import music.com.music_db_demo.modals.Label;
import music.com.music_db_demo.services.LabelService;



@RestController
public class LabelController{

    @Autowired
    private LabelService labelService;

    @GetMapping("/label/{id}")
    Label getLabelById(@PathVariable("id") Long id) {
        return labelService.getLabel(id);
    }

    @PostMapping("/label/add/{name}")
    public ResponseEntity<?> postMethodName(@PathVariable("name") String name) {
        //TODO: process POST request
        Label addLabel = new Label();
        addLabel.setName(name);
        labelService.saveLabel(addLabel);
        ResponseEntity<?> entity = new ResponseEntity<>(addLabel, HttpStatus.CREATED);
        return entity;
    }
    
    

}