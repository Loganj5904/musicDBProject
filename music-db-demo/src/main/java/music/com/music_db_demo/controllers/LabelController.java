package music.com.music_db_demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
    

}