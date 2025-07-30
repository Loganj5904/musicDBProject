package music.com.music_db_demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import music.com.music_db_demo.modals.Artist;
import music.com.music_db_demo.modals.Label;
import music.com.music_db_demo.services.LabelService;
import java.util.List;
import java.util.Optional;



@RestController
public class LabelController{

    @Autowired
    private LabelService labelService;

    @GetMapping("/label")
    List<Label> getAllLabels() {
        return labelService.getAllLabels();
    }

    
    @GetMapping("/label/id/{id}")
    Optional<Label> getLabelById(@PathVariable("id") Long id) {
        return labelService.getLabelById(id);
    }
        

    @GetMapping("/label/name/{name}")
    Label getLabelByName(@PathVariable("name") String label_name) {
        return labelService.getLabelByName(label_name);
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

    @PostMapping("/label/delete/id/{id}")
    public ResponseEntity<?> postMethodIdDelete(@PathVariable("id") Long id) {
        //TODO: process POST request
        String label_name = labelService.getLabelById(id).get().getName();
        labelService.deleteLabel(id);
        ResponseEntity<?> entity = new ResponseEntity<>(label_name + " deleted successfully", HttpStatus.CREATED);
        return entity;
    }

    @PostMapping("/label/delete/name/{name}")
    public ResponseEntity<?> postMethodNameDelete(@PathVariable("name") String name) {
        //TODO: process POST request
        String label_name = labelService.getLabelByName(name).getName();
        labelService.deleteLabelByName(label_name);
        ResponseEntity<?> entity = new ResponseEntity<>(label_name + " deleted successfully", HttpStatus.CREATED);
        return entity;
    }

        
        
    

}